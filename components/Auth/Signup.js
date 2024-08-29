import React, { useState } from 'react';
function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic for handling signup
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type='email' onChange={(e) => setEmail(e.target.value)} />
      <input type='password' onChange={(e) => setPassword(e.target.value)} />
      <button type='submit'>Signup</button>
    </form>
  );
}
export default Signup;