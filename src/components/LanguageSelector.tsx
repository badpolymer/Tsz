"use client"
import styles from "@/components/LanguageSelector.module.scss"
import { useParams, usePathname } from "next/navigation";
import Link from "next/link";
import { getLanguageCodes, getLanguagePacks } from "@/locales/languagePack";
import printOut from "@/functions/printOut";


export default function LanguageSelector({

}: {

    }) {
    printOut(`Language Selector Begin`);
    const { locale }: { locale: string } = useParams();
    const languagePacks = getLanguagePacks();
    const currentPath = usePathname();
    
    // Define a regular expression to match the first two segments
    const regex = /^\/([^/]+)\/([^/]+)/;
    // Replace the first two segments with the replacement string
    const newPath = (replacement:string) => currentPath.replace(regex, `/${replacement}/$2`);

    printOut(`Language Selector End`);
    return (
        <div className={styles.lang_selector} tabIndex={0}>

            <div className={styles.language_container}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="m10.5 21 5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 0 1-3.827-5.802" />
                </svg>
                <div className={styles.selected_language_name}>
                    {languagePacks.find((lp) => lp.code == locale)?.translation.name}
                </div>
            </div>

            <div className={styles.language_list}>
                <ul>
                    {
                        languagePacks.map((lp) => {
                            const name = lp.translation.name;

                            if (lp.code == locale) {
                                // Skip rendering the selected language name
                                // which is shown already
                                return null
                            }


                            return (
                                <li
                                    key={lp.code}
                                >
                                    <Link href={newPath(lp.code)}>{name}</Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>

        </div>
    )
}