import React from 'react';
import './foodGallery.css';
import './../index.css';

import f1 from '../assets/food/food1.png';
import f2 from '../assets/food/food2.png';
import f3 from '../assets/food/food3.png';
import f4 from '../assets/food/food4.png';
import f5 from '../assets/food/food5.png';
import f6 from '../assets/food/food6.png';
import f7 from '../assets/food/food7.png';
import f8 from '../assets/food/food8.png';
import f9 from '../assets/food/food9.png';
import f10 from '../assets/food/food10.png';
import f11 from '../assets/food/food11.png';


const FoodGallery: React.FC = () => {
    return (
    <div className='hero'>
        <div className='foodgallery'>
            <img src={f1} alt='' className='foodimg'></img>
            <img src={f2} alt='' className='foodimg'></img>
            <img src={f3} alt='' className='foodimg'></img>
            <img src={f4} alt='' className='foodimg'></img>
            <img src={f5} alt='' className='foodimg'></img>
            <img src={f6} alt='' className='foodimg'></img>
            <img src={f7} alt='' className='foodimg'></img>
            <img src={f8} alt='' className='foodimg'></img>
            <img src={f9} alt='' className='foodimg'></img>
            <img src={f10} alt='' className='foodimg'></img>
            <img src={f11} alt='' className='foodimg'></img>
        </div>
    </div>
    );
    
};

export default FoodGallery;