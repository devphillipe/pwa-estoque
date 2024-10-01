import React from 'react';

const ProductList = ({ products, onDelete, onEdit }) => {
  return (
    <div className="product-list">
      {products.length === 0 ? (
        <p>Nenhum produto cadastrado.</p>
      ) : (
        products.map((product, index) => (
          <div key={index}>
            <span><strong>{product.name}</strong></span>
            <span>{product.quantity} unidades</span>
            <span>{product.expiryDate || 'Sem vencimento'}</span>
            <div>
              <button className="edit" onClick={() => onEdit(index)}>Editar</button>
              <button className="delete" onClick={() => onDelete(index)}>Excluir</button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default ProductList;
