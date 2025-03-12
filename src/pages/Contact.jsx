import { useState } from 'react';
import '../css/Contact.css';
// Import helper functions to validate email and name
import { validateEmail, validateName } from '../utils/helpers'; // Adjust the import path as needed

function Contact() {
  // Create state variables for the form fields and error messages
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // Handle input changes for name, email, and message
  const handleInputChange = (e) => {
    const { target } = e;
    const inputName = target.name;
    const inputValue = target.value;

    if (inputName === 'name') {
      setName(inputValue);
    } else if (inputName === 'email') {
      setEmail(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  // Handle form submission and perform validation
  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Validate name
    const nameError = validateName(name);
    if (nameError) {
      setErrorMessage(nameError);
      return;
    }

    // Validate email
    if (!validateEmail(email)) {
      setErrorMessage('Please enter a valid email');
      return;
    }

    // If everything is valid, show an alert
    alert(`Message sent successfully by ${name}`);

    // Clear the form after submission
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="container text-center">
      <h1>Contact Me</h1>
      <form className="form" onSubmit={handleFormSubmit}>
        <input
          value={name}
          name="name"
          onChange={handleInputChange}
          type="text"
          placeholder="Name"
        />
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="Email"
        />
        <textarea
          value={message}
          name="message"
          onChange={handleInputChange}
          placeholder="Your Message"
        />
        <button type="submit">Send Message</button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
  );
}

export default Contact;
