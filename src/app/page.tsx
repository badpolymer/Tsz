"use client";
import styles from "./page.module.scss";
import { useLanguagePack } from "@/hooks/useLanguagePack";
import HomeSearchForm from "@/components/HomeSearchForm";
import { Suspense } from "react";

export default function Home() {
    // Retrieve language packages
    const selectedLangPack = useLanguagePack();



    return (
        <main className={styles.main}>
            <div className={styles.building_emoji}>🏗️</div>
            <div className={styles.construction}>{selectedLangPack.translation.construction}</div>
            <Suspense>
                <HomeSearchForm></HomeSearchForm>
            </Suspense>

        </main>
    );
}

