import { useTheme } from '@src/hooks/ThemeContext'
import Link from 'next/link';
import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Contact() {
    const {isDarkMode} = useTheme();
    const themeColor = isDarkMode ? "darkMode" : "lightMode";

  return (
    <div id="contact" className={`${themeColor} pt-14 pb-5`}>
        <div className={`max-w-7xl mx-5 md:mx-auto pb-14 border-b-2 border-b-gray-600`}>
            <div className='flex flex-col md:flex-row mx-5 ml-8 items-between md:justify-between gap-5 pb-5'>
                <div>
                    <h1 className='font-bold text-[22px]'><span className='text-contentPrimary tracking-widest'>/</span>Contact</h1>
                    <div>
                        <h3 className='text-[18px] font-thin py-5'>Who Am I?</h3>
                        <p className={`text-gray-500 font-light max-w-[420px] text-justify`}>I’m interested in freelance opportunities. However, if you have other request or question, don’t hesitate to contact me</p>
                    </div>
                </div>
                {/* other side */}
                <div className='inline-flex flex-col lg:flex-row justify-end items-end pr-5 gap-4 flex-grow mt-5 md:mt-10'>
                    <div className='border border-gray-300 shadow-md rounded-md p-3 pb-10'>
                        <h1 className='font-bold text-[17px] text-gray-600'>Message me here</h1>
                        <code className='text-gray-400'>arigbedeomobolaji@gmail.com</code>
                    </div>
                    <div className='flex flex-col border border-gray-300 rounded-md w-[250px] h-full p-3 space-y-3'>
                        <h1 className='font-bold text-[17px] text-gray-600'>Connect with me</h1>
                        <div className='flex items-center gap-3 text-gray-400 font-light'>
                            <FaGithub />
                            <Link target="blank" href="https://github.com/arigbedeomobolaji">arigbedeomobolaji</Link>
                        </div>
                        <div className='flex items-center gap-3 text-gray-400 font-light'>
                            <FaLinkedin />
                            <Link target="blank" href="https://www.linkedin.com/in/omobolaji-arigbede-a4452b146/">arigbede-a4452b146</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
