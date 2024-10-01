import React, { useState } from 'react';

const ProductRegister = ({ onAddProduct }) => {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [expiryDate, setExpiryDate] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onAddProduct({ name, quantity, expiryDate });
    setName('');
    setQuantity('');
    setExpiryDate('');
  };

  return (
    <div className="product-register">
      <img src="/logo.png" alt="Marmoraria Revelar Logo" />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nome do produto"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Quantidade"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
        <input
          type="date"
          value={expiryDate}
          onChange={(e) => setExpiryDate(e.target.value)}
        />
        <button type="submit">Adicionar Produto</button>
      </form>
    </div>
  );
};

export default ProductRegister;
