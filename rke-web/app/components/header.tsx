"use client"
import { useState, useEffect } from "react"
import Nav from './nav'

export default function Header() {
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 10)
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

   return (
    <header className={`sticky top-0 z-10 flex h-12 items-center justify-center transition-all duration-300 ${
      scrolled ? "bg-active/50 backdrop-blur-md" : ""}`}
    >
        <Nav />
    </header>
   )
}