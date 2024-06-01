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
  return children

}
