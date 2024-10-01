import React, { useState } from 'react';

const Auth = ({ onLogin }) => {
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onLogin(password);
  };

  return (
    <div className="auth-container">
      <img src="/logo.png" alt="Marmoraria Revelar Logo" />
      <form onSubmit={handleSubmit}>
        <input
          type="password"
          placeholder="Digite a senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
};

export default Auth;
