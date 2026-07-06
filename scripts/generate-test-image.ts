import * as fs from "fs";
import * as path from "path";

// Generate a simple 100x100 24-bit uncompressed BMP with a black square outline on white background
function generateTestBmp(filePath: string) {
  const width = 100;
  const height = 100;
  const rowSize = Math.floor((24 * width + 31) / 32) * 4;
  const pixelDataSize = rowSize * height;
  const fileSize = 54 + pixelDataSize;

  const buffer = Buffer.alloc(fileSize);

  // --- BMP HEADER (14 bytes) ---
  buffer.write("BM", 0); // Signature
  buffer.writeUInt32LE(fileSize, 2); // File size
  buffer.writeUInt16LE(0, 6); // Reserved
  buffer.writeUInt16LE(0, 8); // Reserved
  buffer.writeUInt32LE(54, 10); // Pixel data offset

  // --- BITMAPINFOHEADER (40 bytes) ---
  buffer.writeUInt32LE(40, 14); // Info header size
  buffer.writeInt32LE(width, 18); // Width
  buffer.writeInt32LE(height, 22); // Height
  buffer.writeUInt16LE(1, 26); // Planes
  buffer.writeUInt16LE(24, 28); // Bits per pixel (24-bit)
  buffer.writeUInt32LE(0, 30); // Compression (BI_RGB = 0)
  buffer.writeUInt32LE(pixelDataSize, 34); // Image size
  buffer.writeInt32LE(2835, 38); // X pixels per meter
  buffer.writeInt32LE(2835, 42); // Y pixels per meter
  buffer.writeUInt32LE(0, 46); // Colors in color table
  buffer.writeUInt32LE(0, 50); // Important colors

  // --- PIXEL DATA ---
  // White background, black square from x=20 to 80, y=20 to 80 with 3px stroke width
  for (let y = 0; y < height; y++) {
    const rowOffset = 54 + y * rowSize;
    for (let x = 0; x < width; x++) {
      const isSquareBorder =
        ((x >= 20 && x <= 80) && (y >= 20 && y <= 22 || y >= 78 && y <= 80)) ||
        ((y >= 20 && y <= 80) && (x >= 20 && x <= 22 || x >= 78 && x <= 80));

      const color = isSquareBorder ? 0 : 255; // 0 for black, 255 for white
      const pixelOffset = rowOffset + x * 3;
      buffer[pixelOffset] = color;     // Blue
      buffer[pixelOffset + 1] = color; // Green
      buffer[pixelOffset + 2] = color; // Red
    }
  }

  fs.writeFileSync(filePath, buffer);
  console.log(`Generated test BMP at ${filePath}`);
}

generateTestBmp(path.join(__dirname, "test-shape.bmp"));
