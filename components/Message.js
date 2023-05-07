import React from 'react';
import styles from './message.module.scss';

const Message = ({ name, message, date }) => {
  return (
    <div className={styles.message}>
      <div className={styles.meta}>
        <h3>{name}</h3>
        <p className={styles.date}>{date}</p>
      </div>
      <p>{message}</p>
    </div>
  );
};

export default Message;
