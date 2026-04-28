'use client'
import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Nav() {
    const [isOpen, setIsOpen] = useState(false)
    const pathname = usePathname()

    const pages = [
        { href: "/", label: "Home" },
        { href: "/about", label: "About" },
        { href: "/projects", label: "Projects" },
        { href: "/journey", label: "Journey" },
        { href: "/lit", label: "Lit" },
    ]

    return (
        <>
            <nav className="hidden md:flex items-center ml-auto gap-1 bg-card-bg/50 border border-card-border rounded-full px-2 py-1.5">
                {pages.map(({ href, label }) => (
                    <Link
                        key={href}
                        href={href}
                        className={`text-sm px-4 py-1.5 rounded-full transition-colors ${
                            pathname === href ? "bg-active text-button1-text" : "text-text1 hover:text-title"
                        }`}
                    >
                        {label}
                    </Link>
                ))}
            </nav>

            <div className={`md:hidden flex flex-col px-2 justify-center bg-card-bg/50 border border-card-border overflow-hidden transition-all duration-300 ease-out ${isOpen ? "rounded-2xl w-full" : "rounded-[50px] w-48"}`}>
                <nav className={`w-full my-1 relative flex items-center justify-between pl-5 pr-2 py-2`}>
                    <span className="text-sm text-title">RE</span>
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="absolute right-2 rounded-full w-9 h-9 flex flex-col items-center justify-center gap-1 bg-active"
                    >
                        <span className={`bg-title block transition-all duration-300 ease-out h-px w-5 rounded-sm ${isOpen ? 'rotate-45 translate-y-1.5' : '-translate-y-0.5'}`} />
                        <span className={`bg-title block transition-all duration-300 ease-out h-px w-5 rounded-sm ${isOpen ? 'opacity-0' : 'opacity-100'}`} />
                        <span className={`bg-title block transition-all duration-300 ease-out h-px w-5 rounded-sm ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`} />
                    </button>
                </nav>
                <nav className={`flex flex-col items-center gap-1 border-t border-active px-2 py-1.5 ${isOpen ? "" : "hidden"}`}>
                    {pages.map(({ href, label }) => (
                        <Link
                            key={href}
                            href={href}
                            onClick={() => setIsOpen(false)}
                            className={`text-sm px-4 py-1.5 rounded-full transition-colors ${
                                pathname === href ? "bg-active text-button1-text" : "text-text1 hover:text-title"
                            }`}
                        >
                            {label}
                        </Link>
                    ))}
                </nav>
            </div>  
        </>
    )
}