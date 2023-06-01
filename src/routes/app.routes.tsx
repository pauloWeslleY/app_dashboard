import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Dashboard } from '../pages/Dashboard'
import { HeroList } from '../pages/HeroList'

export const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/list/:type" component={HeroList} />
      </Switch>
    </Router>
  )
}
