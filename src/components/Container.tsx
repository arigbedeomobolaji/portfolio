import { useTheme } from '@src/hooks/ThemeContext'
import React from 'react'
import { techStackData } from '@src/lib/techstack';
import Image from 'next/image';
import { Tooltip } from 'antd';

interface ContainerProps {
    title: string;
    description: string;
    children: React.ReactNode
}

export default function Container({title, description, children}: ContainerProps): React.ReactElement {
    const {isDarkMode} = useTheme();
    const themeColor = isDarkMode ? "darkMode" : "lightMode";
  return (
    <div className={`${themeColor} pt-24`}>
        <div className='max-w-7xl mx-10 md:mx-auto'>
            <div className="flex flex-col gap-5">
                <div className='md:text-center'>
                    <h1 className="textGradient headingText pb-5 font-extrabold">{title}</h1>
                    <p className="text-[17px] text-lightContent">{description}</p>
                </div>

                {children}
            </div>    
        </div>
    </div>
  )
}
