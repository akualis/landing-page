import 'server-only'

const i18n = {
  en: () => import('./en.json').then(module => module.default),
  fr: () => import('./fr.json').then(module => module.default),
}

export const getTranslations = async (lang: keyof typeof i18n) => {
  if (!i18n[lang]) {
    throw new Error(`Language ${lang} not supported`);
  }

  try {
    const translations = await i18n[lang]();
    return translations;
  } catch (error) {
    console.error(`Error loading translations for ${lang}:`, error);
    throw error;
  }
}
