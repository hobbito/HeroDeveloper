import { ui, defaultLang } from './ui';

export type Lang = keyof typeof ui;

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as Lang;
  return defaultLang;
}

export function useTranslations(lang: Lang) {
  return function t(key: keyof typeof ui[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  }
}

export function isValidLang(lang: string): lang is Lang {
  return lang in ui;
}

export function getRouteFromUrl(url: URL): string {
  return '/' + url.pathname.split('/').slice(2).join('/');
}

export function getPathWithLang(path: string, lang: Lang): string {
  path = path.replace(/^\/|\/$/g, '');
  return path ? `/${lang}/${path}` : `/${lang}`;
} 