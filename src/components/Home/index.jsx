import React from 'react';
import { Link } from 'react-router';

function Home() {
  return (
    <div>
      <p>
        Welcome Home !
      </p>
      <div><Link to="/example">Example page</Link></div>
    </div>
  );
}
Home.displayName = 'Home';

export default Home;
