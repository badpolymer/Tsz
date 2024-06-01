import { LanguagePack2 } from '@/types/LanguagePack';
import ct from './languagePacks/ct.json';
import md from './languagePacks/md.json';
import enus from './languagePacks/en-us.json';
import enca from './languagePacks/en-ca.json';

type LanguageCode = `ct` | `md` | `en-us` | `en-uk` | `en-ca`;

const languagePacks = new Map<LanguageCode, LanguagePack2>([
    ["ct", ct], //Cantonese
    ["md", md], //Mandarin 
    ["en-us", enus], //English(US)
    ["en-ca", enca], //English(US)
]);

export function getLanguagePack(locale: string) {
    return languagePacks.get(locale as LanguageCode) ?? ct;
}

export function getLanguageCodes() {
    return Array.from(languagePacks.keys());
}

export function getLanguagePacks() {
    let languagePackArray = Array.from(languagePacks)
    return languagePackArray.map((lp, index, self) => ({
        code: lp[0],
        translation: lp[1]
    }));
}