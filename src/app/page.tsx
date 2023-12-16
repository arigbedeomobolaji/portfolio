"use client"
import { useTheme } from '@hooks/ThemeContext'
import AboutMe from '@src/components/AboutMe';
import Contact from '@src/components/Contact';
import MyProjects from '@src/components/MyProjects';
import TechStack from '@src/components/TechStack';
import { Divider } from 'antd';

export default function Home() {
  const {isDarkMode, toggleTheme} = useTheme();

  return (
  <>
  <AboutMe />
  <TechStack />
  <MyProjects />
  <Contact />
  </>
  )
}