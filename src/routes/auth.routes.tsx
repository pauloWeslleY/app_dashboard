import { Switch, Route } from 'react-router-dom'
import { SignIn } from '../pages/SignIn'

export const AuthRoutes: React.FC = () => (
  <Switch>
    <Route path="/" component={SignIn} />
  </Switch>
)
