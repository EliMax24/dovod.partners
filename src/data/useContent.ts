import { useLang } from '../context/LangContext';
import * as ru from './content';
import * as en from './content.en';

export function useContent() {
  const { lang } = useLang();
  return lang === 'en' ? en : ru;
}
