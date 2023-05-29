import GlobalStyles from './styles/GlobalStyles'
import { ThemeProvider } from 'styled-components'
import { Layout } from './Template/Layout'

import THEME_DARK from './styles/themes/dark'

export const App: React.FC = () => {
  return (
    <ThemeProvider theme={THEME_DARK}>
      <GlobalStyles />
      <Layout />
    </ThemeProvider>
  )
}
