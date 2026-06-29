#!/usr/bin/env node
/**
 * Generate favicon, app icons, and Open Graph image from public/dayonelogo.png
 *
 * Sizing guide (edit constants below, then re-run):
 * - Nav/footer display: src/components/layout/BrandLogo.tsx (Tailwind h-/w- classes)
 * - Browser tab / Google favicon: FAVICON_* and ICON_* below (fixed platform sizes)
 * - iMessage, Slack, Twitter link preview: OG_LOGO_PX on 1200×630 canvas
 * - iOS home screen: APPLE_ICON_PX
 *
 * After changing public/dayonelogo.png or sizes here:
 *   npm run generate-brand-icons
 */

import path from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.join(__dirname, '..')
const logoPath = path.join(root, 'public', 'dayonelogo.png')

const OG_BG = { r: 5, g: 5, b: 16 }
const OG_LOGO_PX = 420
const APPLE_ICON_PX = 180
const ICON_512_PX = 512
const FAVICON_32_PX = 32
const FAVICON_16_PX = 16
const ICON_192_PX = 192

async function main() {
  const logo = sharp(logoPath)

  await logo.clone().resize(ICON_512_PX, ICON_512_PX).png().toFile(path.join(root, 'src/app/icon.png'))

  await logo
    .clone()
    .resize(APPLE_ICON_PX, APPLE_ICON_PX)
    .png()
    .toFile(path.join(root, 'src/app/apple-icon.png'))

  await logo
    .clone()
    .resize(APPLE_ICON_PX, APPLE_ICON_PX)
    .png()
    .toFile(path.join(root, 'public/apple-icon.png'))

  await logo
    .clone()
    .resize(FAVICON_32_PX, FAVICON_32_PX)
    .png()
    .toFile(path.join(root, 'public/favicon-32x32.png'))

  await logo
    .clone()
    .resize(FAVICON_16_PX, FAVICON_16_PX)
    .png()
    .toFile(path.join(root, 'public/favicon-16x16.png'))

  await logo
    .clone()
    .resize(ICON_192_PX, ICON_192_PX)
    .png()
    .toFile(path.join(root, 'public/icon-192.png'))

  await logo
    .clone()
    .resize(ICON_512_PX, ICON_512_PX)
    .png()
    .toFile(path.join(root, 'public/icon-512.png'))

  const logoBuffer = await logo
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

  console.log('Generated app/icon.png, app/apple-icon.png, favicons, and public/og-image.png')
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
