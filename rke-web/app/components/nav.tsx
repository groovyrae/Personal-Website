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
            <nav className="hidden md:flex items-center justify-between w-full">
                <span className="px-3 text-sm font-medium text-title">RE</span>
                <div className="flex items-center">
                    {pages.map(({ href, label }) => (
                        <Link
                            key={href}
                            href={href}
                            className={`text-sm px-4 py-1.5 transition-colors ${
                                pathname === href ? "border-b border-text1 text-text1" : "text-text1 hover:text-title"
                            }`}
                        >
                            {label}
                        </Link>
                    ))}
                </div>
            </nav>

            <div className="md:hidden absolute w-full">
                <nav className="w-full px-3 relative flex items-center justify-between">
                    <span className="text-sm font-medium text-title">RE</span>
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="flex flex-col items-center justify-center gap-1"
                    >
                        <span className={`bg-title block transition-all duration-300 ease-out h-px w-5 rounded-sm ${isOpen ? 'rotate-45 translate-y-1.5' : '-translate-y-0.5'}`} />
                        <span className={`bg-title block transition-all duration-300 ease-out h-px w-5 rounded-sm ${isOpen ? 'opacity-0' : 'opacity-100'}`} />
                        <span className={`bg-title block transition-all duration-300 ease-out h-px w-5 rounded-sm ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`} />
                    </button>
                </nav>
                <nav className={`absolute top-full w-full mt-3 py-3 flex flex-col bg-background transition-all duration-300 ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 pointer-events-none"}`/*`absolute top-full h-4 w-full flex flex-col items-center gap-1 border-t border-active px-2 py-1.5 ${isOpen ? "bg-background/98" : "hidden"}`*/}>
                    {pages.map(({ href, label }) => (
                        <Link
                            key={href}
                            href={href}
                            onClick={() => setIsOpen(false)}
                            className={`text-sm px-4 py-1.5 transition-colors ${
                                pathname === href ? "text-title" : "text-text1 hover:text-title"
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