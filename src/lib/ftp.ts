import { Client } from "basic-ftp";
import { Readable } from "stream";

interface UploadResult {
  url: string;
  filename: string;
  path: string;
}

export async function uploadToFtp(
  fileBuffer: Buffer,
  originalFilename: string
): Promise<UploadResult> {
  const client = new Client();

  try {
    await client.access({
      host: process.env.FTP_HOST!,
      port: parseInt(process.env.FTP_PORT || "21"),
      user: process.env.FTP_USER!,
      password: process.env.FTP_PASSWORD!,
      secure: false,
    });

    const basePath = process.env.FTP_BASE_PATH!;
    const now = new Date();
    const yearMonth = `${now.getFullYear()}/${String(now.getMonth() + 1).padStart(2, "0")}`;
    const remotePath = `${basePath}${yearMonth}`;

    await client.ensureDir(remotePath);

    const ext = originalFilename.split(".").pop()?.toLowerCase() || "jpg";
    const safeName = originalFilename
      .replace(/\.[^.]+$/, "")
      .replace(/[^a-z0-9]/gi, "-")
      .toLowerCase()
      .slice(0, 50);
    const uniqueFilename = `${Date.now()}-${safeName}.${ext}`;

    const fullRemotePath = `${remotePath}/${uniqueFilename}`;

    const readableStream = Readable.from(fileBuffer);
    await client.uploadFrom(readableStream, fullRemotePath);

    const publicUrl = `${process.env.FTP_BASE_URL}${yearMonth}/${uniqueFilename}`;

    return {
      url: publicUrl,
      filename: uniqueFilename,
      path: fullRemotePath,
    };
  } finally {
    client.close();
  }
}
