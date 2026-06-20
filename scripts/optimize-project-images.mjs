import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const sourceRoot = path.resolve("public/Projects");
const outputRoot = path.resolve("public/optimized/Projects");
const supportedExtensions = new Set([".jpg", ".jpeg", ".png"]);
const maxWidth = Number(process.env.IMAGE_MAX_WIDTH || 1800);
const quality = Number(process.env.IMAGE_QUALITY || 78);

async function collectImages(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = await Promise.all(
    entries.map(async (entry) => {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) return collectImages(fullPath);
      if (!entry.isFile()) return [];
      return supportedExtensions.has(path.extname(entry.name).toLowerCase())
        ? [fullPath]
        : [];
    })
  );

  return files.flat();
}

function outputPathFor(sourcePath) {
  const relativePath = path.relative(sourceRoot, sourcePath);
  const parsed = path.parse(relativePath);
  return path.join(outputRoot, parsed.dir, `${parsed.name}.webp`);
}

function formatBytes(bytes) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / 1024 / 1024).toFixed(1)} MB`;
}

const images = await collectImages(sourceRoot);
let totalBefore = 0;
let totalAfter = 0;

await fs.rm(outputRoot, { recursive: true, force: true });

for (const sourcePath of images) {
  const destinationPath = outputPathFor(sourcePath);
  const { size: before } = await fs.stat(sourcePath);
  await fs.mkdir(path.dirname(destinationPath), { recursive: true });

  const image = sharp(sourcePath, { failOn: "none" }).rotate();
  const metadata = await image.metadata();
  const shouldResize = metadata.width && metadata.width > maxWidth;

  await image
    .resize(shouldResize ? { width: maxWidth, withoutEnlargement: true } : null)
    .webp({
      quality,
      effort: 5,
      smartSubsample: true,
    })
    .toFile(destinationPath);

  const { size: after } = await fs.stat(destinationPath);
  totalBefore += before;
  totalAfter += after;

  const relative = path.relative(process.cwd(), destinationPath);
  console.log(`${relative}: ${formatBytes(before)} -> ${formatBytes(after)}`);
}

const saved = totalBefore - totalAfter;
const percent = totalBefore ? Math.round((saved / totalBefore) * 100) : 0;

console.log("");
console.log(`Optimized ${images.length} images`);
console.log(`Before: ${formatBytes(totalBefore)}`);
console.log(`After:  ${formatBytes(totalAfter)}`);
console.log(`Saved:  ${formatBytes(saved)} (${percent}%)`);
