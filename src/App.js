import React, { useState } from 'react';
import './styles.css';

function TextInput({ type = 'text', label }) {
  const [value, setValue] = useState('');

  function handleChange(e) {
    setValue(e.target.value);
  }

  return (
    <div className="input-container">
      <input type={type} value={value} onChange={handleChange} />
      <label className={value && 'filled'} htmlFor={name}>
        {label}
      </label>
    </div>
  );
}

export default function App() {
  return (
    <div className="App">
      <form>
        <TextInput label="First name" />
        <TextInput label="Last name" />
      </form>
    </div>
  );
}
