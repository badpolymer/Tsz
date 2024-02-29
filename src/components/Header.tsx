import LanguageSelector from "./LanguageSelector";

export default function Header({setLanguage}:{setLanguage:(l:string)=>void}) {
    return (
        <header>
            <LanguageSelector setLang={setLanguage}></LanguageSelector>
        </header>
    )
}