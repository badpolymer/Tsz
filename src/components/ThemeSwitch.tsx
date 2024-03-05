"use client"

import printOut from "@/functions/printOut";
import { useLanguagePack } from "@/hooks/useLanguagePack";
import { useEffect, MouseEvent } from "react";



export default function ThemeSwitch() {
    const locale = useLanguagePack().translation;
    let isLightMode = false;

    useEffect(() => {
        printOut(`Effect!!!!!!!!!!!!!!!!!!!!!`)
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
    },[]);



    const handleClick = (e:MouseEvent) => {
        printOut(`click switch`)
        const theme = document.documentElement.getAttribute(`data-set-theme`);
        const label = e.target as HTMLElement;
        printOut(theme);
        if (theme && theme == `dark`) {
            printOut(`theme is dark`)
            document.documentElement.setAttribute(`data-set-theme`, "light");
            label.setAttribute(`data-set-theme`, "light");
        } else if (theme && theme == `light`) {
            printOut(`theme is light`)
            document.documentElement.setAttribute(`data-set-theme`, "dark");
            label.setAttribute(`data-set-theme`, "dark");
        }

        
        



    }

    return (
        <div className="theme_switch">
            <label className="switch" >
                <span className="track">
                    <span className="toggle" onClick={(e)=>handleClick(e)}></span>
                </span>
                <span className="dark">{locale.theme_dark}</span>
                <span className="light">{locale.theme_light}</span>
            </label>
        </div>
    )
}