import { storageAvailable } from "@/functions/storageAvailable";
import styles from "./page.module.scss";
import languagePacks from "@/json/languagePacks.json";
import ThemeSwitch from "@/components/ThemeSwitch";

export async function generateStaticParams() {

    return languagePacks.map((pack) => ({
        locale: pack.code,
    }))
}

export default function Home({ params }: { params: { locale: string } }) {

    const languagePack = languagePacks.find(pack => pack.code == params.locale);
    const construction = languagePack ? languagePack.translation.construction : `密鑼緊鼓施工中`;
    return (
        <main className={styles.main}>
            <div className={styles.building_emoji}>🏗️</div>
            <div className={styles.construction}>
                {construction}
            </div>

            <ThemeSwitch></ThemeSwitch>

        </main>
    );
}

