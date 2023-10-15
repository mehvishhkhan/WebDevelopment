import React, { useState } from "react";
import validator from "validator";

const ContactForm = () => {
    const [formData, setFormData] = useState({
      name: "",
      email: "",
      message: "",
    });
    const [formErrors, setFormErrors] = useState({});
    const [formSubmitted, setFormSubmitted] = useState(false);
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
  
  const validateForm = () => {
    const errors = {};
    if (formData.name.trim() === "") {
      errors.name = "Name is required";
    } else if (!/^[a-zA-Z\s]*$/.test(formData.name)) {
      errors.name = "Name should only contain letters and spaces";
    }
    if (!validator.isEmail(formData.email)) {
      errors.email = "Email is not valid";
    }
    if (formData.message.trim() === "") {
      errors.message = "Message is required";
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };
  
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (validateForm()) {
        // Perform your form submission logic here
        // For now, just set formSubmitted to true
        setFormSubmitted(true);
      }
    };

  return (
    <div className="contact-form-container">
      {formSubmitted ? (
        <div className="success-message">Form submitted successfully!</div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name:</label>
            <textarea
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="small-textarea" // Add this class
            ></textarea>
            {formErrors.name && (
                <span className="error-message">{formErrors.name}</span>
            )}
            </div>
            <div className="form-group">
            <label>Email:</label>
            <textarea
                type="text"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="small-textarea" // Add this class
            ></textarea>
            {formErrors.email && (
                <span className="error-message">{formErrors.email}</span>
            )}
            </div>
            <div className="form-group">
            <label>Message:</label>
            <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="small_textarea" // Add this class
            ></textarea>
            {formErrors.message && (
                <span className="error-message">{formErrors.message}</span>
            )}
            </div>

          <button type="submit" className="submit">Submit</button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;


