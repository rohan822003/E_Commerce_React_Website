import React from 'react'
import { FRAMES } from './FrameCategory';
import Frames2 from './Frames2';
import './shop.css';

import product16 from './Images/bgimg3.jpg';
const Category1 = () => {
    return (  
        <div className='shop'>
            <div className='bgimg'>
            <img src={product16} alt='bgimage'></img>
            </div>

            
                <h1 className='shopTitle'>ArtisticVerse</h1>
                
            
            <div className='products'>
                {FRAMES.map((product) => 
                (<Frames2 data={product} />))}
            </div>

        </div>
    );
}
 
export default Category1;