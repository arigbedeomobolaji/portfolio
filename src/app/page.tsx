"use client"
import { useTheme } from '@hooks/ThemeContext'
import AboutMe from '@src/components/AboutMe';
import MyProjects from '@src/components/MyProjects';
import TechStack from '@src/components/TechStack';

export default function Home() {
  const {isDarkMode, toggleTheme} = useTheme();

  return (
  <>
  <AboutMe />
  <TechStack />
  <MyProjects />
  </>
  )
}