import React, {useContext} from 'react';
import {DataContext} from '../context/UserContext';
import formatCurrency from '../currency/Currency';

 const Products = () => {

  const value = useContext(DataContext);
  const [products, setProducts] = value.products;

  return (
    <div className='products'>
      { 
          products.map( product => (
            <div className='card' key= {product._id}>
              <a href="/">
                <img src= {product.images[0]} alt="" />
              </a>
              <div className='box'>
                <a href="/">
                  <h4>{product.title}</h4>
                </a>
                <p>{product.description}</p>
                <h3>{formatCurrency(product.price)}</h3>
                <button>افزودن به سبد خرید</button>
              </div>
            </div>
          ))
      }
    </div>
  )
}

export default Products;
