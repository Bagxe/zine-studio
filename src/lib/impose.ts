/**
 * Digital Scroll — serpentine reading order (unchanged from the original
 * prototype; the print imposition engine now lives in zineArranger.ts).
 */

export type Half = 'L' | 'R'

export interface ScrollStep {
  /** 1-based sheet number. */
  sheet: number
  half: Half
}

export function serpentineOrder(numSheets: number): ScrollStep[] {
  const steps: ScrollStep[] = []
  for (let i = 1; i <= numSheets; i++) {
    steps.push({ sheet: i, half: i % 2 === 1 ? 'R' : 'L' })
  }
  for (let i = numSheets; i >= 1; i--) {
    steps.push({ sheet: i, half: i % 2 === 1 ? 'L' : 'R' })
  }
  return steps
}
