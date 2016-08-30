import React from 'react';
import { Link } from 'react-router';
import Translated from '../Translated';

function Home() {
  return (
    <div>
      <p>
        Welcome Home !
      </p>
      <Translated />
      <div><Link to="/example">Example page</Link></div>
    </div>
  );
}
Home.displayName = 'Home';

export default Home;
