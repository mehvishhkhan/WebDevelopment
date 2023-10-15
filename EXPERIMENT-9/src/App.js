import React from "react";
import "./App.css"; // Import your CSS styles
import ContactForm from "./ContactForm"; // Import your ContactForm component

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Contact Form</h1>
        <ContactForm /> {/* Render the ContactForm component */}
      </div>
    </div>
  );
}

export default App;
