export type Translation = {
    name: string,
    site_title: string,
    search_go: string,
    construction: string,
    temp_placeholder: string
    theme_light: string
    theme_dark: string
}

export type LangPack = {
    code: string,
    translation: Translation
}