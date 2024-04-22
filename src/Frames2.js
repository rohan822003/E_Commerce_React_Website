import React, { useContext } from 'react'
import { FrameContext } from './context/frame-context';


const Frames2 = (props) => {
    const {id,productName, price, productImage}=props.data;
    const {addToCart, cartItems} = useContext(FrameContext)
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

export default Frames2;
