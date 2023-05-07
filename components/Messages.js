import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import Message from './Message';
import styles from './messages.module.scss';

const Messages = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const unsubscribe = db
      .collection('messages')
      .orderBy('timestamp', 'desc')
      .onSnapshot((snapshot) => {
        const fetchedMessages = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setMessages(fetchedMessages);
      });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div className={styles.messages}>
      {messages.map((message) => (
        <Message
          key={message.id}
          name={message.name}
          message={message.message}
          date={new Date(message.timestamp?.toDate()).toLocaleString()} // Add this line to pass the date prop
        />
      ))}
    </div>
  );
};

export default Messages;
