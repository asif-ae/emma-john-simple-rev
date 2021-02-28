import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Product = (props) => {
  const {img, name, seller, price, stock} = props.main;
  console.log(props)
  return (
    <div className="single-product">
      <div className="product-image">
        <img src={img} alt={name}></img>
      </div>
      <div className="product-info">
        <h3>{name}</h3>
        <small>By {seller}</small>
        <p className="price">${price}</p>
        <p><small>Only {stock} items left</small></p>
        <button
          className="product-button"
          onClick={() => props.handleAddProduct(props.main)}>
            <FontAwesomeIcon icon={faShoppingCart}/>Add to cart
        </button>
      </div>
    </div>
  );
};

export default Product;