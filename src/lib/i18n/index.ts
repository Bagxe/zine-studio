/**
 * i18n core (pure, no React — bundled for logic checks).
 *
 * RTL: Arabic (ar) is right-to-left; the React provider mirrors the layout by
 * setting document.documentElement.dir (see i18n.tsx). Hebrew is not offered
 * yet — it would slot in the same way once translated.
 */
import { en, type Dict, type I18nKey } from './en'
import { es } from './es'
import { pt } from './pt'
import { fr } from './fr'
import { de } from './de'
import { zh } from './zh'
import { ja } from './ja'
import { ko } from './ko'
import { ar } from './ar'

export const LANGS = ['en', 'es', 'pt', 'fr', 'de', 'zh', 'ja', 'ko', 'ar'] as const
export type Lang = (typeof LANGS)[number]

export const LANG_NAMES: Record<Lang, string> = {
  en: 'English',
  es: 'Español',
  pt: 'Português',
  fr: 'Français',
  de: 'Deutsch',
  zh: '简体中文',
  ja: '日本語',
  ko: '한국어',
  ar: 'العربية',
}

export const DICTS: Record<Lang, Dict> = { en, es, pt, fr, de, zh, ja, ko, ar }

/** Languages that need dir="rtl". */
export const isRTL = (lang: Lang): boolean => lang === 'ar'

export const LANG_STORAGE_KEY = 'zineStudio.lang'

/**
 * Pick the default language: stored choice wins, then navigator.language
 * ('pt-BR' → pt, 'zh-TW'/'zh-HK'/'zh-CN' → zh, 'en-US' → en, …), else English.
 */
export function detectLang(navLanguage: string | null | undefined, stored: string | null): Lang {
  if (stored && (LANGS as readonly string[]).includes(stored)) return stored as Lang
  const tag = (navLanguage ?? '').toLowerCase()
  if (!tag) return 'en'
  const base = tag.split('-')[0]
  if (base === 'zh') return 'zh' // all Chinese variants → 简体中文 this round
  const hit = (LANGS as readonly string[]).find((l) => l === base)
  return (hit as Lang | undefined) ?? 'en'
}

/** Substitute {placeholders}; unknown keys are left as-is (visible in tests). */
export function fmt(template: string, params?: Record<string, string | number>): string {
  if (!params) return template
  return template.replace(/\{(\w+)\}/g, (m, k) =>
    params[k] != null ? String(params[k]) : m,
  )
}

/** Translate with English fallback (and key echo if both are missing). */
export function translate(lang: Lang, key: I18nKey, params?: Record<string, string | number>): string {
  return fmt(DICTS[lang][key] ?? en[key] ?? key, params)
}

export type { Dict, I18nKey }
