import { useTheme } from '@src/hooks/ThemeContext'
import React from 'react'
import { techStackData } from '@src/lib/techstack';
import Image from 'next/image';
import { Tooltip } from 'antd';
import Container from './Container';

export default function TechStack() {
    const {isDarkMode} = useTheme();
    const themeColor = isDarkMode ? "darkMode" : "lightMode";
  return (
    // <div className={`${themeColor} pt-24`}>
    //     <div className='max-w-7xl mx-10 md:mx-auto'>
    //         <div className="flex flex-col gap-5">
    //             <div className='md:text-center'>
    //                 <h1 className="textGradient headingText pb-5">My Tech Stack</h1>
    //                 <p className="text-[17px] text-lightContent">Technologies I&apos;ve been working with over the years.</p>
    //             </div>

    //             <div className='w-full md:w-9/12 mx-auto grid grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 place-items-center md:px-5 gap-5 pt-10'>
    //                     {techStackData.map((stack) => (
    //                         <Tooltip title={stack.name} key={stack.name} className="p-1">
    //                             <Image priority src={stack.image} alt={stack.name} className='hover:scale-110 cursor-pointer'/>
    //                         </Tooltip>
    //                     ))}
    //             </div>
    //         </div>    
    //     </div>
    // </div>
    <div id="tech-stack">
    <Container title="My Tech Stack" description='Technologies I have been using over the years.'>
    <div className='w-full md:w-9/12 mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 place-items-start md:place-items-center md:px-5 gap-5 pt-10'>
                        {techStackData.map((stack) => (
                            <Tooltip title={stack.name} key={stack.name} className="p-1">
                                <Image priority src={stack.image} alt={stack.name} className='hover:scale-110 cursor-pointer'/>
                            </Tooltip>
                        ))}
                </div>
    </Container>
    </div>
  )
}
