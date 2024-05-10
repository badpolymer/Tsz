import { Suspense } from "react";
import LanguageSelector from "./LanguageSelector";
import ThemeSwitch from "./ThemeSwitch";
import { LanguagePack, Translation } from "@/types/LanguagePack";

export default function Header({ 
    languagePacks
    ,locale

}: {
    languagePacks:[LanguagePack]
    ,locale:Translation
    }) {
    return (
        <header>
            
                <LanguageSelector languagePacks={languagePacks}></LanguageSelector>
            
            
                <ThemeSwitch locale={locale}></ThemeSwitch>
            

        </header>
    )
}