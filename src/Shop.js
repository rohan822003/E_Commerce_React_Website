import React from 'react'
import { PRODUCTS } from './Product';
import Products from './Products';
import './shop.css';
import Footer from './Footer';

import product16 from './Images/bgimg3.jpg';
const Shop = () => {
    return (  
        <div className='shop'>
            <div className='bgimg'>
            <img src={product16} alt='bgimage'></img>
            </div>

            
                <h1 className='shopTitle'>ArtisticVerse</h1>
                
            
            <div className='products'>
                {PRODUCTS.map((product) => 
                (<Products data={product} />))}
            </div>
            <div>
                {<Footer />}
            </div>

        </div>
    );
}
 
export default Shop;