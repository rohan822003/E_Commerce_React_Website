import React, { useContext } from 'react'
import { ShopContext } from './context/shop-context';

const Products = (props) => {
    const {id,productName, price, productImage}=props.data;
    const {addToCart, cartItems} = useContext(ShopContext)
    const cartItemAmount = cartItems[id]

  return (
    <div>
    <div>
  
    </div>
    <div className='product'>
      <img src={productImage} alt='product'/>
      <div className='description'>
        <p>
          <b>{productName}</b>
        </p>
        <p>₹{price}</p>
      </div>
      <button className='ui secondary button' onClick={() => addToCart(id)}>Add To Cart {cartItemAmount > 0 && <>({cartItemAmount})</>}</button>
    </div>
    </div>
  )
}

export default Products
