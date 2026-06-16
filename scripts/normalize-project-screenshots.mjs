#!/usr/bin/env node
/**
 * Normalize project screenshots in public/projects/
 *
 * - Converts JPEG/WebP mislabeled as PNG to lossless PNG
 * - Downscales oversized assets to 2× layout targets (never upscales)
 * - Writes consistent .png filenames
 *
 * Usage:
 *   npm run normalize-screenshots
 *   npm run normalize-screenshots -- --file social-q-01-composer.png
 *   npm run normalize-screenshots -- --layout mobile --dry-run
 */

import { readdir, stat, unlink, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const PROJECTS_DIR = path.join(__dirname, '..', 'public', 'projects')

const LAYOUTS = {
  desktop: { width: 2048, height: 1164 },
  mobile: { width: 1702, height: 2048 },
}

const IMAGE_EXTENSIONS = new Set(['.png', '.jpg', '.jpeg', '.webp', '.avif'])

function parseArgs(argv) {
  const options = {
    dryRun: false,
    layout: 'auto',
    file: null,
  }

  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i]
    if (arg === '--dry-run') options.dryRun = true
    else if (arg === '--layout') options.layout = argv[++i]
    else if (arg === '--file') options.file = argv[++i]
    else if (arg === '--help' || arg === '-h') options.help = true
  }

  return options
}

function printHelp() {
  console.log(`Normalize project screenshots

Options:
  --layout auto|desktop|mobile   Target layout (default: auto from aspect ratio)
  --file <name>                  Process one file in public/projects/
  --dry-run                      Preview changes without writing files
  --help                         Show this help
`)
}

function detectLayout(width, height) {
  return height > width ? 'mobile' : 'desktop'
}

function normalizeBaseName(filename) {
  return path.basename(filename, path.extname(filename))
}

async function listImageFiles(singleFile) {
  if (singleFile) {
    return [singleFile]
  }

  const entries = await readdir(PROJECTS_DIR)
  return entries.filter((entry) =>
    IMAGE_EXTENSIONS.has(path.extname(entry).toLowerCase())
  )
}

async function processImage(filename, options) {
  const inputPath = path.join(PROJECTS_DIR, filename)
  const inputStat = await stat(inputPath)
  if (!inputStat.isFile()) {
    console.warn(`Skipping ${filename}: not a file`)
    return
  }

  const image = sharp(inputPath, { failOn: 'none' })
  const metadata = await image.metadata()
  const { width = 0, height = 0, format } = metadata

  if (!width || !height) {
    console.warn(`Skipping ${filename}: could not read dimensions`)
    return
  }

  const layout =
    options.layout === 'auto'
      ? detectLayout(width, height)
      : options.layout

  if (!LAYOUTS[layout]) {
    throw new Error(`Unknown layout "${layout}". Use desktop, mobile, or auto.`)
  }

  const target = LAYOUTS[layout]
  const baseName = normalizeBaseName(filename)
  const outputName = `${baseName}.png`
  const outputPath = path.join(PROJECTS_DIR, outputName)

  let pipeline = sharp(inputPath).rotate().png({
    compressionLevel: 9,
    adaptiveFiltering: true,
  })

  let action = 'convert'
  if (width > target.width || height > target.height) {
    pipeline = pipeline.resize({
      width: Math.min(width, target.width),
      height: Math.min(height, target.height),
      fit: 'inside',
      withoutEnlargement: true,
    })
    action = 'resize+convert'
  } else if (width < target.width / 2 || height < target.height / 2) {
    console.warn(
      `  ⚠ ${filename} is ${width}×${height} — below 2× ${layout} target (${target.width}×${target.height}). Capture at higher resolution for Retina sharpness.`
    )
  }

  const outputBuffer = await pipeline.toBuffer()
  const outputMeta = await sharp(outputBuffer).metadata()
  const formatNote = format === 'png' ? 'png' : `${format} → png`

  console.log(
    `  ${action.padEnd(14)} ${filename} (${width}×${height}, ${formatNote}) → ${outputName} (${outputMeta.width}×${outputMeta.height}, ${Math.round(outputBuffer.length / 1024)}KB, ${layout})`
  )

  if (options.dryRun) return

  await writeFile(outputPath, outputBuffer)

  if (path.basename(inputPath) !== outputName) {
    await unlink(inputPath)
  }
}

async function main() {
  const options = parseArgs(process.argv.slice(2))

  if (options.help) {
    printHelp()
    return
  }

  const files = await listImageFiles(options.file)
  if (files.length === 0) {
    console.log('No screenshots found in public/projects/')
    return
  }

  console.log(
    `${options.dryRun ? '[dry-run] ' : ''}Normalizing ${files.length} screenshot(s) in public/projects/\n`
  )

  for (const file of files) {
    await processImage(file, options)
  }

  console.log('\nDone.')
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
