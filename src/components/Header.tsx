import { Suspense } from "react";
import LanguageSelector from "./LanguageSelector";

export default function Header() {
    return (
        <header>
            <Suspense>
                <LanguageSelector></LanguageSelector>
            </Suspense>

        </header>
    )
}