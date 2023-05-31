import { ThemeProvider } from 'styled-components'
import { Layout } from './Template/Layout'
import { Dashboard } from './pages/Dashboard'

import GlobalStyles from './styles/GlobalStyles'
import THEME_DARK from './styles/themes/dark'

export const App: React.FC = () => {
  return (
    <ThemeProvider theme={THEME_DARK}>
      <GlobalStyles />
      <Layout>
        <Dashboard />
      </Layout>
    </ThemeProvider>
  )
}
