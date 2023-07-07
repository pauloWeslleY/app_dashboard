import { Route, Switch } from 'react-router-dom'
import { Dashboard } from '../pages/Dashboard'
import { HeroList } from '../pages/HeroList'
import { Layout } from '../Layout'

export const AppRoutes: React.FC = () => (
  <Layout>
    <Switch>
      <Route path="/" exact component={Dashboard} />
      <Route path="/list/:type" component={HeroList} />
    </Switch>
  </Layout>
)
