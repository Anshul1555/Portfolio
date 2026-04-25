import { useState } from 'react';
import '../css/Contact.css';
import { validateEmail, validateName } from '../utils/helpers';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

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

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const nameError = validateName(name);
    if (nameError) {
      setErrorMessage(nameError);
      return;
    }

    if (!validateEmail(email)) {
      setErrorMessage('Please enter a valid email');
      return;
    }

    alert(`Message sent successfully by ${name}`);

    setName('');
    setEmail('');
    setMessage('');
    setErrorMessage('');
  };

  return (
    <div className="contact-page">
      <h1>Contact Me</h1>
      <div className="contact-form-container">
        <form className="form" onSubmit={handleFormSubmit}>
          <div className="form-group">
            <label htmlFor="contact-name">Name</label>
            <input
              id="contact-name"
              value={name}
              name="name"
              onChange={handleInputChange}
              type="text"
              placeholder="Your name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="contact-email">Email</label>
            <input
              id="contact-email"
              value={email}
              name="email"
              onChange={handleInputChange}
              type="email"
              placeholder="your@email.com"
            />
          </div>
          <div className="form-group">
            <label htmlFor="contact-message">Message</label>
            <textarea
              id="contact-message"
              value={message}
              name="message"
              onChange={handleInputChange}
              placeholder="Write your message here..."
            />
          </div>
          <button type="submit" className="submit-btn">Send Message</button>
        </form>
        {errorMessage && (
          <p className="error-text">{errorMessage}</p>
        )}
      </div>
    </div>
  );
}

export default Contact;
