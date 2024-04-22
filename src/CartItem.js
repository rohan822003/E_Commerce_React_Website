import React, {useContext} from 'react'
import { ShopContext } from './context/shop-context';
import './Cart.css';
const CartItem = (props) => {
    const {id,productName, price, productImage}=props.data;
    const {cartItems,addToCart,removeFromCart,updateCartItemCount} = useContext(ShopContext)
  return (
    <div className='cartItem'>
        <img src={productImage} alt='product'/>
        <div className='description'>
            <p><b>{productName}</b></p>
            <p>₹{price}</p>
            <div className='countHandler'>
          <button onClick={()=>removeFromCart(id)} className='ui inverted red button'>-</button>
          <input value={cartItems[id]} onChange={Number((e)=>updateCartItemCount(e.target.value),id)}/> 
          <button onClick={()=>addToCart(id)} className='ui inverted green button'>+</button>
        </div>
        </div>
      
    </div>
  )
}

export default CartItem 
