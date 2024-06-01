"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";


export default function Home() {

    const test = usePathname();
    return (
        <div>HOME
            <Link href={`${test}/test`}>TETTST</Link>
        </div>
        
    );
}

