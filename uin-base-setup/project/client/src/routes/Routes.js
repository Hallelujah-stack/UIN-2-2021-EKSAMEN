import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Contact from '../pages/Kontakt';
import Navigation from '../components/Navigation';
import DefaultLayout from '../layouts/DefaultLayout';
import Forside from '../pages/Forside';
import GlobalN from '../pages/Global';
import NorgeN from '../pages/Norge';
import SportN from '../pages/Sport';
import VgtvN from '../pages/VGTV';
import ArtikkelSide from '../pages/ArtikkelSide';

const Routes = () => (
  <Router>
    <Navigation />
    <DefaultLayout>
      <Switch>
        <Route exact path="/">
          <Forside />
        </Route>
        <Route exact path="/Global">
          <GlobalN />
        </Route>
        <Route exact path="/Nasjonal">
          <NorgeN />
        </Route>
        <Route exact path="/VGTV">
          <VgtvN />
        </Route>
        <Route exact path="/Sport">
          <SportN />
        </Route>
        <Route exact path="/Kontakt">
          <Contact />
        </Route>
        <Route exact path="/Article/:slug">
          <ArtikkelSide />
        </Route>
        <Route exact path="/Kontakt">
          <Contact />
        </Route>
      </Switch>
    </DefaultLayout>
  </Router>
);

export default Routes;
