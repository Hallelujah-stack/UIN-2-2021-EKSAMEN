import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navigation from '../components/Navigation';
import DefaultLayout from '../layouts/DefaultLayout';
import Forside from '../pages/Forside';
import GlobalN from '../pages/Global';
import NorgeN from '../pages/Norge';
import SportN from '../pages/Sport';
import VGTV from '../pages/VGTV';
import ArtikkelSide from '../pages/ArtikkelSide';
import Footer from '../components/Footer';
import OmOssN from '../pages/OmOss';
import Contact from '../pages/Kontakt';

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
        <Route exact path="/Global/:slug">
          <ArtikkelSide />
        </Route>
        <Route exact path="/Nasjonal">
          <NorgeN />
        </Route>
        <Route exact path="/Nasjonal/:slug">
          <ArtikkelSide />
        </Route>
        <Route exact path="/VGTV">
          <VGTV />
        </Route>
        <Route exact path="/Om-Oss">
          <OmOssN />
        </Route>
        <Route exact path="/Om-oss/:slug">
          <ArtikkelSide />
        </Route>
        <Route exact path="/VGTV/:slug">
          <ArtikkelSide />
        </Route>
        <Route exact path="/Sport">
          <SportN />
        </Route>
        <Route exact path="/Sport/:slug">
          <ArtikkelSide />
        </Route>
        <Route exact path="/Kontakt">
          <Contact />
        </Route>
      </Switch>
      <Footer />
    </DefaultLayout>
  </Router>
);

export default Routes;
