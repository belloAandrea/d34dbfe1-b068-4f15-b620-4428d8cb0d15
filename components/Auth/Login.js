import React, { useState } from 'react';
function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic for handling login
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type='email' onChange={(e) => setEmail(e.target.value)} />
      <input type='password' onChange={(e) => setPassword(e.target.value)} />
      <button type='submit'>Login</button>
    </form>
  );
}
export default Login;