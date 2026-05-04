"use client"
import { useEffect, useRef } from "react"

export default function MouseGradient() {
    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if(!ref.current) return
            ref.current.style.background = 
            `radial-gradient(circle 200px at ${e.clientX}px ${e.clientY}px, rgba(54, 1, 133, .1) 50%, transparent 100%)`
        }

        window.addEventListener("mousemove", handleMouseMove)
        return () => window.removeEventListener("mousemove", handleMouseMove)
    }, [])

    return (
        <div ref={ref} className="fixed inset-0 z-0 pointer-events-none" style={{filter: "blur(80px"}} />
    )
}