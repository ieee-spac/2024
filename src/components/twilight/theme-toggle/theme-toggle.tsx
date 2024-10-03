'use client'

import * as React from 'react'
import { MoonIcon, SunIcon } from '@radix-ui/react-icons'
import { useTheme } from 'next-themes'
import { Button } from '@/components/twilight/button/button'

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  // Toggle between light and dark themes
  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <Button onClick={toggleTheme} variant="ghost" size="icon">
      <SunIcon
        className={`h-[2.5rem] w-[2.5rem] p-2 transition-transform
          ${theme === 'dark' ? '-rotate-90 scale-0 duration-700' : 'rotate-0 scale-100 duration-700'}`}
      />
      <MoonIcon
        className={`absolute h-[2.5rem] w-[2.5rem] p-2 transition-transform
          ${theme === 'dark' ? 'rotate-0 scale-100 duration-700' : 'rotate-90 scale-0 duration-700'}`}
      />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
