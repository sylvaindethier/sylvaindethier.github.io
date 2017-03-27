import React from "react";
import Route from "react-router-dom/Route";
import Switch from "react-router-dom/Switch";
import urls from "../urls";

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
    <Switch>
      <Route path={urls.home} exact component={Home} />
      <Route path={urls.about} component={About} />
      <Route path={urls.resume} component={Resume} />
      <Route path={urls.contact} component={Contact} />
      <Route component={NoMatch} />
    </Switch>
  );
}
