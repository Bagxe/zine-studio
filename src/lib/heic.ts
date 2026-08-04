/**
 * HEIC/HEIF intake (iPhone photos): browsers cannot decode these natively,
 * so convert to JPEG client-side via heic2any, then treat as a normal image.
 *
 * Browser-only. Injected into intake.ts via IntakeDeps. heic2any bundles a
 * large libheif decoder, so it is dynamically imported — it only loads when
 * a HEIC file actually shows up at intake.
 */
export async function heicToImage(blob: Blob): Promise<Blob> {
  const { default: heic2any } = await import('heic2any')
  const out = await heic2any({ blob, toType: 'image/jpeg', quality: 0.92 })
  return Array.isArray(out) ? out[0] : out
}
