// src/lib/handoff.ts
var HANDOFF_DB = "zine-handoff";
var HANDOFF_STORE = "pages";
var EDITOR_URL = "https://bagxe.github.io/zine-maker/";
var handoffFallbackName = (index) => `editor-page-${String(index + 1).padStart(2, "0")}.png`;
function handoffRecordsToFiles(records) {
  return records.filter((r) => r && r.blob).map((r, i) => {
    const name = typeof r.name === "string" && r.name.trim() !== "" ? r.name : handoffFallbackName(i);
    return new File([r.blob], name, { type: r.blob.type || "image/png" });
  });
}
function readHandoffPages() {
  if (typeof indexedDB === "undefined") return Promise.resolve({ kind: "unsupported" });
  return new Promise((resolve) => {
    let settled = false;
    const done = (r) => {
      if (!settled) {
        settled = true;
        resolve(r);
      }
    };
    let req;
    try {
      req = indexedDB.open(HANDOFF_DB, 1);
    } catch {
      done({ kind: "unsupported" });
      return;
    }
    req.onerror = () => done({ kind: "unsupported" });
    req.onblocked = () => done({ kind: "empty" });
    req.onupgradeneeded = () => {
      try {
        req.transaction?.abort();
      } catch {
      }
      done({ kind: "empty" });
      try {
        indexedDB.deleteDatabase(HANDOFF_DB);
      } catch {
      }
    };
    req.onsuccess = () => {
      const db = req.result;
      try {
        if (!db.objectStoreNames.contains(HANDOFF_STORE)) {
          db.close();
          done({ kind: "empty" });
          return;
        }
        const getAll = db.transaction(HANDOFF_STORE, "readonly").objectStore(HANDOFF_STORE).getAll();
        getAll.onsuccess = () => {
          const records = getAll.result.filter((r) => r && r.blob);
          db.close();
          done(records.length > 0 ? { kind: "ok", records } : { kind: "empty" });
        };
        getAll.onerror = () => {
          db.close();
          done({ kind: "empty" });
        };
      } catch {
        try {
          db.close();
        } catch {
        }
        done({ kind: "empty" });
      }
    };
  });
}
export {
  EDITOR_URL,
  HANDOFF_DB,
  HANDOFF_STORE,
  handoffFallbackName,
  handoffRecordsToFiles,
  readHandoffPages
};
