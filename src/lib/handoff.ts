/**
 * Handoff from the companion design editor (zine-maker, same origin).
 *
 * Contract (writer-owned — do not change):
 *   IndexedDB db "zine-handoff" v1, store "pages" (keyPath id, autoIncrement),
 *   record { name, blob (image/png), createdAt, source: "zine-maker" }.
 * The writer clears/recreates the DB on every send, so whatever is present is
 * the latest export in reading order (id ascending). We only ever READ — the
 * editor owns the DB lifecycle (no delete/consume here).
 *
 * handoffRecordsToFiles is pure (bundled for logic checks); readHandoffPages
 * is the browser-only IndexedDB side.
 */

export interface HandoffRecord {
  id?: number
  name?: string
  blob: Blob
  createdAt?: number
  source?: string
}

export const HANDOFF_DB = 'zine-handoff'
export const HANDOFF_STORE = 'pages'
export const EDITOR_URL = 'https://bagxe.github.io/zine-maker/'

/** Zero-padded fallback name when a record lacks one. */
export const handoffFallbackName = (index: number): string =>
  `editor-page-${String(index + 1).padStart(2, '0')}.png`

/**
 * Pure: map id-sorted handoff records to intake Files. Records without a blob
 * are skipped; records without a usable name get editor-page-XX.png. The
 * carousel-aware natural sort in the intake pipeline then keeps page-01,
 * page-02, … in reading order.
 */
export function handoffRecordsToFiles(records: HandoffRecord[]): File[] {
  return records
    .filter((r) => r && r.blob)
    .map((r, i) => {
      const name =
        typeof r.name === 'string' && r.name.trim() !== '' ? r.name : handoffFallbackName(i)
      return new File([r.blob], name, { type: r.blob.type || 'image/png' })
    })
}

export type HandoffRead =
  | { kind: 'ok'; records: HandoffRecord[] }
  | { kind: 'empty' } // DB missing, store missing, or zero usable records
  | { kind: 'unsupported' } // IndexedDB unavailable/blocked

/** Browser-only: read every handoff page (key order = id = reading order). */
export function readHandoffPages(): Promise<HandoffRead> {
  if (typeof indexedDB === 'undefined') return Promise.resolve({ kind: 'unsupported' })
  return new Promise((resolve) => {
    let settled = false
    const done = (r: HandoffRead) => {
      if (!settled) {
        settled = true
        resolve(r)
      }
    }
    let req: IDBOpenDBRequest
    try {
      req = indexedDB.open(HANDOFF_DB, 1)
    } catch {
      done({ kind: 'unsupported' })
      return
    }
    req.onerror = () => done({ kind: 'unsupported' })
    req.onblocked = () => done({ kind: 'empty' })
    req.onupgradeneeded = () => {
      // The DB did not exist — abort so we don't leave a fresh empty DB behind.
      try {
        req.transaction?.abort()
      } catch {
        // already finished
      }
      done({ kind: 'empty' })
      try {
        indexedDB.deleteDatabase(HANDOFF_DB)
      } catch {
        // best effort
      }
    }
    req.onsuccess = () => {
      const db = req.result
      try {
        if (!db.objectStoreNames.contains(HANDOFF_STORE)) {
          db.close()
          done({ kind: 'empty' })
          return
        }
        const getAll = db.transaction(HANDOFF_STORE, 'readonly').objectStore(HANDOFF_STORE).getAll()
        getAll.onsuccess = () => {
          const records = (getAll.result as HandoffRecord[]).filter((r) => r && r.blob)
          db.close()
          done(records.length > 0 ? { kind: 'ok', records } : { kind: 'empty' })
        }
        getAll.onerror = () => {
          db.close()
          done({ kind: 'empty' })
        }
      } catch {
        try {
          db.close()
        } catch {
          // already closed
        }
        done({ kind: 'empty' })
      }
    }
  })
}
