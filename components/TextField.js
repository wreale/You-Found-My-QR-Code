import React from 'react';
import styles from './textfield.module.scss';

const TextField = ({ label, id, value, onChange, maxLength }) => {
  return (
    <div>
      <input 
        className={styles.textfield}
        type="text"
        id={id}
        placeholder={`${label}${maxLength > 20 ? ` (max length: ${maxLength})` : ''}`}
        aria-label={label}
        value={value}
        onChange={onChange}
        maxLength={maxLength}
      />
    </div>
  );
};

export default TextField;
