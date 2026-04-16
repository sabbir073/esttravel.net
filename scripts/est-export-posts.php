<?php
/**
 * Plugin Name: EST Travel Blog Exporter
 * Description: One-page plugin to export all WordPress posts as JSON matching the EST Travel Next.js blog structure. Supports Yoast SEO fields.
 * Version: 1.0.0
 * Author: EST Travel
 */

if (!defined('ABSPATH')) {
    exit;
}

// Admin menu
add_action('admin_menu', function () {
    add_management_page(
        'EST Blog Export',
        'EST Blog Export',
        'manage_options',
        'est-blog-export',
        'est_export_render_page'
    );
});

// Render admin page
function est_export_render_page() {
    ?>
    <div class="wrap">
        <h1>EST Travel Blog Exporter</h1>
        <p>Export all published posts as a JSON file matching the EST Travel Next.js structure.</p>
        <form method="post" action="<?php echo admin_url('admin-post.php'); ?>">
            <?php wp_nonce_field('est_export_posts', 'est_export_nonce'); ?>
            <input type="hidden" name="action" value="est_export_posts" />
            <table class="form-table">
                <tr>
                    <th scope="row">Post Status</th>
                    <td>
                        <label><input type="checkbox" name="status[]" value="publish" checked /> Published</label><br/>
                        <label><input type="checkbox" name="status[]" value="draft" /> Draft</label><br/>
                    </td>
                </tr>
                <tr>
                    <th scope="row">Include Content Images</th>
                    <td>
                        <label><input type="checkbox" name="include_content_images" value="1" checked /> List all image URLs found in post content</label>
                    </td>
                </tr>
            </table>
            <?php submit_button('Export as JSON'); ?>
        </form>
    </div>
    <?php
}

// Handle export
add_action('admin_post_est_export_posts', 'est_export_handle');

function est_export_handle() {
    if (!current_user_can('manage_options')) {
        wp_die('Unauthorized');
    }
    check_admin_referer('est_export_posts', 'est_export_nonce');

    $statuses = isset($_POST['status']) ? array_map('sanitize_text_field', $_POST['status']) : ['publish'];
    $include_content_images = !empty($_POST['include_content_images']);

    $posts = get_posts([
        'post_type'      => 'post',
        'post_status'    => $statuses,
        'posts_per_page' => -1,
        'orderby'        => 'date',
        'order'          => 'ASC',
    ]);

    $export = [
        'exported_at' => gmdate('c'),
        'site_url'    => home_url(),
        'total_posts' => count($posts),
        'categories'  => est_export_all_categories(),
        'tags'        => est_export_all_tags(),
        'posts'       => [],
    ];

    foreach ($posts as $post) {
        $export['posts'][] = est_export_map_post($post, $include_content_images);
    }

    // Send as downloadable JSON
    $filename = 'est-blog-export-' . date('Y-m-d-His') . '.json';
    header('Content-Type: application/json; charset=utf-8');
    header('Content-Disposition: attachment; filename="' . $filename . '"');
    header('Cache-Control: no-cache, no-store, must-revalidate');
    echo json_encode($export, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE);
    exit;
}

/**
 * Map a WP_Post to the EST Travel structure.
 *
 * Target fields (from CreatePostInput + BlogPostFull):
 *   title, slug, content, excerpt, featured_image, featured_image_alt,
 *   status, meta_title, meta_description, og_image, canonical_url,
 *   categories (names + slugs), tags (names + slugs),
 *   author_name, published_at, created_at, updated_at
 */
