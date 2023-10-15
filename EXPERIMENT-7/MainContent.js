// MainContent.js
import React from 'react';

import Jumbotron2 from './Jumbotron2';
import Jumbotron3 from './Jumbotron3';
import Jumbotron4 from './Jumbotron4';

const MainContent = () => {
  return (
    <div className="main-content">
      {/* Render the jumbotron components */}
      <Jumbotron2 />
      <Jumbotron3 />
      <Jumbotron4 />

      {/* Add more content components as needed */}
    </div>
  );
};

export default MainContent;
