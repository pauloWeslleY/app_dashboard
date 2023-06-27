import { ITheme } from './ITheme'

interface IThemeContext {
  onHandleToggleTheme: () => void
  theme: ITheme
}

export { IThemeContext }
