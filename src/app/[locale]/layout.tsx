import printOut from "@/functions/printOut";
import { getLanguageCodes } from "@/locales/languagePack";


export async function generateStaticParams() {

  return getLanguageCodes().map((code) => ({
    locale: code,
  }))
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  printOut(`Locale Layout Begin`);
  printOut(`Locale Layout End`);
  return children

}
