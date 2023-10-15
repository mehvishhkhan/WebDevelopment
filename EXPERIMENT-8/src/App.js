import React, { useState } from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import CakeContent from './CakeContent'; // Import the CakeContent component

function App() {
  const [cartItemCount, setCartItemCount] = useState(0); // Initialize cart item count

  // Function to update the cart item count
  function updateCartItemCount(count) {
    setCartItemCount(count);
  }

  return (
    <div className="App">
      <Header cartItemCount={cartItemCount} /> {/* Pass cartItemCount as a prop */}
      <Sidebar />
      <CakeContent updateCartItemCount={updateCartItemCount} /> {/* Pass the updateCartItemCount function as a prop */}
    </div>
  );
}

export default App;
