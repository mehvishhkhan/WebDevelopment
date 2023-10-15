// App.js
import React from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import MainContent from './MainContent';

function App() {
  return (
    <div className="App">
      <Header />
      <Sidebar />
      <MainContent />
        {/* Add other components as needed */}
      
    </div>
  );
}

export default App;
