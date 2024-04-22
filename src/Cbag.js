import React from 'react'
import { BAGS } from './BagCategory';
import Bags2 from './Bags2';
import './shop.css';

import product16 from './Images/bgimg3.jpg';
const Category2 = () => {
    return (  
        <div className='shop'>
            <div className='bgimg'>
            <img src={product16} alt='bgimage'></img>
            </div>

            
                <h1 className='shopTitle'>ArtisticVerse</h1>
                
            
            <div className='products'>
                {BAGS.map((product) => 
                (<Bags2 data={product} />))}
            </div>

        </div>
    );
}
 
export default Category2;