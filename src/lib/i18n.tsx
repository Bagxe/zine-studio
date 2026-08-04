/**
 * React i18n provider + t() hook. Language persists to localStorage and
 * defaults from navigator.language (see i18n/index.ts detectLang).
 * RTL: when the active language is right-to-left (Arabic), the provider sets
 * document.documentElement.dir = 'rtl' (and the <html lang> attribute) —
 * this also covers the language restored from localStorage on load.
 */
import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from 'react'
import {
  detectLang,
  isRTL,
  LANG_STORAGE_KEY,
  translate,
  type I18nKey,
  type Lang,
} from '@/lib/i18n/index'

interface I18nCtx {
  lang: Lang
  setLang: (l: Lang) => void
  t: (key: I18nKey, params?: Record<string, string | number>) => string
  /** 'rtl' for Arabic, else 'ltr' — pass to Radix primitives that take dir. */
  dir: 'rtl' | 'ltr'
}

const Ctx = createContext<I18nCtx | null>(null)

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() =>
    detectLang(
      typeof navigator !== 'undefined' ? navigator.language : null,
      typeof localStorage !== 'undefined' ? localStorage.getItem(LANG_STORAGE_KEY) : null,
    ),
  )
  const dir: 'rtl' | 'ltr' = isRTL(lang) ? 'rtl' : 'ltr'

  // Apply direction + language app-wide (runs on load and on every switch).
  useEffect(() => {
    document.documentElement.dir = dir
    document.documentElement.lang = lang
  }, [dir, lang])

  const setLang = useCallback((l: Lang) => {
    setLangState(l)
    try {
      localStorage.setItem(LANG_STORAGE_KEY, l)
    } catch {
      // private mode — session-only choice
    }
  }, [])
  const t = useCallback(
    (key: I18nKey, params?: Record<string, string | number>) => translate(lang, key, params),
    [lang],
  )
  return <Ctx.Provider value={{ lang, setLang, t, dir }}>{children}</Ctx.Provider>
}

export function useI18n(): I18nCtx {
  const ctx = useContext(Ctx)
  if (!ctx) throw new Error('useI18n outside I18nProvider')
  return ctx
}
