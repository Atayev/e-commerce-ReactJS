import React from 'react';
import './wishlist.css';

const Wishlist = () => {
  return (
    <div className="container wish">
      <h1>Wishlist</h1>
      <span><a href="#">HOME</a> / WISHLIST</span>
        <FontAwesomeIcon icon="fa-regular fa-bag-shopping"/>
       <span>There are no products in your wishlist!</span> 
    </div>
  )
}

export default Wishlist