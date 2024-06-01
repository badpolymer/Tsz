"use client"
import Header from "@/components/Header";
import { useParams } from "next/navigation";


export default function Template({ 
    children 
}: { 
    children: React.ReactNode,
    
 }) {
 

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