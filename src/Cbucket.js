import React from 'react'
import Bucket2 from './Bucket2';
import './shop.css';

import product16 from './Images/bgimg3.jpg';
import { BUCKETS } from './BucketCategory';
const Category4 = () => {
    return (  
        <div className='shop'>
            <div className='bgimg'>
            <img src={product16} alt='bgimage'></img>
            </div>

            
                <h1 className='shopTitle'>ArtisticVerse</h1>
                
            
            <div className='products'>
                {BUCKETS.map((product) => 
                (<Bucket2 data={product} />))}
            </div>

        </div>
    );
}
 
export default Category4;