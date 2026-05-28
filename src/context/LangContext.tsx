import { createContext, useContext, useState } from 'react';

type Lang = 'ru' | 'en';

const KEY = 'dp_lang';

function getSaved(): Lang {
  try {
    const v = localStorage.getItem(KEY);
    return v === 'en' ? 'en' : 'ru';
  } catch {
    return 'ru';
  }
}

const LangContext = createContext<{ lang: Lang; toggle: () => void }>({
  lang: 'ru',
  toggle: () => {},
});

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>(getSaved);
  const toggle = () => setLang((l) => {
    const next = l === 'ru' ? 'en' : 'ru';
    localStorage.setItem(KEY, next);
    return next;
  });
  return <LangContext.Provider value={{ lang, toggle }}>{children}</LangContext.Provider>;
}

export function useLang() {
  return useContext(LangContext);
}
