import { Suspense } from "react";
import LanguageSelector from "./LanguageSelector";
import ThemeSwitch from "./ThemeSwitch";

export default function Header({
   
}:{
   
}) {
    return (
        <header>
            <Suspense>
                <LanguageSelector></LanguageSelector>
                <ThemeSwitch></ThemeSwitch>
            </Suspense>

        </header>
    )
}