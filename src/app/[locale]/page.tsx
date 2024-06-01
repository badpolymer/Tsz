import styles from "./page.module.scss";
import ThemeSwitch from "@/components/ThemeSwitchTemp";
import { getLanguagePack } from "@/locales/languagePack";

export default function TempHome({ params }: { params: { locale: string } }) {

    const languagePack = getLanguagePack(params.locale);
    const construction = languagePack.v1.construction;
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

