"use client"
import { useTheme } from '@src/hooks/ThemeContext'
import React from 'react'
import AnchorLink from 'antd/es/anchor/AnchorLink';
import { links } from './Navbar';

export default function Footer() {
    const {isDarkMode} = useTheme();
    const themeColor = isDarkMode ? "darkMode" : "lightMode";
  return (
    <div className={`${themeColor}`}>
        <div className='max-w-7xl mx-5 2xl:mx-auto py-10 space-y-4 flex flex-col items-start justify-center md:flex-row md:items-center md:justify-between'>
            <div className="flex gap-5 items-center justify-start">
                {links.map((link) => (<AnchorLink title={link.label} href={link.href} key={link.href} className='hover:text-contentSecondary' ></AnchorLink>))}
            </div>
            
            <div>
                <h1 className='text-[16px] font-medium '>Design and built by <span className='textGradient'>Omobolaji</span> with <span className='textGradient'>Love and Coffe</span></h1>
            </div>
        </div>
    </div>
  )
}
