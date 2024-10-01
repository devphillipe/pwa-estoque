import React, { useState } from 'react';

const Auth = ({ onLogin }) => {
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onLogin(password);
  };

  return (
    <div className="auth-container">
      <img src="/logo.png" alt="Logo Marmoraria Revelar" />
      <h2>Tela de Autenticação</h2>
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
