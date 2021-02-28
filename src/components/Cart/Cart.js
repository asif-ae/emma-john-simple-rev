import React from 'react';
import './Cart.css';

const Cart = (props) => {
  const cart = props.main;
  const totalPrice = cart.reduce((total, product) => total + product.price, 0);
  let shipping = 0;
  if (totalPrice > 35) {
    shipping = 0;
  } else if (totalPrice > 15) {
    shipping = 4.99;
  } else if (totalPrice > 0) {
    shipping = 12.99;
  }

  const tax = (totalPrice / 10);

  const grandTotal = (totalPrice + shipping + tax);
  return (
    <div>
      <div className="text-center">
        <h1>Your Order</h1>
        <h4>Item Ordered: {cart.length}</h4>
      </div>
      <div className="clear">
        <div className="text-left"><b>Subtotal Price:</b></div>
        <div className="text-right">{(totalPrice).toFixed(2)}</div>
      </div>
      <div className="clear">
        <div className="text-left"><b>Shipping:</b></div>
        <div className="text-right">{shipping}</div>
      </div>
      <div className="clear">
        <div className="text-left margin"><b>Tax:</b></div>
        <div className="text-right margin">{(tax).toFixed(2)}</div>
      </div>
      <div className="clear border"></div>
      <div className="clear">
        <div className="text-left"><b>Grand Total:</b></div>
        <div className="text-right"><b>{(grandTotal).toFixed(2)}</b></div>
      </div>
    </div>
  );
};

export default Cart;