import { useTheme } from '@src/hooks/ThemeContext'
import Image from 'next/image';
import Myself from "@src/assets/myself.png"
import me from "@src/assets/me.jpg"
import React from 'react'

export default function AboutMe() {
    const {isDarkMode} = useTheme();
    const themeColor = isDarkMode ? "text-gray-50" : "text-gray-800"
  return (
    <div className={`${isDarkMode ? "darkMode" : "lightMode"}`} id="about">
        <div className='max-w-7xl mx-10 md:mx-auto py-14'>
            <div className='flex flex-col md:flex-row justify-start items-start md:justify-around md:items-center'>
            <div>
            <h1 className={`headingText ${themeColor}`}>Hi, 👋👋</h1>
            <h2 className={`headingText ${themeColor}`}>My name is</h2>
            
            <h2 className={`headingText textGradient`}>Omobolaji Paul</h2>
            <h3 className={`headingText ${themeColor} text-`}>I build Apps for</h3>
            <h3 className={`headingText ${themeColor} text-[20px] md:text-[22px]`}>the Web 💻 and Mobile Phones 📱.</h3>
        </div>
        <div className='bg-gradient-to-r from-contentPrimary to-contentSecondary max-w-[300px] max-h-[300px] md:w-[300px] md:h-[300px] rounded-full relative flex items-center justify-center mt-10'>
            <Image
                priority
                src={me}
                alt="MyProfilePics"
                // objectFit='cover'
                className='w-[98%] h-[98%] rounded-full'
            />
        </div>
            </div>
       
        </div>
    </div>
  )
}
