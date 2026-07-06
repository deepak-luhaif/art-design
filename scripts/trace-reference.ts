import * as fs from "fs";
import * as path from "path";
import * as potrace from "potrace";

function extractPathsFromSvg(svgContent: string): string[] {
  const paths: string[] = [];
  // Match d="..." attributes using regex
  const dRegex = /d="([^"]+)"/g;
  let match;
  while ((match = dRegex.exec(svgContent)) !== null) {
    paths.push(match[1]);
  }
  return paths;
}

async function main() {
  const args = process.argv.slice(2);
  if (args.length < 1) {
    console.error("Usage: npx tsx scripts/trace-reference.ts <input-image-path> [output-json-path]");
    process.exit(1);
  }

  const inputPath = path.resolve(args[0]);
  const outputPath = args[1] ? path.resolve(args[1]) : null;

  if (!fs.existsSync(inputPath)) {
    console.error(`Error: Input file not found: ${inputPath}`);
    process.exit(1);
  }

  console.log(`Tracing ${inputPath}...`);

  // Tune potrace options for clean line-art outlines:
  // - turdSize: ignore tiny spots (noise)
  // - optTolerance: balance between accuracy and curve complexity (lower = more accurate/complex, higher = smoother/simpler)
  // - alphaMax: threshold for finding corners (smaller = sharper corners)
  const options: potrace.PotraceOptions = {
    turdSize: 10,
    optTolerance: 0.2,
    alphaMax: 1.0,
    blackOnWhite: true, // reference images are black outlines on white background
    threshold: 128,     // standard thresholding
  };

  potrace.trace(inputPath, options, (err, svg) => {
    if (err) {
      console.error("Tracing failed:", err);
      process.exit(1);
    }

    const paths = extractPathsFromSvg(svg);
    console.log(`Found ${paths.length} paths in traced output.`);

    if (outputPath) {
      fs.writeFileSync(outputPath, JSON.stringify(paths, null, 2), "utf8");
      console.log(`Saved paths to ${outputPath}`);
    } else {
      console.log("\nTraced path d strings:\n");
      paths.forEach((d, idx) => {
        console.log(`Path ${idx + 1}:`);
        console.log(d);
        console.log("---");
      });
    }
  });
}

main().catch((err) => {
  console.error("Unhandled error:", err);
  process.exit(1);
});
