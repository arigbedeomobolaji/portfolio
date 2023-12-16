"use client"
import { useTheme } from '@src/hooks/ThemeContext'
import AnchorLink from 'antd/es/anchor/AnchorLink';
import Link from 'next/link';
import React, { useState } from 'react'
import { FaGithub, FaLinkedin  } from "react-icons/fa";
import { MdDarkMode,MdOutlineDarkMode  } from "react-icons/md";
import TwoLine from "@src/assets/svg/TwoLines.svg"
import Cross from "@src/assets/svg/Cross.svg"
import Image from 'next/image';

const platforms = [
    {Icon:FaGithub, link: "https://github.com/arigbedeomobolaji"}, 
    {Icon: FaLinkedin, link: "https://www.linkedin.com/in/omobolaji-arigbede-a4452b146/"}
]

export const links = [{
    href: "#home",
    label: "Home"
},{
    href: "#about",
    label: "About"
},{
    href: "#tech-stack",
    label: "Tech Stack"
},{
    href: "#projects",
    label: "Projects"
},{
    href: "#contact",
    label: "Contact"
}];

export default function Navbar() {
    const {isDarkMode, toggleTheme} = useTheme();
    const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className={`${isDarkMode ? "darkMode": "lightMode"} py-3 shadow-md`}>
       <div className='max-w-7xl px-10 md:mx-auto flex justify-between relative z-30'>
            <div className="flex flex-col justify-center items-start font-medium text-[22px] md:font-bold md:text-[25px] text-center leading-[30px]">
                <p className='textGradient'>{"{001}"}</p>
                <h3 className='textGradient'>DevB</h3>
            </div>
            <div className="hidden md:flex gap-5 items-center justify-start">
                {links.map((link) => (<AnchorLink title={link.label} href={link.href} key={link.href} className='hover:text-contentSecondary' />))}
            </div>
            <div className='hidden md:flex items-center gap-3'>
                <div className='w-[25px] h-[25px]'>
                {
                    isDarkMode ? (<MdDarkMode onClick={toggleTheme} className="h-full w-full bg-contentSecondary bg-opacity-25 rounded-full shadow-xl text-black"  />) : (<MdOutlineDarkMode onClick={toggleTheme} className="h-full w-full" />)
                }
                </div>
                {
                    platforms.map(({Icon, link}) => (<Link className="w-[20px] h-[20px]" target='blank' key={link} href={link}>
                        <Icon className={`${isDarkMode ? "darkMode": "lightMode"} w-full h-full rounded-full text-contentSecondary`} />
                    </Link>))
                }

            </div>
            <div className='flex flex-row gap-3 items-center md:hidden'>
            <div className='w-[25px] h-[25px]'>
                {
                    isDarkMode ? (<MdDarkMode onClick={toggleTheme} className="h-full w-full bg-gray-700 rounded-full shadow-xl text-black"  />) : (<MdOutlineDarkMode onClick={toggleTheme} className="h-full w-full" />)
                }
                </div>

                {menuOpen ? (<Image
                priority
                src={Cross}
                alt="Cross Icon"
                onClick={() => setMenuOpen(false)}
                />) : (<Image
                priority
                src={TwoLine}
                alt="Menu Icon"
                onClick={() => setMenuOpen(true)}
                />)}                
            </div>
            {menuOpen &&
            <div className='absolute top-16 left-0 right-0  rounded-md shadow-sm shadow-lightContent'>
                 <div className={`flex flex-col md:hidden gap-6 items-end pr-7 py-5 ${isDarkMode ? "darkMode": "lightMode"}`}>
                {
                    links.map((link) => (
                        <AnchorLink className="hover:text-contentSecondary hover:scale-105" title={link.label} href={link.href} key={link.href}>#</AnchorLink>
                    ))
                }
                <div className='flex justify-end items-center gap-4 pb-4 z-20'>
                    {platforms.map(({Icon, link}) => (
                        <Link className="w-[30px] h-[30px] relative" href={link} key={link}>
                            <Icon className={`${isDarkMode ? "darkMode": "lightMode"} w-full h-full rounded-full text-contentSecondary`} />
                        </Link>
                    ))}
                </div>
                </div>

                
                
                
            </div>}
       </div>
    </div>
  )
}
