import GlobalStyles from './styles/GlobalStyles'
import { Dashboard } from './pages/Dashboard'

export const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <Dashboard />
    </>
  )
}
