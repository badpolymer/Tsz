"use client";
import styles from "./page.module.scss";
import { useLanguagePack } from "@/hooks/useLanguagePack";
import HomeSearchForm from "@/components/HomeSearchForm";

export default function Home() {
    // Retrieve language packages
    const selectedLangPack = useLanguagePack();



    return (
        <main className={styles.main}>
            <div className={styles.building_emoji}>🏗️</div>
            <div>{selectedLangPack.translation.construction}</div>
            <HomeSearchForm></HomeSearchForm>
        </main>
    );
}

