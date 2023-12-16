"use client"
import { useTheme } from '@src/hooks/ThemeContext'
import { Button } from 'antd'

export default function Home() {
  const {isDarkMode, toggleTheme} = useTheme();

  return (
    <main className={`flex flex-col ${isDarkMode ? "darkMode" : "lightMode"}`}>
     <Button onClick={toggleTheme} className="bg-red-50">{isDarkMode ? "Dark": "Light"}</Button>
    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo voluptatum, natus dolorum nisi fugiat minima, molestiae consectetur suscipit distinctio explicabo nostrum corrupti obcaecati eos minus earum recusandae quod alias dolore error nobis. Laudantium, fuga dolor id voluptatum fugit nulla expedita libero quae quas sequi quia exercitationem, nostrum corrupti beatae similique?</p>
    </main>
  )
}