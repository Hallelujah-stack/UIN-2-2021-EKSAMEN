import { useState } from 'react';

const ContactForm = ({ loading, onSubmit }) => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ name, message });
  };

  return (
    <form onSubmit={handleSubmit} method="POST">
      <label id="name">
        Navn:
        <input
          onChange={(event) => setName(event.target.value)}
          value={name}
          type="text"
          id="name"
          placeholder="Hva heter du?"
          required
        />
      </label>
      <label id="message">
        Navn:
        <textarea
          rows="4"
          cols="50"
          onChange={(event) => setMessage(event.target.value)}
          value={message}
          type="text"
          id="message"
          placeholder="Legg til beskjed"
          required
        />
      </label>
      <button type="submit">{loading ? 'Sender ...' : 'Send'}</button>
    </form>
  );
};

export default ContactForm;
