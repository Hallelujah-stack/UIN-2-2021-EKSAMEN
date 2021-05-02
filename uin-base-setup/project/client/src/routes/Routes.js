import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navigation from '../components/Navigation';
import DefaultLayout from '../layouts/DefaultLayout';
import Forside from '../pages/Forside';

const Routes = () => (
  <Router>
    <Navigation />
    <DefaultLayout>
      <Switch>
        <Route exact path="/">
          <Forside />
        </Route>
      </Switch>
    </DefaultLayout>
  </Router>
);

export default Routes;
