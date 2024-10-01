import React from 'react';

const ProductList = ({ products, onDelete, onEdit }) => {
  return (
    <div className="product-list">
      {products.map((product, index) => (
        <div key={index} className="product-item">
          <span>{product.name}</span>
          <span>{product.quantity}</span>
          <span>{product.expiryDate || 'Sem vencimento'}</span>
          <button onClick={() => onEdit(index)}>Editar</button>
          <button onClick={() => onDelete(index)}>Excluir</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
