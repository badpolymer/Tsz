export type Translation = {
    name: string,
    site_title: string,
    select_language: string,
    search_go: string,
    construction: string,
    temp_placeholder: string
    theme_light: string
    theme_dark: string
}

export type LanguagePack = {
    code: string,
    translation: Translation
}

export type LanguagePack2 = {
    "name": string;
    "site_title": string;
    "select_language": string;
    "v1": {
        "construction": string;
        "placeholder": string;
    };
    "search_go": string;
    "theme_light": string;
    "theme_dark": string;
    "switch_theme":string;
}