# EST International Travel & Tours - Complete Website Redesign Plan

## Tech Stack

- **Framework:** Next.js 16+ (App Router)
- **Styling:** Tailwind CSS 4+
- **Language:** TypeScript
- **Database:** MySQL
- **Admin Panel:** Custom-built (WordPress-like blog editor)
- **SEO:** Auto-generated meta tags, OG images, structured data
- **Media:** Custom media library (WordPress-style)
- **Deployment:** Vercel (recommended)

---

## Company Overview

**Company Name:** EST International Travel & Tours (EST Int'l Travel)
**Location:** 6776 Southwest Fwy #444, Houston, TX 77074
**Phone:** +1 713-974-0521
**Email:** info@esttravel.net
**Specialty:** Cheapest flights to Africa, Nigerian visa processing, full-service travel agency
**Tagline:** "Cheapest Flights to Africa | Book Dream Travel Deals"

---

## Current Website Analysis

### Problems with Current Site
1. Outdated design (built 2020-2021 with WordPress + Elementor)
2. Inconsistent styling and layout across pages
3. Generic stock images without cohesive visual identity
4. Poor mobile responsiveness
5. Broken contact forms on some pages
6. No structured data/schema markup optimization
7. Slow loading due to unoptimized images
8. Copyright year stuck at 2021
9. Social media links are placeholder URLs
10. Blog has 32 pages of posts but poor discoverability

### Design Direction for Redesign
- **Modern, premium travel agency aesthetic** - clean, spacious layouts
- **Trust-building elements** - testimonials, certifications, years of experience
- **Africa-inspired warm color palette** - golds, earth tones, deep greens
- **Professional typography** - modern sans-serif paired with elegant serif
- **High-quality imagery** - full-bleed hero sections, parallax effects
- **Mobile-first responsive design**
- **Fast loading** - optimized images, lazy loading, Next.js SSR/SSG

---

## Color Palette (Proposed)

| Role | Color | Hex |
|------|-------|-----|
| Primary | Rich Gold | #C8963E |
| Primary Dark | Deep Gold | #A67B2E |
| Secondary | Forest Green | #1B5E3B |
| Secondary Light | Safari Green | #2D8B5E |
| Accent | Sunset Orange | #E8712B |
| Dark | Deep Charcoal | #1A1A2E |
| Dark Lighter | Slate | #2D2D44 |
| Light | Warm White | #FAFAF5 |
| Light Alt | Cream | #F5F0E8 |
| Text Primary | Near Black | #1A1A1A |
| Text Secondary | Warm Gray | #5A5A6E |

---

## Typography (Proposed)

- **Headings:** Playfair Display (elegant serif)
- **Body:** Inter or DM Sans (clean sans-serif)
- **Accent/Nav:** Montserrat (geometric sans-serif)

---

## Complete Page Inventory & Redesign Plan

### Page Breakdown

| # | Page | Current URL | Priority |
|---|------|------------|----------|
| 1 | Homepage | `/` | P0 |
| 2 | About Us | `/about-us` | P0 |
| 3 | Services (Main) | `/services` | P0 |
| 4 | Contact Us | `/contact` | P0 |
| 5 | Booking | `/booking` | P0 |
| 6 | Blog Listing | `/blog` | P0 |
| 7 | Destinations Hub (Africa) | `/destinations/africa` | P0 |
| 8 | Lagos | `/destinations/lagos` | P1 |
| 9 | Abuja | `/destinations/abuja` | P1 |
| 10 | Nairobi | `/destinations/nairobi` | P1 |
| 11 | Johannesburg | `/destinations/johannesburg` | P1 |
| 12 | Port Harcourt | `/destinations/port-harcourt` | P1 |
| 13 | Lome | `/destinations/lome` | P1 |
| 14 | Kinshasa | `/destinations/kinshasa` | P1 |
| 15 | Kano | `/destinations/kano` | P1 |
| 16 | Freetown | `/destinations/freetown` | P1 |
| 17 | Entebbe | `/destinations/entebbe` | P1 |
| 18 | Dar Es Salaam | `/destinations/dar-es-salaam` | P1 |
| 19 | Dakar | `/destinations/dakar` | P1 |
| 20 | Asmara | `/destinations/asmara` | P1 |
| 21 | Accra | `/destinations/accra` | P1 |
| 22 | Safari Packages | `/services/safari-packages` | P1 |
| 23 | Nigerian Visa | `/services/nigerian-visa` | P1 |
| 24 | Hotel & Packages | `/services/hotel-packages` | P1 |
| 25 | Indian Tourist Visa | `/services/indian-visa` | P2 |
| 26 | Privacy Policy | `/privacy-policy` | P2 |
| 27 | Blog Single Post | `/blog/[slug]` | P1 (template) |
| 28 | Admin Dashboard | `/admin` | P1 |
| 29 | Admin Blog Editor | `/admin/blog/new` | P1 |
| 30 | Admin Media Library | `/admin/media` | P1 |

---

## Detailed Page Designs

---

### 1. HOMEPAGE (`/`)

**Current Content to Preserve:**
- "Live your dream now! Get Cheapest flights to Africa" hero message
- EST is an "African Dream Travel Agency in USA" with "Years of experience"
- Service highlights: Special Fare, Call Us, Go Africa, Travel Insurance
- "Fly With Lowest Fares Around The WORLD" section
- Service showcase: Cruise, Visa, Hotels, Airline Tickets
- What We Do: Lowest Airlines Tickets, Easy Payment Plans, Travel Insurance, Cruise
- Blog posts preview
- Customer testimonials
- CTA phone number: +1 713-974-0521

**Redesigned Sections (top to bottom):**

1. **Sticky Navigation Bar**
   - EST logo (left)
   - Nav links: Home, About, Destinations (mega dropdown), Services (dropdown), Blog, Contact
   - CTA button: "Book Now" (gold)
   - Phone number: "+1 713-974-0521"
   - Mobile hamburger menu

2. **Hero Section (Full viewport height)**
   - Full-bleed background image/video of African landscape
   - Overlay gradient (dark to transparent)
   - Large heading: "Live Your Dream Now!"
   - Subheading: "Get the Cheapest Flights to Africa"
   - Inline quick search form: From, To, Date, Passengers, Search button
   - Floating trust badges: "20+ Years Experience" | "Best Prices Guaranteed" | "24/7 Support"

3. **Popular Destinations Grid**
   - Section title: "Explore Africa's Best Destinations"
   - Interactive card grid (3x2 or responsive) with destination images
   - Cards: Lagos, Nairobi, Accra, Johannesburg, Abuja, Dar Es Salaam
   - Each card: image, city name, country, "from $XXX" price tag
   - Hover effect: zoom + overlay with quick details
   - "View All Destinations" link

4. **About/Trust Section (Split layout)**
   - Left: Large image with overlapping accent box showing stats
   - Right: "Africa's Most Trusted Travel Partner"
   - Body text about EST's expertise
   - Stats counter animation: Years in Business, Happy Travelers, Destinations, Partner Airlines
   - "Learn More About Us" button

5. **Services Showcase**
   - Section title: "What We Offer"
   - 4 service cards in a grid:
     - **Cheap Flights to Africa** - "Lowest airline tickets to anywhere in Africa"
     - **Nigerian Visa Services** - "All kinds of Nigerian visas and emergency travel certificates"
     - **Hotel & Vacation Packages** - "Complete travel solutions from budget to luxury"
     - **Safari Adventures** - "Unforgettable African safari experiences"
   - Each card: icon/image, title, description, "Learn More" link
   - Additional row of 4 icon-features: Easy Payment Plans, Travel Insurance, Cruise Packages, 24/7 Support

6. **Why Choose Us / Value Proposition**
   - Background: subtle African pattern or map
   - 3 columns:
     - "Special Fares" - Monthly specials and seasonal discounts
     - "Expert Guidance" - African travel experts with local knowledge
     - "Complete Service" - One-stop agency for all travel needs
   - "Fly With Lowest Fares Around The World" messaging

7. **Featured Blog Posts**
   - Section title: "Travel Tips & Latest News"
   - 3-column blog card layout
   - Each card: featured image, category tag, title, excerpt, date, "Read More"
   - "View All Articles" button

8. **Testimonials Carousel**
   - Section title: "What Our Clients Say"
   - Large quote card with customer photo, name, review
   - Navigation dots/arrows
   - Star ratings
   - Testimonial content from current site:
     - "I have never met Nancy in person but the experience was so humanly personal and loyal...I will forever be grateful"
     - Praise for Jim (visa services) and Nancy (flight tickets)

9. **CTA Banner**
   - Full-width gold/gradient background
   - "Ready to Plan Your African Adventure?"
   - Phone: +1 713-974-0521
   - "Book Now" and "Contact Us" buttons

10. **Footer (Multi-column)**
    - Column 1: Logo, company description, social media icons
    - Column 2: Quick Links (Home, About, Services, Blog, Contact)
    - Column 3: Destinations (top 6-8 cities)
    - Column 4: Contact Info (address, phone, email, office hours)
    - Bottom bar: Copyright, Privacy Policy, Terms

---

### 2. ABOUT US (`/about-us`)

**Current Content to Preserve:**
- "Think Africa Think about Est International Travel & Tours"
- Africa described as "The Magical Magnificent Africa"
- Decades of industry experience
- Services: Discounted airfare, budget-friendly tickets to Nigeria, safari packages
- 24/7 staff availability, custom-designed travel itineraries
- Multiple booking channels: phone, fax, email, in-person office visits
- Travel insurance services, professional guides with local expertise

**Redesigned Layout:**

1. **Hero Banner**
   - Background image of African landscape
   - Title: "About EST International Travel & Tours"
   - Breadcrumb navigation

2. **Our Story Section (Split)**
   - Left: Image collage or single hero image
   - Right: "Think Africa, Think EST International Travel & Tours"
   - Full description: "The Magical Magnificent Africa" philosophy
   - Decades of experience, Houston-based, serving the African diaspora

3. **Mission & Values**
   - 3 cards: Our Mission, Our Vision, Our Values
   - Emphasize commitment to affordable African travel

4. **What We Specialize In**
   - Icon list:
     - Discounted airfare to African destinations
     - Budget-friendly tickets to Nigeria
     - Safari packages
     - Competitive fares to South Africa, Dakar, Cameroon, Tanzania, Nairobi
     - Nigerian visa processing
     - 24/7 staff availability
     - Custom-designed travel itineraries
     - Travel insurance services

5. **Statistics Bar**
   - Animated counters: Years of Experience, Destinations, Happy Clients, Flights Booked

6. **How We Work / Booking Channels**
   - Phone, Email, In-Person Office, Online Booking
   - Each with icon and description

7. **Team Section (optional - if they want to add team members later)**
   - Grid of team member cards

8. **CTA Section**
   - "Ready to explore Africa? Contact us today!"

---

### 3. SERVICES PAGE (`/services`)

**Current Content to Preserve:**
- "High Quality Services" heading
- Nigerian Visa: "One of the most important service Est Int'l Travel provide is obtaining and processing visas for Nigerian Citizen."
- Hotel & Packages: "Est International Travel is a full service agency specializing in all Travel fields and Hotels and Packages are no exceptions."
- Travel Insurance: "Since 1971, TravelSafe Insurance has been crafting industry-leading travel protection plans for travelers and travel pro's like you."

**Redesigned Layout:**

1. **Hero Banner**
   - Title: "Our Services"
   - Subtitle: "Your Complete Travel Solution"

2. **Services Grid (Alternating left-right sections)**

   **Service 1: Cheap Flights to Africa**
   - Image + description
   - Key points: lowest fares, multiple airlines, flexible dates
   - CTA: "Search Flights"

   **Service 2: Nigerian Visa Services**
   - Image (visa-passport.jpg)
   - "One of the most important service Est Int'l Travel provide is obtaining and processing visas for Nigerian Citizen."
   - Visa types: Visit, Emergency, Infant/Child, Business, STR
   - CTA: "Learn More"

   **Service 3: Hotel & Packages**
   - Image (hotel.jpg)
   - "Est International Travel is a full service agency specializing in all Travel fields and Hotels and Packages are no exceptions."
   - Disney, Safari, Caribbean, Great Barrier Reef packages
   - CTA: "View Packages"

   **Service 4: Safari Adventures**
   - Image (safari-package.jpg)
   - Kenya, South Africa, Zimbabwe, Tanzania
   - Package inclusions: sightseeing, meals, accommodation, guides
   - CTA: "Explore Safaris"

   **Service 5: Travel Insurance**
   - Image (travel-insurance.jpg)
   - TravelSafe Insurance partnership since 1971
   - CTA: "Get Insured"

   **Service 6: Cruise Services**
   - Image (cruise.jpg)
   - "Cruise Around the World with Us"
   - CTA: "View Cruises"

3. **Why Choose Our Services**
   - 4-column feature grid with icons

4. **CTA Section**

---

### 4. CONTACT US (`/contact`)

**Current Content to Preserve:**
- Phone: +713-974-0521
- Email: info@esttravel.net
- Address: 6776 Southwest Fwy #444, Houston, TX 77074
- Contact form: Name, Email, Subject, Message
- "We are looking forward to hearing from you. Please feel free to get in touch via the form below, we will get back to you as soon as possible."

**Redesigned Layout:**

1. **Hero Banner**
   - Title: "Get In Touch"
   - Subtitle: "We're here to help you plan your perfect trip"

2. **Contact Info Cards (3 cards row)**
   - Card 1: Phone icon + "+1 713-974-0521" + "Call us 24/7"
   - Card 2: Email icon + "info@esttravel.net" + "Email us anytime"
   - Card 3: Location icon + "6776 Southwest Fwy #444, Houston, TX 77074"

3. **Split Section**
   - Left: Contact form (Name, Email, Phone, Subject, Travel Interest dropdown, Message, Submit)
   - Right: Google Maps embed showing office location

4. **FAQ Accordion (optional)**
   - Common questions about booking, visas, payment plans

---

### 5. BOOKING PAGE (`/booking`)

**Current Content to Preserve:**
- Form fields: First Name, Last Name, Email, Phone, Flying From, Departure Date, Flying To, Arrival Date, Comments
- Submit button labeled "Book"

**Redesigned Layout:**

1. **Hero Banner**
   - Title: "Book Your Flight"
   - Subtitle: "Affordable flights to Africa and beyond"

2. **Booking Form (Card-style, centered)**
   - Step 1: Trip Type (One-way / Round-trip / Multi-city)
   - Step 2: Flight Details
     - Flying From (with autocomplete)
     - Flying To (with autocomplete)
     - Departure Date (date picker)
     - Return Date (date picker, if round-trip)
     - Number of Passengers (adults, children)
     - Class (Economy, Business, First)
   - Step 3: Personal Information
     - First Name, Last Name
     - Email, Phone Number
     - Special Requests / Comments
   - Submit: "Request Quote" button
   - Note: "Our agents will contact you with the best available fares within 24 hours"

3. **Why Book With Us (3 icons)**
   - Best Price Guarantee
   - Flexible Payment Plans
   - Expert Travel Agents

4. **Popular Routes Quick-Select Cards**
   - Houston → Lagos, Houston → Nairobi, Houston → Accra, etc.

---

### 6. BLOG LISTING PAGE (`/blog`)

**Current Content:**
- 32 pages of blog posts
- Categories: Nigerian Visa Travel Agency, Travel Agencies, Travel Agency, Travel Agent, Travel Insurance, Reputable Travel Agency, Uncategorized
- Posts with featured images, titles, categories

**Redesigned Layout:**

1. **Hero Banner**
   - Title: "Travel Tips & News"
   - Subtitle: "Explore the latest travel insights about Africa"

2. **Featured/Latest Post (Full width)**
   - Large featured image
   - Category tag, title, excerpt, author, date
   - "Read Article" button

3. **Blog Grid**
   - 3-column responsive grid (2 on tablet, 1 on mobile)
   - Each card: featured image, category badge, title, excerpt, date
   - Hover effect with smooth animation

4. **Sidebar (desktop) / Top filter (mobile)**
   - Search bar
   - Categories filter
   - Recent Posts
   - Tags cloud

5. **Pagination**
   - Modern pagination: Previous, 1, 2, 3, ..., 32, Next

---

### 7. DESTINATIONS HUB (`/destinations/africa`)

**Current Content:**
- "Travel to South Africa Without Breaking Your Budget"
- General information about cheap flights to Africa
- Peak season pricing (30% more)
- EST as experts in securing affordable fares

**Redesigned Layout:**

1. **Hero Banner**
   - Stunning Africa panoramic image
   - Title: "Explore Africa"
   - Subtitle: "Discover the continent's most incredible destinations"

2. **Interactive Map or Grid of All Destinations**
   - Clickable map of Africa with destination pins
   - OR: Beautiful photo grid of all 14 destinations
   - Each destination: image, city name, country, brief tagline

3. **Regions Section**
   - West Africa: Lagos, Abuja, Port Harcourt, Kano, Accra, Lome, Freetown, Dakar
   - East Africa: Nairobi, Dar Es Salaam, Entebbe
   - Southern Africa: Johannesburg
   - Central Africa: Kinshasa
   - Northeast Africa: Asmara

4. **Why Fly to Africa with EST**
   - Lowest fares, expert guidance, 24/7 support
   - Peak vs. off-peak season tips

5. **CTA: Book Your African Adventure**

---

### 8-21. INDIVIDUAL DESTINATION PAGES (`/destinations/[slug]`)

**Template Design (used for all 14 destinations):**

Each destination page follows a consistent template but with unique content.

1. **Hero Section**
   - Full-width destination hero image
   - City name + country
   - Quick facts: Population, Airport, Flight Duration from Houston

2. **About the Destination**
   - Full description (preserved from current site)
   - Climate/weather information

3. **Top Tourist Attractions**
   - Grid of attractions with icons
   - Content from current site for each city:

   **Lagos:** National Theatre, The New Afrika Shrine, Tarkwa Bay Beach, Terra Kulture, Elegushi Beach, Ikeja City Mall, Lekki Conservation Centre, Badagry, Bogobiri House, Freedom Park

   **Abuja:** Abuja Arts and Craft Village, National Arboretum, Pedam Lake, The National Mosque, Eagle Square, Giri Pottery Centre, The Velodrome, LadiKwali Pottery Centre, Ushafa Pottery Centre, IBB Golf and Club

   **Nairobi:** Nairobi National Park, Nairobi National Museum, Karura Forest, Kazuri Bead Factory, Giraffe Center, David Sheldrick Wildlife Trust, Karen Blixen Museum, Nairobi Arboretum Park, Carnivore Restaurant, Ngong Hills, Bomas of Kenya

   **Johannesburg:** 40+ art galleries, cultural centers and studios

   **Port Harcourt:** Port Harcourt Cultural Center, Mile One Market, Port Harcourt Tourist Beach, Bush-bar restaurants

   **Lome:** Grand Market, White beaches, Fetish Market, Koutammakou UNESCO World Heritage site, German/Portuguese/British heritage sites

   **Kinshasa:** Congo River BBQ experience on sandbars

   **Kano:** Gidan Makama Museum, Kano Marketplace (one of Africa's largest), Gidan Rumfa (13th century), Kano Central Mosque

   **Freetown:** National Railway Museum, Tacugama Chimpanzee Sanctuary, Charlotte Falls, St. George's Cathedral, Lumley Beach, Bunce Island, Sierra Leone National Museum, Cape Sierra Leone Lighthouse

   **Entebbe:** Reptile Village, Botanic Gardens, Wildlife Education Center, Sesse Islands, Entebbe Crafts Village, Entebbe Golf Club

   **Dar Es Salaam:** Kivukoni Front fish market, Lutheran Church, St. Joseph Cathedral, City museum, Mbudya Island, Bongoyo Island

   **Dakar:** Island of Goree, Ngor Island, Cathedral of Dakar, Village des Arts, Pink Lake, Les Mamelles Lighthouse, Mosque of Divinity

   **Asmara:** National Museum, Great Mosque, Synagogue, Greek Orthodox Church, Catholic Cathedral, Simbel Archaeological Site, Kohaito Archaeological Site, Asmara Central Market

   **Accra:** Bojo Beach, Labadi Beach, Arts Centre, Nima neighborhood, Kotoka International Airport

4. **Flight Information**
   - Average flight duration from US
   - Best time to visit / travel tips
   - Money-saving tips specific to destination

5. **Book This Destination CTA**
   - Inline booking form or "Get a Quote" button
   - Phone: +1 713-974-0521

6. **Related Destinations**
   - 3-4 cards of nearby/similar destinations

---

### 22. SAFARI PACKAGES (`/services/safari-packages`)

**Current Content to Preserve:**
- "Your Safari adventure starts with the first call to Est Int'l Travel where Safari is just name of the game."
- Kenya: Maasai Mara (guaranteed lion sightings), Tsavo, Amboseli, Nairobi, Nakuru, Meru Parks
- South Africa, Zimbabwe, Tanzania
- Inclusions: Sightseeing, transportation, meals, accommodation, tour directors, local guides
- Group discounts, private deluxe tours, air-conditioned vehicles

**Redesigned Layout:**

1. **Hero Section**
   - Stunning safari hero image
   - Title: "African Safari Adventures"
   - Subtitle: "Your Safari adventure starts with EST Int'l Travel"

2. **Safari Destinations Grid**
   - Kenya, South Africa, Zimbabwe, Tanzania cards
   - Each with image, highlights, "Explore" button

3. **What's Included**
   - Icon grid: Sightseeing, Transportation, Meals, Accommodation, Tour Directors, Local Guides, Group Discounts, Private Tours

4. **Featured Safari: Maasai Mara**
   - Dedicated section for their star attraction
   - "Guaranteed lion sightings"

5. **Request Safari Quote Form**

---

### 23. NIGERIAN VISA (`/services/nigerian-visa`)

**Current Content to Preserve:**
- "All Kind of Nigerian Visa's and Emergency Travel Certificate to Nigeria"
- "Buying airline tickets doesn't guarantee that you can enter into Nigeria"
- Visa Types: Visit Visa, Emergency Visa & Travel Certificates, Infant/Child Visas, Business Visa, STR Visa (oil & gas employment)
- Each type has specific descriptions about who needs them and benefits
- "Contact at your earliest EST Int'l Travel for any of your Nigerian Visa Services and travel on time."

**Redesigned Layout:**

1. **Hero Section**
   - Title: "Nigerian Visa Services"
   - Subtitle: "Expert processing for all Nigerian visa types"

2. **Important Notice Banner**
   - "Buying airline tickets doesn't guarantee entry into Nigeria - proper visa documentation is essential"

3. **Visa Types Grid**
   - 5 cards (one per visa type), each with:
     - Icon
     - Visa type name
     - Description
     - Who it's for
     - "Get Started" button

   - **Nigerian Visit Visa:** For general travelers without Nigerian passports
   - **Emergency Visa & Travel Certificates:** For unexpected/urgent travel situations
   - **Infant/Child Visas:** Specialized processing for young travelers
   - **Business Visa:** For business professionals, time-sensitive travel
   - **STR Visa:** For Nigeria's oil and gas sector employment

4. **Process Steps**
   - Step 1: Contact us
   - Step 2: Submit documents
   - Step 3: Processing
   - Step 4: Receive visa

5. **FAQ Section**
6. **CTA: Contact for visa services**

---

### 24. HOTEL & PACKAGES (`/services/hotel-packages`)

**Current Content to Preserve:**
- "Est International Travel is a full service agency specializing in all Travel fields and Hotels and Packages are no exceptions."
- Coverage: major international destinations, popular urban centers
- Range: budget-friendly to luxury five-star
- Package types: Disney vacations, African safari, Caribbean beach resorts, Great Barrier Reef snorkeling
- Complete solutions: flights + accommodations + guided tours + ground transportation

**Redesigned Layout:**

1. **Hero Section**
   - Title: "Hotel & Vacation Packages"
   - Background image of luxury hotel

2. **Package Categories Grid**
   - African Safari Packages
   - Caribbean Beach Resorts
   - Disney Vacation Packages
   - Adventure & Snorkeling
   - Each with stunning image and description

3. **What's Included in Our Packages**
   - Flights, Accommodations, Guided Tours, Ground Transportation
   - Budget to Luxury range

4. **Request Custom Package Form**

---

### 25. INDIAN TOURIST VISA (`/services/indian-visa`)

**Current Content to Preserve (comprehensive visa guide):**
- India welcomed over 1 million US visitors in 2018
- Requirements:
  1. Passport: Original + photocopy, signed, 6-month validity, 2 blank pages
  2. Visa Application Form: valid email, exact passport name match, visa type selection
  3. Photographs: 2x2 inch, colored, plain background, no glasses, don't staple
  4. Proof of State Residency: driver's license/state ID, address matching application, or utility bills (90 days)
  5. Additional Documents: all forms printed and signed
- Business visa information: letter from Indian business partner required

**Redesigned Layout:**

1. **Hero Section**
   - Title: "Indian Tourist Visa Guide"

2. **Requirements Checklist**
   - Visual step-by-step guide with icons
   - Each requirement detailed

3. **Application Process**
4. **Business vs Tourist Visa Comparison**
5. **CTA: Let us help with your application**

---

### 26. PRIVACY POLICY (`/privacy-policy`)

**Content to Preserve:**
- SMS Service Terms (phone number collection, "STOP" to unsubscribe, 24-hour removal, no third-party sharing)
- Comments policy (IP address collection, spam detection)
- Media upload guidelines (no EXIF GPS data)
- Cookies policy (comment preferences 1yr, login 2 days/2 weeks, editing 1 day)
- Data retention (comments indefinite, user profiles until deletion requested)
- User rights (data export, data erasure)
- Third-party content/embedded tracking disclosure

**Redesigned Layout:**
- Clean, readable typography
- Table of contents with anchor links
- Accordion sections for each policy area

---

### 27. BLOG SINGLE POST (`/blog/[slug]`)

**Template Design:**

1. **Header**
   - Category badge
   - Post title (large)
   - Author, Date, Read time
   - Featured image (full width)

2. **Article Content**
   - Rich content area (matches WordPress editor output)
   - Table of contents (auto-generated from headings)
   - Inline images, lists, quotes

3. **Author Bio Box**

4. **Related Posts**
   - 3 related post cards

5. **Share Buttons**
   - Social media sharing

6. **Comments Section (optional)**

---

## Admin Panel Design

### Admin Dashboard (`/admin`)
- Overview stats: Total Posts, Total Media, Total Pages
- Recent posts list
- Quick actions

### Admin Blog Editor (`/admin/blog/new`)
**Must look and function like WordPress Create Post page:**

1. **Top Bar**
   - Save Draft, Preview, Publish buttons
   - Post status indicator

2. **Main Editor Area (Left - 70%)**
   - Title input field
   - Rich text editor (TipTap or similar) with:
     - Headings (H1-H6)
     - Bold, Italic, Underline, Strikethrough
     - Lists (ordered, unordered)
     - Links
     - Images (from media library)
     - Blockquotes
     - Code blocks
     - Tables
     - Embed media
     - HTML mode toggle

3. **Sidebar (Right - 30%)**
   - **Publish Settings**
     - Status: Draft / Published / Scheduled
     - Publish date/time
     - Author

   - **Categories**
     - Checkbox list of categories
     - "Add New Category" option

   - **Tags**
     - Tag input with autocomplete
     - "Add New Tag" option

   - **Featured Image**
     - Image preview
     - "Set Featured Image" button (opens media library)

   - **Excerpt**
     - Custom excerpt textarea

   - **SEO Panel (Auto-generated + Editable)**
     - Meta Title (auto-generated from post title)
     - Meta Description (auto-generated from first 160 chars)
     - OG Image (auto-generated or custom from media library)
     - OG Title
     - OG Description
     - Canonical URL
     - Focus Keyword
     - SEO Score indicator
     - Schema markup preview
     - "Regenerate SEO" button

### Admin Media Library (`/admin/media`)
**WordPress-style media library:**

1. **Grid View / List View toggle**
2. **Upload area** (drag & drop + button)
3. **Media grid** showing all uploaded images
4. **Filter by type** (Images, Documents, Videos)
5. **Search media**
6. **Media detail panel** (on click):
   - Preview
   - File name, type, size, dimensions
   - Alt text input
   - Caption input
   - Description
   - URL (copy button)
   - Delete button

---

## Project Folder Structure

```
sttravel/
├── public/
│   └── images/
│       ├── logo/
│       ├── hero/
│       ├── destinations/
│       ├── services/
│       ├── blog/
│       ├── testimonials/
│       └── general/
├── src/
│   ├── app/
│   │   ├── layout.tsx              # Root layout with nav + footer
│   │   ├── page.tsx                # Homepage
│   │   ├── about-us/
│   │   │   └── page.tsx
│   │   ├── services/
│   │   │   ├── page.tsx            # Services hub
│   │   │   ├── nigerian-visa/
│   │   │   │   └── page.tsx
│   │   │   ├── hotel-packages/
│   │   │   │   └── page.tsx
│   │   │   ├── safari-packages/
│   │   │   │   └── page.tsx
│   │   │   └── indian-visa/
│   │   │       └── page.tsx
│   │   ├── destinations/
│   │   │   ├── page.tsx            # Destinations hub (Africa)
│   │   │   └── [slug]/
│   │   │       └── page.tsx        # Dynamic destination page
│   │   ├── contact/
│   │   │   └── page.tsx
│   │   ├── booking/
│   │   │   └── page.tsx
│   │   ├── blog/
│   │   │   ├── page.tsx            # Blog listing
│   │   │   └── [slug]/
│   │   │       └── page.tsx        # Blog single post
│   │   ├── privacy-policy/
│   │   │   └── page.tsx
│   │   ├── admin/
│   │   │   ├── layout.tsx          # Admin layout
│   │   │   ├── page.tsx            # Dashboard
│   │   │   ├── blog/
│   │   │   │   ├── page.tsx        # All posts
│   │   │   │   ├── new/
│   │   │   │   │   └── page.tsx    # New post editor
│   │   │   │   └── [id]/
│   │   │   │       └── page.tsx    # Edit post
│   │   │   └── media/
│   │   │       └── page.tsx        # Media library
│   │   └── api/
│   │       ├── blog/
│   │       │   └── route.ts
│   │       ├── media/
│   │       │   └── route.ts
│   │       ├── contact/
│   │       │   └── route.ts
│   │       ├── booking/
│   │       │   └── route.ts
│   │       └── seo/
│   │           └── route.ts        # Auto-generate SEO
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── MobileMenu.tsx
│   │   │   └── MegaDropdown.tsx
│   │   ├── home/
│   │   │   ├── HeroSection.tsx
│   │   │   ├── DestinationsGrid.tsx
│   │   │   ├── ServicesShowcase.tsx
│   │   │   ├── WhyChooseUs.tsx
│   │   │   ├── BlogPreview.tsx
│   │   │   ├── TestimonialsCarousel.tsx
│   │   │   └── CTABanner.tsx
│   │   ├── destinations/
│   │   │   ├── DestinationCard.tsx
│   │   │   ├── DestinationHero.tsx
│   │   │   ├── AttractionsGrid.tsx
│   │   │   └── FlightInfo.tsx
│   │   ├── blog/
│   │   │   ├── BlogCard.tsx
│   │   │   ├── BlogGrid.tsx
│   │   │   ├── Pagination.tsx
│   │   │   └── Sidebar.tsx
│   │   ├── booking/
│   │   │   ├── BookingForm.tsx
│   │   │   └── PopularRoutes.tsx
│   │   ├── admin/
│   │   │   ├── AdminSidebar.tsx
│   │   │   ├── BlogEditor.tsx
│   │   │   ├── MediaLibrary.tsx
│   │   │   ├── SEOPanel.tsx
│   │   │   └── RichTextEditor.tsx
│   │   └── ui/
│   │       ├── Button.tsx
│   │       ├── Card.tsx
│   │       ├── Input.tsx
│   │       ├── Modal.tsx
│   │       ├── Accordion.tsx
│   │       ├── Carousel.tsx
│   │       └── StatsCounter.tsx
│   ├── lib/
│   │   ├── db.ts                   # Prisma client
│   │   ├── seo.ts                  # SEO auto-generation utilities
│   │   └── utils.ts
│   ├── data/
│   │   └── destinations.ts         # Static destination data
│   └── types/
│       └── index.ts                # TypeScript interfaces
├── prisma/
│   └── schema.prisma               # Database schema
├── tailwind.config.ts
├── next.config.ts
├── package.json
└── tsconfig.json
```

---

## Database Schema (MySQL via Prisma)

```prisma
model Post {
  id            Int       @id @default(autoincrement())
  title         String    @db.VarChar(500)
  slug          String    @unique @db.VarChar(500)
  content       String    @db.LongText
  excerpt       String?   @db.Text
  featuredImage String?   @db.VarChar(1000)
  status        String    @default("draft") // draft, published, scheduled
  publishedAt   DateTime?
  createdAt     DateTime  @default(now())
  updatedAt     DateTime  @updatedAt
  authorId      Int?
  author        User?     @relation(fields: [authorId], references: [id])
  categories    CategoriesOnPosts[]
  tags          TagsOnPosts[]
  seo           PostSeo?
}

model PostSeo {
  id              Int     @id @default(autoincrement())
  postId          Int     @unique
  post            Post    @relation(fields: [postId], references: [id], onDelete: Cascade)
  metaTitle       String? @db.VarChar(500)
  metaDescription String? @db.Text
  ogTitle         String? @db.VarChar(500)
  ogDescription   String? @db.Text
  ogImage         String? @db.VarChar(1000)
  canonicalUrl    String? @db.VarChar(1000)
  focusKeyword    String? @db.VarChar(200)
  schemaMarkup    String? @db.LongText
}

model Category {
  id    Int    @id @default(autoincrement())
  name  String @unique @db.VarChar(200)
  slug  String @unique @db.VarChar(200)
  posts CategoriesOnPosts[]
}

model CategoriesOnPosts {
  post       Post     @relation(fields: [postId], references: [id], onDelete: Cascade)
  postId     Int
  category   Category @relation(fields: [categoryId], references: [id], onDelete: Cascade)
  categoryId Int
  @@id([postId, categoryId])
}

model Tag {
  id    Int    @id @default(autoincrement())
  name  String @unique @db.VarChar(200)
  slug  String @unique @db.VarChar(200)
  posts TagsOnPosts[]
}

model TagsOnPosts {
  post   Post @relation(fields: [postId], references: [id], onDelete: Cascade)
  postId Int
  tag    Tag  @relation(fields: [tagId], references: [id], onDelete: Cascade)
  tagId  Int
  @@id([postId, tagId])
}

model Media {
  id          Int      @id @default(autoincrement())
  fileName    String   @db.VarChar(500)
  fileUrl     String   @db.VarChar(1000)
  fileType    String   @db.VarChar(100)
  fileSize    Int
  width       Int?
  height      Int?
  altText     String?  @db.VarChar(500)
  caption     String?  @db.Text
  description String?  @db.Text
  uploadedAt  DateTime @default(now())
  uploadedBy  Int?
  user        User?    @relation(fields: [uploadedBy], references: [id])
}

model User {
  id       Int     @id @default(autoincrement())
  name     String  @db.VarChar(200)
  email    String  @unique @db.VarChar(300)
  password String  @db.VarChar(500)
  role     String  @default("admin") @db.VarChar(50)
  posts    Post[]
  media    Media[]
}

model ContactSubmission {
  id        Int      @id @default(autoincrement())
  name      String   @db.VarChar(200)
  email     String   @db.VarChar(300)
  phone     String?  @db.VarChar(50)
  subject   String?  @db.VarChar(500)
  message   String   @db.Text
  createdAt DateTime @default(now())
  isRead    Boolean  @default(false)
}

model BookingRequest {
  id            Int      @id @default(autoincrement())
  firstName     String   @db.VarChar(200)
  lastName      String   @db.VarChar(200)
  email         String   @db.VarChar(300)
  phone         String   @db.VarChar(50)
  flyingFrom    String   @db.VarChar(300)
  flyingTo      String   @db.VarChar(300)
  departureDate DateTime
  returnDate    DateTime?
  tripType      String   @default("roundtrip") @db.VarChar(50)
  passengers    Int      @default(1)
  travelClass   String   @default("economy") @db.VarChar(50)
  comments      String?  @db.Text
  createdAt     DateTime @default(now())
  status        String   @default("pending") @db.VarChar(50)
}
```

---

## SEO Strategy

### Auto-Generated SEO for Blog Posts
When a blog post is created/updated, the system auto-generates:

1. **Meta Title:** Post title + " | EST Travel Blog" (max 60 chars)
2. **Meta Description:** First 155 chars of content, cleaned of HTML
3. **OG Image:** Featured image or auto-generated from post title + brand template
4. **OG Title:** Same as meta title
5. **OG Description:** Same as meta description
6. **Canonical URL:** Full post URL
7. **Schema Markup:** Article structured data (JSON-LD)
8. **Tags:** Auto-suggested from content analysis

### All Pages SEO
- Dynamic sitemap.xml generation
- robots.txt
- JSON-LD structured data for:
  - Organization (global)
  - TravelAgency (homepage)
  - WebPage (all pages)
  - Article (blog posts)
  - FAQPage (where applicable)
  - BreadcrumbList (all pages)

---

## Downloaded Images Inventory

```
public/images/
├── logo/
│   ├── est-logo.png              # Main company logo
│   └── big-logo.png              # Footer/large logo
├── hero/
│   ├── hero-main.jpg             # Homepage hero image
│   └── contact-hero.jpg          # Contact page / about image
├── destinations/
│   ├── lagos.jpg                 # Lagos destination
│   ├── abuja.jpg                 # Abuja destination
│   ├── nairobi.jpg               # Nairobi destination
│   ├── port-harcourt.jpg         # Port Harcourt destination
│   ├── kano.jpg                  # Kano destination
│   └── accra.jpg                 # Accra/Johannesburg flight image
├── services/
│   ├── cruise.jpg                # Cruise service
│   ├── visa-passport.jpg         # Visa/passport service
│   ├── hotel.jpg                 # Hotel service
│   ├── hotel-packages.jpg        # Hotel packages
│   ├── air-ticket.jpg            # Air ticket service
│   ├── nigerian-visa.jpg         # Nigerian visa service
│   ├── travel-insurance.jpg      # Travel insurance
│   ├── safari-package.jpg        # Safari packages
│   └── hotel-bg.jpg              # Hotel background
├── blog/
│   ├── blog-1.jpg                # Blog post 1 featured image
│   ├── blog-2.png                # Blog post 2 featured image
│   ├── blog-3.jpg                # Blog post 3 featured image
│   └── blog-4.png                # Blog post 4 featured image
└── testimonials/
    ├── testimonial-1.png         # Customer 1
    ├── testimonial-2.png         # Customer 2
    └── testimonial-3.png         # Customer 3
```

---

## Implementation Phases

### Phase 1: Foundation (Week 1)
- Next.js project setup with TypeScript + Tailwind CSS
- Database setup (MySQL + Prisma)
- Global layout: Navbar, Footer, Theme
- Homepage design and implementation

### Phase 2: Core Pages (Week 2)
- About Us page
- Services hub page
- Contact Us page (with working form)
- Booking page (with working form)

### Phase 3: Destinations (Week 3)
- Destinations hub page with map/grid
- Destination template page
- All 14 individual destination pages with content
- Safari Packages page

### Phase 4: Service Detail Pages (Week 3-4)
- Nigerian Visa page
- Hotel & Packages page
- Indian Visa page
- Privacy Policy page

### Phase 5: Blog System (Week 4-5)
- Blog listing page with pagination
- Blog single post template
- Blog categories and tags

### Phase 6: Admin Panel (Week 5-7)
- Admin authentication
- Dashboard
- Blog editor (WordPress-like)
- Media library
- SEO auto-generation engine
- Post management (CRUD)

### Phase 7: Polish & Launch (Week 7-8)
- Performance optimization
- SEO audit and implementation
- Responsive testing across all devices
- Accessibility audit
- Analytics integration
- Final review and deployment

---

## Key Dependencies

```json
{
  "dependencies": {
    "next": "^14.0.0",
    "react": "^18.0.0",
    "react-dom": "^18.0.0",
    "@prisma/client": "^5.0.0",
    "tailwindcss": "^3.4.0",
    "@tiptap/react": "^2.0.0",         // Rich text editor
    "@tiptap/starter-kit": "^2.0.0",
    "framer-motion": "^10.0.0",         // Animations
    "swiper": "^11.0.0",               // Carousels
    "sharp": "^0.33.0",                // Image optimization
    "zod": "^3.22.0",                  // Form validation
    "bcryptjs": "^2.4.3",             // Auth
    "jose": "^5.0.0",                  // JWT
    "react-hook-form": "^7.0.0",       // Forms
    "date-fns": "^3.0.0",             // Date formatting
    "slugify": "^1.6.0"               // URL slug generation
  }
}
```

---

## Testimonials Content (to be used in redesign)

1. > "I have never met Nancy in person but the experience was so humanly personal and loyal...I will forever be grateful"

2. > Praise for Jim (visa services) and Nancy (flight tickets) for exceptional helpfulness

3. > Recommendation to use EST International Travel & Tours for all travel needs

---

## External Partner Links

- Nigerian Visa on Arrival: https://nigerianvisaonarrival.com
- Nigerian Visa Services: https://nigerianvisaservices.com
- Nigerian Passport Services: https://nigerianpassportservices.com
- Travel Insurance (TravelSafe): https://travelsafe.com/

---

## Social Media (to be updated with real URLs)

- Facebook: (needs real URL)
- Twitter/X: (needs real URL)
- LinkedIn: (needs real URL)
- Instagram: (needs real URL)

---

## Notes

- All text content from the original website has been preserved and documented above for each page
- Images have been downloaded and organized in `public/images/`
- The redesign focuses on making the site far more professional, modern, and visually appealing
- Blog system with WordPress-like editor is a core feature
- SEO auto-generation is built into the blog editor workflow
- Media library provides WordPress-style file management
- All destination content (attractions, descriptions, travel tips) will be carried over from the original site
