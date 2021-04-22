import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from 'pages/Home/Home';
import AboutUs from 'pages/AboutUs/AboutUs';
import WheelAndTire from 'pages/WheelAndTire/WheelAndTire';
import PageNotFound from 'pages/PageNotFound/PageNotFound';
import DetailingAndCorrection from 'pages/DetailingAndCorrection/DetailingAndCorrection';
import MainService from 'pages/MainService/MainService';
import ServiceCeramic from 'pages/ServiceCeramic/ServiceCeramic';
import PaintProtectionFilm from 'pages/PaintProtectionFilm/PaintProtectionFilm';
import ContactUs from 'pages/ContactUs/ContactUs';
import IGLCoatings from 'pages/IGLCoatings/IGLCoatings';
import WindowTinting from './pages/WindowTinting/WindowTinting';
import GetAQuote from 'pages/GetAQuote/GetAQuote';
import GetAQuotePage from 'pages/GetAQuotePage/GetAQuotePage';
import { AnimatePresence } from 'framer-motion';
import FAQ from 'containers/FAQ/FAQ';

const Routes = () => (
  <Route
    render={({ location }) => (
      <>
        <AnimatePresence exitBeforeEnter initial={false}>
          <Switch location={location} key={location.pathname}>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/main-service" component={MainService} />
            <Route path="/ceramic-coating" component={ServiceCeramic} />
            <Route path="/paint-protection" component={PaintProtectionFilm} />
            <Route path="/window-tinting" component={WindowTinting} />
            <Route path="/about-us" component={AboutUs} />
            <Route path="/wheel-and-tire" component={WheelAndTire} />
            <Route
              path="/detailing-and-correction"
              component={DetailingAndCorrection}
            />

            <Route path="/contact-us" component={ContactUs} />
            <Route path="/faq" component={FAQ} />
            <Route path="/igl-coatings" component={IGLCoatings} />
            <Route path="/get-a-quote" component={GetAQuote} />
            <Route path="/get-a-quote-form" component={GetAQuotePage} />
            <Route path="*" component={PageNotFound} />
          </Switch>
        </AnimatePresence>
      </>
    )}
  />
);

export default Routes;
