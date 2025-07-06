import React, { useState, useContext } from 'react';
import ProductCard from '../components/ProductCard';
import SearchBar from '../components/SearchBar';
import { AuthContext } from '../context/AuthContext';

const dummyProducts = [
  { id: 1, name: 'Shoes', price: 1999 },
  { id: 2, name: 'Bag', price: 999 },
  { id: 3, name: 'Watch', price: 2999 },
];

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const filteredProducts = dummyProducts.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div style={{ padding: '20px' }}>
      <h1>Welcome to ShopZone 🛍️</h1>
      <SearchBar onSearch={setSearchQuery} />
      {filteredProducts.map(product => (
        <ProductCard key={product.id} name={product.name} price={product.price} />
      ))}
    </div>
  );
};

export default Home;
