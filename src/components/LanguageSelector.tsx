"use client"
import styles from "@/components/LanguageSelector.module.scss"
import { LangPack } from "@/types/LangPack";
import printOut from "@/functions/printOut"
import lang from "@/json/lang.json"
import { ReadonlyURLSearchParams, RedirectType, redirect, usePathname, useSearchParams } from "next/navigation";
import Link from "next/link";


export default function LanguageSelector() {
    const pathname = usePathname();
    // Retrieve language packages and all available language codes
    const langPacks = lang as [LangPack];
    let availableLangCodes = Array<string>();
    langPacks.forEach(lp => {
        availableLangCodes.push(lp.code);
    });
    //printOut(langCodes);

    // Check the language code in the url
    const searchParams = useSearchParams() || new ReadonlyURLSearchParams(new URLSearchParams());
    const params = new URLSearchParams(searchParams);
    const paramLangCode = searchParams.get(`lang`);

    printOut(`Get Lang Code: ${paramLangCode}`)

    if (!paramLangCode) {
        // If no languagecode in the Url
        // then set one
        params.set(`lang`, `ct`);
        redirect(`${pathname}?${params.toString()}`, RedirectType.replace)
        //const { replace } = useRouter();
        //replace(`${pathname}?${params.toString()}`)
    } else if (!availableLangCodes.includes(paramLangCode)) {
        // If the language code in the url does not match with the available codes
        // then set one 
        printOut(`Not Exists: ${paramLangCode}`)
        params.set(`lang`, `en-us`);
        redirect(`${pathname}?${params.toString()}`, RedirectType.replace)

    }

    // If the language code matches, then get the name of the language
    const finalLangCode = searchParams.get(`lang`);
    printOut(`Final Language Code: ${finalLangCode}`);
    const selectedLangPack = langPacks.find(lp => lp.code == finalLangCode);
    const selectedLangName = selectedLangPack?.translation.name;

    return (
        <div className={styles.lang_selector}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m10.5 21 5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 0 1-3.827-5.802" />
            </svg>
            <div className={styles.language_container}>
                <div className={styles.selected_language_name}>{selectedLangName || finalLangCode}</div>
                <div className={styles.language_list}>
                    <ul>
                        {
                            langPacks.map((lp) => {
                                const name = lp.translation.name;
                                params.set(`lang`, lp.code);
                                if (lp.code == finalLangCode) {
                                    // Skip rendering the selected language name
                                    // which is shown already
                                    return null
                                }


                                return (
                                    <li
                                        key={lp.code}
                                    >
                                        <Link href={`${pathname}?${params.toString()}`}>{name}</Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>

        </div>
    )
}