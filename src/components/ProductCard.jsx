import React, { useState, useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const ProductCard = ({ name, price }) => {
  const [liked, setLiked] = useState(false);
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`card ${theme}`} style={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
      <h2>{name}</h2>
      <p>₹{price}</p>
      <button onClick={() => setLiked(!liked)}>
        {liked ? 'Liked ❤️' : 'Like 🤍'}
      </button>
    </div>
  );
};

export default ProductCard;
