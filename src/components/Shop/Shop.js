import React, { useState } from 'react';
import fakeData from "../../fakeData";

const Shop = () => {
  const first10 = fakeData.slice(0, 10);
  const [products, setProducts] = useState(first10);
  return (
    <div>
      <div className="products">
        {
          products.map(product => <div className="single-product">{product.name}</div>)
        }
        
      </div>
    </div>
  );
};

export default Shop;