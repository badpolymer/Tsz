"use client"

import printOut from "@/functions/printOut";
import Link from "next/link";
import { usePathname } from "next/navigation";


export default function Home() {
    printOut(`Home Page Begin`);
    
    const test = usePathname();
    printOut(`Home Page End`);
    return (
        <div>HOME
            <Link href={`${test}/test`}>TETTST</Link>
        </div>
        
    );
}

