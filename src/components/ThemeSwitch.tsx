"use client"

import printOut from "@/functions/printOut";
import styles from "./ThemeSwitch.module.scss"
import { storageAvailable } from "@/functions/storageAvailable";
import { useLanguagePack } from "@/hooks/useLanguagePack";
import { useEffect, MouseEvent, useState } from "react";
import { Translation } from "@/types/LanguagePack";


export default function ThemeSwitch({
    locale
}: {
    locale: Translation
}) {
    const toggleID = `ts_toggle`;
    //const locale = useLanguagePack().translation;
    const [localStorageAvailable, setLocalStorageAvail] = useState(true);

    // Init
    useEffect(() => {
        printOut(`!!!!Theme Switch One-time Effect!!!!`)
        // If local storage is not available,
        // do not render the theme switch
        if (!storageAvailable(`localStorage`)) {
            printOut(`Local Storage NOT OK`)
            //localStorageAvailable = false;
            setLocalStorageAvail(false);
        } else {
            setLocalStorageAvail(true);
            // Read the theme value from the local storage
            const storedTheme = window.localStorage.getItem(`theme`);
            const toggle = document.getElementById(toggleID) as HTMLElement;
            switch (storedTheme) {
                case `dark`:
                    toggle.setAttribute(`data-set-theme`, "dark");
                    break;
                case `light`:
                    toggle.setAttribute(`data-set-theme`, "light");
                    break;
                default:
                    if (window.matchMedia) {
                        // Check if the dark-mode Media-Query matches
                        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
                            // Dark
                            toggle.setAttribute(`data-set-theme`, "dark");

                        } else {
                            // Light
                            toggle.setAttribute(`data-set-theme`, "light");
                        }
                    } else {
                        // Default (when Media-Queries are not supported)

                        toggle.setAttribute(`data-set-theme`, "dark");
                    }
                    break;
            }
        }
    }, [toggleID]);

    if (!localStorageAvailable) {
        return null;
    }


    const handleClick = (e: MouseEvent) => {
        printOut(`click switch`)
        const toggle = document.getElementById(toggleID) as HTMLElement;
        const theme = toggle.getAttribute(`data-set-theme`);
        if (theme && theme == `dark`) {
            // Switch to Light
            toggle.setAttribute(`data-set-theme`, "light");
            document.documentElement.setAttribute(`data-set-theme`, "light");
            window.localStorage.setItem(`theme`, `light`);
            printOut(`Switch to Light`)

        } else if (theme && theme == `light`) {
            // Switch to Dark
            toggle.setAttribute(`data-set-theme`, "dark");
            document.documentElement.setAttribute(`data-set-theme`, "dark");
            window.localStorage.setItem(`theme`, `dark`);
            printOut(`Switch to Dark`)
        }

    }




    return (
        <div className={styles.theme_switch}>
            <label className={styles.switch} onClick={(e) => handleClick(e)}>
                <span className={styles.track}>
                    <span id={toggleID} className={styles.toggle} ></span>
                </span>
                <span className={styles.dark}>{locale.theme_dark}</span>
                <span className={styles.light}>{locale.theme_light}</span>
            </label>
        </div>
    )
}