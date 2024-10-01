import React, { useState } from 'react';
import ProductList from '../components/ProductList';
import ProductRegister from './ProductRegister';
import FilterByDate from '../components/FilterByDate';
import SearchBar from '../components/SearchBar';

const Dashboard = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterDate, setFilterDate] = useState('');

  const addProduct = (product) => {
    setProducts([...products, product]);
  };

  const deleteProduct = (index) => {
    const newProducts = products.filter((_, i) => i !== index);
    setProducts(newProducts);
  };

  const editProduct = (index, updatedProduct) => {
    const newProducts = products.map((product, i) => (i === index ? updatedProduct : product));
    setProducts(newProducts);
  };

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDate = filterDate ? product.expiryDate === filterDate : true;
    return matchesSearch && matchesDate;
  });

  return (
    <div className="dashboard">
      <ProductRegister onAddProduct={addProduct} />
      <SearchBar value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
      <FilterByDate value={filterDate} onChange={(e) => setFilterDate(e.target.value)} />
      <ProductList products={filteredProducts} onDelete={deleteProduct} onEdit={editProduct} />
    </div>
  );
};

export default Dashboard;
