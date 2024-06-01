"use client"
import Header from "@/components/Header";
import printOut from "@/functions/printOut";
import { useParams } from "next/navigation";


export default function Template({ 
    children 
}: { 
    children: React.ReactNode,
    
 }) {
    printOut(`Home Template Begin`);
    printOut(`Home Template End`);

    return (
        <>
            <Header></Header>
            <main>
                {children}
            </main>
            <footer>789</footer>
        </>
    );
}