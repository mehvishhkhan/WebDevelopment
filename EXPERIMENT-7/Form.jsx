import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [formErrors, setFormErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    }
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!isValidEmail(formData.email)) {
      errors.email = 'Invalid email address';
    }
    if (!formData.message.trim()) {
      errors.message = 'Message is required';
    }
    return errors;
  };

  const isValidEmail = (email) => {
    // Simple email validation regex (you can use a more comprehensive one)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();

    if (Object.keys(errors).length === 0) {
      // Form is valid, submit the data (you can send it to an API, for example)
      setIsSubmitted(true);
      // Here, you can handle the submission, e.g., send data to a server
    } else {
      setFormErrors(errors);
    }
  };

  return (
    <div className="contact-form">
      <h2>Contact Us</h2>
      {isSubmitted ? (
        <div className="success-message">Thank you for your message! We'll get back to you soon.</div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
            {formErrors.name && <div className="error">{formErrors.name}</div>}
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="text"
              id="email"
              name="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
            {formErrors.email && <div className="error">{formErrors.email}</div>}
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            />
            {formErrors.message && <div className="error">{formErrors.message}</div>}
          </div>
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
