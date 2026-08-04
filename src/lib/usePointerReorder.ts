/**
 * Pointer-events drag-to-reorder for touch + mouse, augmenting the desktop
 * HTML5 DnD path. One code path for both pointer types:
 *
 *  - Drag starts only from a HANDLE (grip icon / position badge) that carries
 *    the returned props and `touch-action: none`, so the rest of the item —
 *    and the scrollable list around it — keeps normal touch scrolling.
 *  - A 6px movement threshold distinguishes a tap from a drag.
 *  - During the drag, `elementFromPoint` locates the target item by its
 *    `data-reorder-index` attribute (works for vertical lists and grids).
 *  - Items expose drag state via `dragFrom` / `dragTarget` for styling.
 */
import { useRef, useState, type CSSProperties, type PointerEvent } from 'react'

const DRAG_THRESHOLD_PX = 6

interface DragState {
  from: number
  startX: number
  startY: number
  active: boolean
  to: number | null
}

export interface ReorderHandleProps {
  'data-reorder-handle': true
  style: CSSProperties
  onPointerDown: (e: PointerEvent) => void
  onPointerMove: (e: PointerEvent) => void
  onPointerUp: (e: PointerEvent) => void
  onPointerCancel: (e: PointerEvent) => void
}

export function usePointerReorder(onReorder: (from: number, to: number) => void) {
  const state = useRef<DragState | null>(null)
  const [dragFrom, setDragFrom] = useState<number | null>(null)
  const [dragTarget, setDragOver] = useState<number | null>(null)

  const finish = (commit: boolean) => {
    const s = state.current
    state.current = null
    setDragFrom(null)
    setDragOver(null)
    if (commit && s?.active && s.to != null && s.to !== s.from) onReorder(s.from, s.to)
  }

  /** Spread onto the drag handle of the item at `index`. */
  const handleProps = (index: number): ReorderHandleProps => ({
    'data-reorder-handle': true,
    // The handle must not participate in touch scrolling, or the browser
    // claims the gesture before the threshold can be reached.
    style: { touchAction: 'none' },
    onPointerDown: (e) => {
      if (e.pointerType === 'mouse' && e.button !== 0) return
      state.current = { from: index, startX: e.clientX, startY: e.clientY, active: false, to: null }
      ;(e.currentTarget as Element).setPointerCapture(e.pointerId)
    },
    onPointerMove: (e) => {
      const s = state.current
      if (!s) return
      if (!s.active) {
        if (Math.hypot(e.clientX - s.startX, e.clientY - s.startY) < DRAG_THRESHOLD_PX) return
        s.active = true
        setDragFrom(s.from)
      }
      const el = document
        .elementFromPoint(e.clientX, e.clientY)
        ?.closest('[data-reorder-index]')
      if (el) {
        const to = Number(el.getAttribute('data-reorder-index'))
        if (Number.isInteger(to) && to !== s.to) {
          s.to = to
          setDragOver(to)
        }
      }
    },
    onPointerUp: () => finish(true),
    onPointerCancel: () => finish(false),
  })

  return { handleProps, dragFrom, dragTarget }
}
