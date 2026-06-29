#!/usr/bin/env node
/**
 * Generate favicon, app icons, and Open Graph image from brand assets:
 *
 *   public/dayonelogo.png       — full squircle app icon (nav, OG, PWA)
 *   public/dayonelogo-mark.png  — sun mark only (browser tab favicons)
 *
 * After replacing either file: npm run generate-brand-icons
 *
 * Sizing guide (edit constants below, then re-run):
 * - Nav/footer display: src/components/layout/BrandLogo.tsx (Tailwind h-/w- classes)
 * - Browser tab favicon: FAVICON_* (from dayonelogo-mark.png)
 * - Link previews: OG_LOGO_PX on 1200×630 canvas
 * - iOS home screen: APPLE_ICON_PX
 */

import path from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.join(__dirname, '..')
const logoPath = path.join(root, 'public', 'dayonelogo.png')
const markPath = path.join(root, 'public', 'dayonelogo-mark.png')
const transparentLogoPath = path.join(root, 'public', 'dayonelogo-transparent.png')

const OG_BG = { r: 5, g: 5, b: 16 }
const OG_LOGO_PX = 420
const APPLE_ICON_PX = 180
const ICON_512_PX = 512
const FAVICON_32_PX = 32
const FAVICON_16_PX = 16
const ICON_192_PX = 192

/** Trim transparent padding, then center on a square canvas. */
async function toSquareAsset(input) {
  const trimmed = await input.clone().trim({ threshold: 1 }).png().toBuffer()
  const { width, height } = await sharp(trimmed).metadata()
  const size = Math.max(width, height)
  return sharp(trimmed).resize(size, size, {
    fit: 'contain',
    background: { r: 0, g: 0, b: 0, alpha: 0 },
  })
}

/** @param {import('sharp').Sharp} mark @param {number} px */
async function writeFavicon(mark, px, filePath) {
  await mark
    .clone()
    .resize(px, px, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toFile(filePath)
}

async function main() {
  const squircle = await toSquareAsset(sharp(logoPath))
  const faviconMark = await toSquareAsset(sharp(markPath))

  await squircle.clone().png().toFile(transparentLogoPath)

  await writeFavicon(faviconMark, FAVICON_32_PX, path.join(root, 'src/app/icon.png'))
  await writeFavicon(faviconMark, FAVICON_32_PX, path.join(root, 'public/favicon-32x32.png'))
  await writeFavicon(faviconMark, FAVICON_16_PX, path.join(root, 'public/favicon-16x16.png'))

  await squircle
    .clone()
    .resize(APPLE_ICON_PX, APPLE_ICON_PX)
    .png()
    .toFile(path.join(root, 'src/app/apple-icon.png'))

  await squircle
    .clone()
    .resize(APPLE_ICON_PX, APPLE_ICON_PX)
    .png()
    .toFile(path.join(root, 'public/apple-icon.png'))

  await squircle
    .clone()
    .resize(ICON_192_PX, ICON_192_PX)
    .png()
    .toFile(path.join(root, 'public/icon-192.png'))

  await squircle
    .clone()
    .resize(ICON_512_PX, ICON_512_PX)
    .png()
    .toFile(path.join(root, 'public/icon-512.png'))

  const logoBuffer = await squircle
    .clone()
    .resize(OG_LOGO_PX, OG_LOGO_PX)
    .png()
    .toBuffer()

  await sharp({
    create: {
      width: 1200,
      height: 630,
      channels: 3,
      background: OG_BG,
    },
  })
    .composite([{ input: logoBuffer, gravity: 'center' }])
    .png()
    .toFile(path.join(root, 'public/og-image.png'))

  console.log('Generated icons from dayonelogo.png + dayonelogo-mark.png')
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
