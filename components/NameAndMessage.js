import React, { useState } from 'react';
import TextField from './TextField';
import firebase from 'firebase/compat/app';
import { db } from '../firebase';
import styles from './nameandmessage.module.scss'

const NameAndMessage = () => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError(null);

    if (!name || !message) {
      setError(new Error('Name and message are required'));
      setLoading(false);
      return;
    }

    try {
      await db.collection('messages').add({
        title: `${name} - Message`,
        name,
        message,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      });

      setName('');
      setMessage('');
    } catch (error) {
      console.error('Error submitting the form:', error);
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Name"
        id="name"
        value={name}
        onChange={handleNameChange}
        maxLength={20}
      />
      <TextField
        label="Message"
        id="message"
        value={message}
        onChange={handleMessageChange}
        maxLength={50}
      />
      <button type="submit" disabled={loading} className={styles.submit}>SUBMIT</button>
      {error && <p>Error: {error.message}</p>}
    </form>
  );
};

export default NameAndMessage;
