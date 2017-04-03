/* @flow */
import React from "react";
import Route from "react-router-dom/Route";
import Redirect from "react-router-dom/Redirect";
import Switch from "react-router-dom/Switch";
import urls from "../urls";
import { intlPath, intlLocation } from "../intl";

// sync pages
import Home from "../pages/Home";
import NoMatch from "../pages/NoMatch";

// async pages
import About from "../pages/async/About";
import Resume from "../pages/async/Resume";
import Contact from "../pages/async/Contact";

export default function PageContent() {
  // <Switch> to render only the first child <Route> that matches the location
  // don't forget to add corresponding Link in Bar
  return (
    <main id="page-container">
      <div id="page-content">
        <Switch>
          {/* redirect / to intl 'home' location */}
          <Route
            exact
            path="/"
            render={() => <Redirect to={intlLocation(urls.home)} />}
          />
          <Route exact path={intlPath(urls.home)} component={Home} />
          <Route path={intlPath(urls.about)} component={About} />
          <Route path={intlPath(urls.resume)} component={Resume} />
          <Route path={intlPath(urls.contact)} component={Contact} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </main>
  );
}
