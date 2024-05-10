import { Suspense } from "react";
import LanguageSelector from "./LanguageSelector";
import ThemeSwitch from "./ThemeSwitch";
import { LanguagePack, Translation } from "@/types/LanguagePack";

export default function Header({
    languagePacks
    , locale

}: {
    languagePacks: [LanguagePack]
    , locale: Translation
}) {
    return (
        <header>
            <Suspense>
                <LanguageSelector languagePacks={languagePacks}></LanguageSelector>
            </Suspense>

            <ThemeSwitch locale={locale}></ThemeSwitch>


        </header>
    )
}