import React, { ReactNode, createContext, useState } from 'react'

import { IThemeContext } from '../@types/IThemeContext'
import { ITheme } from '../@types/ITheme'

import dark from '../styles/themes/dark'
import light from '../styles/themes/light'

interface IThemeProviderProps {
  children: ReactNode
}

const ThemeContext = createContext<IThemeContext>({} as IThemeContext)

const ThemeProvider: React.FC<IThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<ITheme>(() => {
    const themeSaved = localStorage.getItem('@my_wallet:theme')

    if (themeSaved) {
      return JSON.parse(themeSaved)
    } else {
      return dark
    }
  })

  const onHandleToggleTheme = () => {
    if (theme.title === 'dark') {
      setTheme(light)
      localStorage.setItem('@my_wallet:theme', JSON.stringify(light))
    } else {
      setTheme(dark)
      localStorage.setItem('@my_wallet:theme', JSON.stringify(dark))
    }
  }

  return (
    <ThemeContext.Provider value={{ onHandleToggleTheme, theme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export { ThemeContext, ThemeProvider }
