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
  };

  return (
    <div className="container text-center main-content">
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
