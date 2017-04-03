/* @flow */
import React from "react";
import { Card, CardTitle, CardText } from "material-ui/Card";

const NoMatch = ({ location }: { location: LocationShape }) => (
  <Card>
    <CardTitle title="Page not found." />
    <CardText>
      <p>Hey are you lost ?</p>
      <p>Sorry but <code>{location.pathname}</code> didn’t match any pages.</p>
    </CardText>
  </Card>
);

export default NoMatch;
