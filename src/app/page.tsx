"use client";
import { useEffect } from "react";
import styles from "./page.module.scss";
import { getLanguagePacks } from "@/locales/languagePack";
import Link from "next/link";
import ThemeSwitch from "@/components/ThemeSwitchTemp";


export default function Home() {

    const titleID = `4d5s6f43484rt34`;

    useEffect(() => {
        //Animation of Title
        let title = document.getElementById(titleID);
        if (title) {
            const titles = getLanguagePacks()
                .map((languagePack) => languagePack.translation.select_language)
                .filter((value, index, self) => self.indexOf(value) == index);
            let opacity = 0;
            const opacityIncrement = 5;
            let index = 0;
            let up = true;
            setInterval(() => {
                if (title) {
                    title.innerHTML = titles[index];
                    title.style.opacity = (opacity / 100).toString();
                }
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
    }, [titleID]);



    return (
        <main className={styles.main}>

            <h1 id={titleID}>Please select a language</h1>
            <div className={`dialogue ${styles.select_language}`}>
                <ul>
                    {
                        getLanguagePacks().map((languagePack) => {
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

            <ThemeSwitch></ThemeSwitch>
        </main>

    );
}

