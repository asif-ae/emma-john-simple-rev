import React, { useState } from 'react';
import fakeData from '../../fakeData';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
  const first10 = fakeData.slice(0, 10);
  const [products, setProducts] = useState(first10);
  return (
    <div className="shop-container">
      <div className="products">
        {
          products.map(product => <Product main={product} key={product.key}></Product>)
        }
      </div>
      <div className="cart">
        <h1>This is cart</h1>
      </div>
    </div>
  );
};

export default Shop;