import React from 'react';
import './Product.css';

const Product = (props) => {
  const {img, name, seller, price, stock} = props.main;
  console.log(props.main)
  return (
    <div className="single-product">
      <div className="product-image">
        <img src={img} alt={name}></img>
      </div>
      <div className="product-info">
        <h3>{name}</h3>
        <small>By {seller}</small>
        <p className="price">${price}</p>
        <small>Only {stock} items left</small>
      </div>
    </div>
  );
};

export default Product;