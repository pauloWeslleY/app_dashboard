import { useContext } from 'react'
import { ThemeContext } from '../context/themeContext'
import { IThemeContext } from '../@types/IThemeContext'

export const useThemeContext = (): IThemeContext => {
  const context = useContext(ThemeContext)

  return context
}
