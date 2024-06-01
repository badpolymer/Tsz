import styles from "./page.module.scss";
import ThemeSwitch from "@/components/ThemeSwitchTemp";
import printOut from "@/functions/printOut";
import { getLanguagePack } from "@/locales/languagePack";

export default function TempHome({ params }: { params: { locale: string } }) {
    printOut(`Locale Page Begin`);
    printOut(`Locale Page End`);
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

