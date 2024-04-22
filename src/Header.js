import React from 'react'
import {Link} from 'react-router-dom';
import './Header.css';
import { useAuth0 } from "@auth0/auth0-react";


const Header = () => {
  const { loginWithRedirect,logout,isAuthenticated,user } = useAuth0();
  return (
    <div id='navbar'>
        <h2>ArtisticVerse</h2>
        
        <div class="ui search">
        <div class="dropdown">
  <button class="dropbtn">Categories</button>
  <div class="dropdown-content">
    <Link to="/">All</Link>
    <Link to="/frame">Frames</Link>
    <Link to="/bag">hand Made Bags</Link>
    <Link to="/walldecor">Wall Decor</Link>
    <Link to="/bucket">hand Crafted Bucket</Link>
    
    
  </div>
</div>
          
    <div class="ui icon input">
    <input class="prompt" type="text" placeholder="Search here ..."  />
    <i class="search icon"></i>
    </div>
    <div class="results"></div>
    </div>
          <div className='links'>
            <Link to="/">Shop</Link>
            <Link to="/cart"><i className='cart arrow down icon'></i></Link>
            
              
            {
              isAuthenticated && <p className='username'>
                {user.name}
              </p>

            }
            
            {
              isAuthenticated ? (
                <button className='ui red button' onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Log Out</button>
              ):(
                  <button className='ui green button' onClick={() => loginWithRedirect()}>Log In</button>

                )

            }
           
          </div>
          
          
        </div>
        
        
  )
}

export default Header