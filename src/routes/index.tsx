import { BrowserRouter as Router } from 'react-router-dom'
import { useAuthenticator } from '../hooks/useAuthenticator'

import { AppRoutes } from './app.routes'
import { AuthRoutes } from './auth.routes'

export const Routes: React.FC = () => {
  const { logged } = useAuthenticator()

  return <Router>{logged ? <AppRoutes /> : <AuthRoutes />}</Router>
}
