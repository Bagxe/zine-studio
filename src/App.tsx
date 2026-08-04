import { useState } from 'react'
import { Globe } from 'lucide-react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import MakeZine from '@/components/MakeZine'
import DigitalScroll from '@/components/DigitalScroll'
import { useI18n } from '@/lib/i18n'
import { LANG_NAMES, LANGS, type Lang } from '@/lib/i18n/index'

/** Globe + current language in the header; full native-name dropdown. */
function LanguageToggle() {
  const { lang, setLang, t } = useI18n()
  const [open, setOpen] = useState(false)
  return (
    <div className="relative">
      <button
        className="flex items-center gap-1.5 border border-neutral-400 px-2 py-1 font-mono text-[11px] uppercase tracking-wide hover:border-black"
        onClick={() => setOpen((v) => !v)}
        aria-label={t('app.language')}
        aria-expanded={open}
      >
        <Globe className="h-3.5 w-3.5" />
        <span className="hidden sm:inline">{LANG_NAMES[lang]}</span>
      </button>
      {open && (
        <>
          <button
            className="fixed inset-0 z-40 cursor-default"
            aria-hidden
            onClick={() => setOpen(false)}
            tabIndex={-1}
          />
          <ul className="absolute end-0 z-50 mt-1 w-40 border border-black bg-white py-1 shadow-lg">
            {LANGS.map((l: Lang) => (
              <li key={l}>
                <button
                  className={`w-full px-3 py-1.5 text-start font-mono text-xs hover:bg-neutral-100 ${
                    l === lang ? 'font-bold text-red-600' : ''
                  }`}
                  onClick={() => {
                    setLang(l)
                    setOpen(false)
                  }}
                >
                  {LANG_NAMES[l]}
                </button>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  )
}

export default function App() {
  const { t, dir } = useI18n()
  return (
    <div className="min-h-screen bg-white text-black">
      <header className="border-b-4 border-black">
        <div className="mx-auto flex max-w-7xl items-baseline justify-between px-6 py-5">
          <h1 className="font-mono text-3xl font-black uppercase tracking-tighter">
            Zine<span className="text-red-600">_</span>Studio
          </h1>
          <div className="flex items-center gap-4">
            <p className="hidden font-mono text-[11px] uppercase tracking-widest text-neutral-500 sm:block">
              {t('app.tagline')}
            </p>
            <LanguageToggle />
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 py-6">
        <Tabs defaultValue="make" dir={dir}>
          <TabsList className="h-auto rounded-none border-2 border-black bg-white p-0">
            <TabsTrigger
              value="make"
              className="rounded-none border-e-2 border-black px-6 py-2.5 font-mono text-xs font-bold uppercase tracking-widest data-[state=active]:bg-black data-[state=active]:text-white"
            >
              {t('app.tabMake')}
            </TabsTrigger>
            <TabsTrigger
              value="scroll"
              className="rounded-none px-6 py-2.5 font-mono text-xs font-bold uppercase tracking-widest data-[state=active]:bg-black data-[state=active]:text-white"
            >
              {t('app.tabScroll')}
            </TabsTrigger>
          </TabsList>

          <TabsContent value="make" className="mt-6">
            <MakeZine />
          </TabsContent>
          <TabsContent value="scroll" className="mt-6">
            <DigitalScroll />
          </TabsContent>
        </Tabs>
      </main>

      <footer className="mt-12 border-t border-neutral-300">
        <div className="mx-auto max-w-7xl px-6 py-4">
          <p className="font-mono text-[10px] uppercase tracking-widest text-neutral-400">
            {t('app.footerTag')}
          </p>
          <p className="mt-1 font-mono text-[10px] uppercase tracking-widest text-neutral-400">
            {t('app.footerCredit')}
          </p>
        </div>
      </footer>
    </div>
  )
}
