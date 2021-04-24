import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from 'pages/Home/Home';
import AboutUs from 'pages/AboutUs/AboutUs';
import WheelAndTire from 'pages/WheelAndTire/WheelAndTire';
import PageNotFound from 'pages/PageNotFound/PageNotFound';
import DetailingAndCorrection from 'pages/DetailingAndCorrection/DetailingAndCorrection';
import MainService from 'pages/MainService/MainService';
import ServiceCeramic from 'pages/Ceramic/Ceramic';
import PaintProtectionFilm from 'pages/PaintProtectionFilm/PaintProtectionFilm';
import ContactUs from 'pages/ContactUs/ContactUs';
import IGLCoatings from 'pages/IGLCoatings/IGLCoatings';
import WindowTinting from './pages/WindowTinting/WindowTinting';
import GetAQuote from 'pages/GetAQuote/GetAQuote';
import FAQPage from 'pages/FAQ/FAQ';
import SuccessfullySent from 'pages/SuccessfullySent/SuccessfullySent';
import { AnimatePresence } from 'framer-motion';

const Routes = () => (
  <Route
    render={({ location }) => (
      <>
        <AnimatePresence exitBeforeEnter initial={false}>
          <Switch location={location} key={location.pathname}>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/main-service" exact component={MainService} />
            <Route path="/ceramic-coating" exact component={ServiceCeramic} />
            <Route
              path="/paint-protection"
              exact
              component={PaintProtectionFilm}
            />
            <Route path="/window-tinting" exact component={WindowTinting} />
            <Route path="/about-us" exact component={AboutUs} />
            <Route path="/wheel-and-tire" exact component={WheelAndTire} />
            <Route
              path="/detailing-and-correction"
              exact
              component={DetailingAndCorrection}
            />
            <Route path="/contact-us" exact component={ContactUs} />
            <Route path="/igl-coatings" exact component={IGLCoatings} />
            <Route path="/faq" exact component={FAQPage} />
            <Route path="/get-a-quote" exact component={GetAQuote} />
            <Route
              path="/successfully-sent"
              exact
              component={SuccessfullySent}
            />
            <Route path="*" component={PageNotFound} />
          </Switch>
        </AnimatePresence>
      </>
    )}
  />
);

export default Routes;
