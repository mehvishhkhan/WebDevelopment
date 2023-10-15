import React, { useState } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css'; // Import the Bootstrap Icons CSS

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className="sidebar-icon" onClick={toggleSidebar}>
        {/* Icon for opening and closing the sidebar */}
        {isOpen ? <i className="bi bi-x-lg"></i> : <i className="bi bi-list"></i>}
      </div>
      <ul>
        <li><a href="website.html">Home</a></li>
        <li><a href="#about_us">About Us</a></li>
        <li><a href="src\reg_cake.jsx">Cakes</a></li>
        <li><a href="#">Pastries</a></li>
        <li><a href="src\Jumbotron3.js">Cupcakes</a></li>
      </ul>
    </div>
  );
}

export default Sidebar;
