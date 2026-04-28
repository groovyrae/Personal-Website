"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Footer() {
    const pathname = usePathname()
    const pages = [
        { href: "/", label: "Home" },
        { href: "/about", label: "About" },
        { href: "/projects", label: "Projects" },
        { href: "/journey", label: "Journey" },
        { href: "/lit", label: "Lit" },
    ]
    
    return (
        <div className="flex min-h-screen justify-center">
            <footer className="flex flex-col mt-auto justify-center w-[90%] border-t-[0.5px] border-t-text-border/50">
                <div className="flex text-sm text-text2 justify-center mx-auto m-4 w-full">
                    <p> © 2026 Raégen Ellis</p>
                    <pre>  •  </pre>
                    <p>made with Next.js</p>
                </div>
            </footer>
        </div>
    )
}