"use client"
import printOut from "@/functions/printOut";
import { storageAvailable } from "@/functions/storageAvailable";
import { useEffect } from "react";
import localFont from 'next/font/local';

const myFont = localFont({
    src: './NotoSerifHK-VariableFont_wght.ttf',
    display: 'swap',
})

export default function Template({ children }: { children: React.ReactNode }) {

    printOut(`Root Template begin`);
    // Init
    // Set theme and local storage
    useEffect(() => {
        printOut(`!!!!Root Template One-time Effect!!!!`);
        if (!storageAvailable(`localStorage`)) {
            printOut(`Local Storage NOT OK`)

            // Check to see if Media-Queries are supported
            if (window.matchMedia) {
                // Check if the dark-mode Media-Query matches
                if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
                    // Dark
                    document.documentElement.setAttribute(`data-set-theme`, "dark");

                } else {
                    // Light
                    document.documentElement.setAttribute(`data-set-theme`, "light");

                }
            } else {
                // Default (when Media-Queries are not supported)
                document.documentElement.setAttribute(`data-set-theme`, "dark");

            }

        } else {
            // Read and write the theme value to the local storage
            const storedTheme = window.localStorage.getItem(`theme`);
            switch (storedTheme) {
                case `dark`:
                    document.documentElement.setAttribute(`data-set-theme`, "dark");
                    break;
                case `light`:
                    document.documentElement.setAttribute(`data-set-theme`, "light");
                    break;
                default:
                    if (window.matchMedia) {
                        // Check if the dark-mode Media-Query matches
                        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
                            // Dark
                            printOut(`prefers-color-scheme: dark`);
                            document.documentElement.setAttribute(`data-set-theme`, "dark");
                            window.localStorage.setItem(`theme`, `dark`);
                        } else {
                            // Light
                            printOut(`prefers-color-scheme: light`);
                            document.documentElement.setAttribute(`data-set-theme`, "light");
                            window.localStorage.setItem(`theme`, `light`);
                        }
                    } else {
                        // Default (when Media-Queries are not supported)
                        printOut(`prefers-color-scheme: none`);
                        document.documentElement.setAttribute(`data-set-theme`, "dark");
                        window.localStorage.setItem(`theme`, `dark`);
                    }
                    break;
            }
        }

    }, [])

    printOut(`Root Template End`);

    return (
        <body className={myFont.className}>
            {children}
        </body>
    );
}