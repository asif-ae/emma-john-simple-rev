import React, { useState } from 'react';
import fakeData from '../../fakeData';
import './Shop.css';

const Shop = () => {
  const first10 = fakeData.slice(0, 10);
  const [products, setProducts] = useState(first10);
  return (
    <div className="shop-container">
      <div className="products">
        {
          products.map(product => (
            <div className="single-product">
              <h1>{product.name}</h1>
            </div>
          ))
        }
      </div>
      <div className="cart">
        <h1>This is cart</h1>
      </div>
    </div>
  );
};

export default Shop;