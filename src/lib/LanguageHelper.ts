
import en from "@/locales/en.json";
import de from "@/locales/de.json";



export const dictionaries: Record<string, Record<string, string>> = { en, de };

export const getDictionary = (locale: string) => dictionaries[locale] || en;
