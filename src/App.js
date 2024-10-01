import React, { useState } from 'react';
import Auth from './pages/Auth';
import Dashboard from './pages/Dashboard';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = (password) => {
    if (password === 'renata') {
      setIsAuthenticated(true);
    } else {
      alert('Senha incorreta!');
    }
  };

  return (
    <div>
      {!isAuthenticated ? (
        <Auth onLogin={handleLogin} />
      ) : (
        <Dashboard />
      )}
    </div>
  );
}

export default App;
