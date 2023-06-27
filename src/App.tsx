import { ThemeProvider } from 'styled-components'
import { Routes } from './routes'
import { Layout } from './Template/Layout'
import { useThemeContext } from './hooks/useThemeContext'

import GlobalStyles from './styles/GlobalStyles'

export const App: React.FC = () => {
  const { theme } = useThemeContext()

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Layout>
        <Routes />
      </Layout>
    </ThemeProvider>
  )
}
