"use client"

import { usePathname } from "next/navigation"
import nProgress from "nprogress";
import { useEffect } from "react"
import "nprogress/nprogress.css"

export default function TopProgressBar(){
    const pathname = usePathname();

    useEffect(()=>{
        nProgress.start();
        const timer = setTimeout(()=>{
            nProgress.done()
        },300)
        return ()=>{
            clearTimeout(timer);
            nProgress.done();
        }
    },[pathname])
    return null;
}