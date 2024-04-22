import React from 'react'
import WallDecor2 from './WallDecor2';
import './shop.css';

import product16 from './Images/bgimg3.jpg';
import { WALLDECOR } from './WallDecorCategory';
const Category3 = () => {
    return (  
        <div className='shop'>
            <div className='bgimg'>
            <img src={product16} alt='bgimage'></img>
            </div>

            
                <h1 className='shopTitle'>ArtisticVerse</h1>
                
            
            <div className='products'>
                {WALLDECOR.map((product) => 
                (<WallDecor2 data={product} />))}
            </div>

        </div>
    );
}
 
export default Category3;