import React, { useState } from 'react';
import fakeData from '../../fakeData';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
  const first10 = fakeData.slice(0, 10);
  const [products, setProducts] = useState(first10);
  const [cart, setCart] = useState([]);
  const handleAddProduct = (props) => {
    const newCart = [...cart, props];
    setCart(newCart);
  }
  return (
    <div className="shop-container">
      <div className="products">
        {
          products.map(product => <Product
            main={product}
            key={product.key}
            handleAddProduct={handleAddProduct}
          ></Product>)
        }
      </div>
      <div className="cart">
        <Cart main={cart}></Cart>
      </div>
    </div>
  );
};

export default Shop;