function est_export_map_post(WP_Post $post, bool $include_content_images): array {
    // Status mapping: WP "publish" -> EST "published"
    $status_map = [
        'publish' => 'published',
        'draft'   => 'draft',
        'pending' => 'draft',
        'private' => 'draft',
    ];

    // Featured image
    $featured_image     = null;
    $featured_image_alt = null;
    $thumbnail_id       = get_post_thumbnail_id($post->ID);
    if ($thumbnail_id) {
        $featured_image     = wp_get_attachment_url($thumbnail_id);
        $featured_image_alt = get_post_meta($thumbnail_id, '_wp_attachment_image_alt', true) ?: null;
    }

    // Yoast SEO fields
    $meta_title       = get_post_meta($post->ID, '_yoast_wpseo_title', true) ?: null;
    $meta_description = get_post_meta($post->ID, '_yoast_wpseo_metadesc', true) ?: null;
    $canonical_url    = get_post_meta($post->ID, '_yoast_wpseo_canonical', true) ?: null;

    // Yoast OG image
    $og_image = get_post_meta($post->ID, '_yoast_wpseo_opengraph-image', true) ?: null;

    // Resolve Yoast title variables (%%title%%, %%sep%%, %%sitename%%, etc.)
    if ($meta_title) {
        $meta_title = est_export_resolve_yoast_vars($meta_title, $post);
    }

    // Categories
    $wp_categories = wp_get_post_categories($post->ID, ['fields' => 'all']);
    $categories = [];
    foreach ($wp_categories as $cat) {
        $categories[] = [
            'name' => $cat->name,
            'slug' => $cat->slug,
        ];
    }

    // Tags
    $wp_tags = wp_get_post_tags($post->ID, ['fields' => 'all']);
    $tags = [];
    if ($wp_tags && !is_wp_error($wp_tags)) {
        foreach ($wp_tags as $tag) {
            $tags[] = [
                'name' => $tag->name,
                'slug' => $tag->slug,
            ];
        }
    }

    // Content - process to get absolute image URLs
    $content = $post->post_content;
    $content = apply_filters('the_content', $content);

    // Extract all image URLs from content
    $content_images = [];
    if ($include_content_images) {
        preg_match_all('/<img[^>]+src=["\']([^"\']+)["\'][^>]*>/i', $content, $matches);
        if (!empty($matches[1])) {
            $content_images = array_values(array_unique($matches[1]));
        }
    }

    // Author
    $author_name = get_the_author_meta('display_name', $post->post_author);

    // Excerpt - use manual excerpt, or generate from content
    $excerpt = $post->post_excerpt;
    if (empty($excerpt)) {
        $excerpt = wp_trim_words(wp_strip_all_tags($post->post_content), 40, '...');
    }

    return [
        // Core fields matching CreatePostInput / BlogPostFull
        'title'              => $post->post_title,
        'slug'               => $post->post_name,
        'content'            => $content,
        'excerpt'            => $excerpt ?: null,
        'featured_image'     => $featured_image,
        'featured_image_alt' => $featured_image_alt,
        'status'             => $status_map[$post->post_status] ?? 'draft',
        'author_name'        => $author_name ?: 'EST Travel',

        // SEO fields matching BlogPostFull
        'meta_title'         => $meta_title,
        'meta_description'   => $meta_description,
        'og_image'           => $og_image,
        'canonical_url'      => $canonical_url,

        // Relations (names + slugs for matching/creating on import)
        'categories'         => $categories,
        'tags'               => $tags,

        // Timestamps
        'published_at'       => $post->post_status === 'publish'
            ? get_post_time('c', true, $post)
            : null,
        'created_at'         => get_post_time('c', true, $post),
        'updated_at'         => get_post_modified_time('c', true, $post),

        // Extra: all image URLs in content (for migration/download)
        'content_images'     => $content_images,

        // WordPress reference ID (useful for debugging, not imported)
        '_wp_id'             => $post->ID,
    ];
}

/**
 * Export all categories (for bulk creation on import side).
 */
function est_export_all_categories(): array {
    $cats = get_categories(['hide_empty' => false]);
    $result = [];
    foreach ($cats as $cat) {
        if ($cat->slug === 'uncategorized') continue;
        $result[] = [
            'name'        => $cat->name,
            'slug'        => $cat->slug,
            'description' => $cat->description ?: null,
            'post_count'  => (int) $cat->count,
        ];
    }
    return $result;
}

/**
 * Export all tags (for bulk creation on import side).
 */
function est_export_all_tags(): array {
    $tags = get_tags(['hide_empty' => false]);
    $result = [];
    if ($tags && !is_wp_error($tags)) {
        foreach ($tags as $tag) {
            $result[] = [
                'name' => $tag->name,
                'slug' => $tag->slug,
            ];
        }
    }
    return $result;
}

/**
 * Resolve common Yoast SEO title variables.
 */
function est_export_resolve_yoast_vars(string $title, WP_Post $post): string {
    $sep = '-';
    // Try to get Yoast separator setting
    $wpseo_titles = get_option('wpseo_titles');
    if (!empty($wpseo_titles['separator'])) {
        $sep_map = [
            'sc-dash'   => '-',
            'sc-ndash'  => '&ndash;',
            'sc-mdash'  => '&mdash;',
            'sc-pipe'   => '|',
            'sc-bullet' => '&bull;',
            'sc-star'   => '*',
        ];
        $sep = $sep_map[$wpseo_titles['separator']] ?? '-';
    }

    $replacements = [
        '%%title%%'       => $post->post_title,
        '%%sep%%'         => $sep,
        '%%sitename%%'    => get_bloginfo('name'),
        '%%sitedesc%%'    => get_bloginfo('description'),
        '%%date%%'        => get_the_date('', $post),
        '%%excerpt%%'     => $post->post_excerpt,
        '%%primary_category%%' => est_export_get_primary_category($post->ID),
    ];

    return str_replace(array_keys($replacements), array_values($replacements), $title);
}

/**
 * Get Yoast primary category name.
 */
function est_export_get_primary_category(int $post_id): string {
    $primary_term_id = get_post_meta($post_id, '_yoast_wpseo_primary_category', true);
    if ($primary_term_id) {
        $term = get_term((int) $primary_term_id, 'category');
        if ($term && !is_wp_error($term)) {
            return $term->name;
        }
    }
    $cats = wp_get_post_categories($post_id, ['fields' => 'names']);
    return !empty($cats) ? $cats[0] : '';
}
