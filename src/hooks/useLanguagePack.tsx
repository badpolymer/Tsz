import { LangPack } from "@/types/LangPack";
import lang from '@/json/lang.json';
import { ReadonlyURLSearchParams, useSearchParams } from "next/navigation";

export function useLanguagePack() {
    const langPacks = lang as [LangPack];
    // Check the language code in the url
    const searchParams = useSearchParams() || new ReadonlyURLSearchParams(new URLSearchParams());
    const paramLangCode = searchParams.get(`lang`);
    // If there is no language code in the url 
    if (!paramLangCode) {
        return langPacks[0]; // Default
    }

    // Get the language pack
    const selectedLangPack = langPacks.find(lp => lp.code == paramLangCode);
    if (!selectedLangPack) {
        return langPacks[0]; // Default
    }

    return selectedLangPack;


}