"use client";
import styles from "./page.module.scss";
import { getLanguagePack } from "@/functions/getLanguagePack";
import HomeSearchForm from "@/components/HomeSearchForm";

export default function Home() {
    // Retrieve language packages
    const selectedLangPack = getLanguagePack();



    return (
        <main className={styles.main}>
            <div className={styles.building_emoji}>🏗️</div>
            <div>{selectedLangPack.translation.construction}</div>
            <HomeSearchForm></HomeSearchForm>
        </main>
    );
}

