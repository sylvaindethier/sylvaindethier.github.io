import React from "react";
import { Card, CardTitle, CardText } from "material-ui/Card";
import { location as locationPropTypes } from "./routerPropTypes";

const NoMatch = ({ location }) => (
  <Card>
    <CardTitle title="Page not found." />
    <CardText>
      <p>Hey are you lost ?</p>
      <p>Sorry but <code>{location.pathname}</code> didn’t match any pages.</p>
    </CardText>
  </Card>
);

NoMatch.propTypes = {
  location: locationPropTypes.isRequired
};

export default NoMatch;
