/**
 * Generates WebP variants for homepage-critical assets (run after adding/changing sources).
 * Usage: npm run optimize-images
 */
import fs from "fs";
import path from "path";
import sharp from "sharp";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const imgSrc = path.join(root, "src/assets/img");

async function toWebp(input, output, options = {}) {
  const { width, quality = 82 } = options;
  let pipeline = sharp(input);
  if (width) {
    pipeline = pipeline.resize({ width, withoutEnlargement: true });
  }
  await pipeline.webp({ quality }).toFile(output);
}

async function main() {
  const tasks = [
    ["fine-art/edwin-escobar-set-002.jpg", { quality: 84 }],
    ["software/sun-tracker-lg.png", { width: 1600, quality: 80 }],
    ["software/sun-tracker-sm.png", { width: 720, quality: 78 }],
  ];

  for (const [rel, opts] of tasks) {
    const input = path.join(imgSrc, rel);
    if (!fs.existsSync(input)) {
      console.warn("skip missing:", rel);
      continue;
    }
    const out = input.replace(/\.(jpg|jpeg|png)$/i, ".webp");
    await toWebp(input, out, opts);
    console.log("wrote", path.relative(root, out));
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
