"use client"
import { useTheme } from "@hooks/ThemeContext"

export default function About() {
    const {isDarkMode} = useTheme();

    return (
        <div>About page</div>
    )
}