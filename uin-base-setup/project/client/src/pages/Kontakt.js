import { useState } from 'react';
import ContactForm from '../components/KontaktOss';
import Lead from '../components/Lead';
import Title from '../components/Title';
import { Container } from '../styles/Styles';
import { createContact } from '../utils/contactService';

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const onSubmit = async (data) => {
    setLoading(true);
    setError(false);
    setSuccess(false);

    try {
      await createContact(data);
      setSuccess(true);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <Title title="Kontakt" />
      <Lead lead="Ta kontakt med oss da vel!" />
      {error ? <p>{error}</p> : null}
      {success ? <p>Takk. Din henvendelse er mottatt</p> : null}
      <ContactForm loading={loading} onSubmit={onSubmit} />
    </Container>
  );
};

export default Contact;
