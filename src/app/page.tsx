"use client";
import { useEffect } from "react";
import styles from "./page.module.scss";
import languagePacks from "@/json/languagePacks.json";
import printOut from "@/functions/printOut";
import Link from "next/link";
import { storageAvailable } from "@/functions/storageAvailable";



export default function Home({ params }: { params: { locale: string } }) {

    const titleID = `4d5s6f43484rt34`;


    useEffect(() => {
        //Animation of Title
        let title = document.getElementById(titleID);
        if (title) {
            const titles = languagePacks
                .map((languagePack) => languagePack.translation.select_language)
                .filter((value, index, self) => self.indexOf(value) == index);
            let opacity = 0;
            const opacityIncrement = 5;
            let index = 0;
            let up = true;
            setInterval(() => {
                //printOut(opacity / 100);
                title.innerHTML = titles[index];
                title.style.opacity = (opacity / 100).toString();
                const currentUp = up;
                if (opacity / 100 == 1) {
                    up = false;
                }
                if (opacity / 100 == 0) {
                    up = true;
                }

                if (currentUp == false && up == true) {
                    if (index < titles.length - 1) {
                        index++;
                    } else {
                        index = 0;
                    }

                }

                if (up) {
                    opacity += opacityIncrement;
                } else {
                    opacity -= opacityIncrement;
                }

            }, 100);
        }
    }, []);



    return (
        <main className={styles.main}>
            {/* <div className={styles.building_emoji}>🏗️</div>
            <div className={styles.construction}>{selectedLangPack.translation.construction}</div> */}

            <h1 id={titleID}>Please select a language</h1>
            <div className={`dialogue ${styles.select_language}`}>
                <ul>
                    {
                        languagePacks.map((languagePack) => {
                            return <li key={languagePack.code}>
                                <Link href={`/${languagePack.code}`}>
                                    <span>{languagePack.translation.name}</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                        <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                                    </svg>
                                </Link>

                            </li>
                        })
                    }
                </ul>
            </div>

            <div className={styles.theme_button}>
                <button onClick={() => {
                    const currentTheme = document.documentElement.getAttribute(`data-set-theme`);
                    let setToTheme = `dark`;
                    switch (currentTheme) {
                        case `dark`:
                            document.documentElement.setAttribute(`data-set-theme`, "light");
                            setToTheme = `light`;
                            break;
                        case `light`:
                            document.documentElement.setAttribute(`data-set-theme`, "dark");
                            setToTheme = `dark`;
                            break;
                        default:
                            document.documentElement.setAttribute(`data-set-theme`, "dark");
                            setToTheme = `dark`;
                            break;
                    }
                    if (storageAvailable(`localStorage`)) {
                        window.localStorage.setItem(`theme`, setToTheme);
                    }
                }}>
                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 24 24">
                        <path d="M7.5,2C5.71,3.15 4.5,5.18 4.5,7.5C4.5,9.82 5.71,11.85 7.53,13C4.46,13 2,10.54 2,7.5A5.5,5.5 0 0,1 7.5,2M19.07,3.5L20.5,4.93L4.93,20.5L3.5,19.07L19.07,3.5M12.89,5.93L11.41,5L9.97,6L10.39,4.3L9,3.24L10.75,3.12L11.33,1.47L12,3.1L13.73,3.13L12.38,4.26L12.89,5.93M9.59,9.54L8.43,8.81L7.31,9.59L7.65,8.27L6.56,7.44L7.92,7.35L8.37,6.06L8.88,7.33L10.24,7.36L9.19,8.23L9.59,9.54M19,13.5A5.5,5.5 0 0,1 13.5,19C12.28,19 11.15,18.6 10.24,17.93L17.93,10.24C18.6,11.15 19,12.28 19,13.5M14.6,20.08L17.37,18.93L17.13,22.28L14.6,20.08M18.93,17.38L20.08,14.61L22.28,17.15L18.93,17.38M20.08,12.42L18.94,9.64L22.28,9.88L20.08,12.42M9.63,18.93L12.4,20.08L9.87,22.27L9.63,18.93Z" />
                    </svg>
                </button>

            </div>
        </main>

    );
}

