import React from 'react';
import './Banner.scss';
import bannarimg from '../../../assets/banner-img.png'

export default function Banner() {
  return (
    <div className='content'>
          <div className='bannar-content'>
            <div className='bannar-img'>
               <img src={bannarimg} alt=''/>
            </div>
            <div className='bannar-text'>
               <h1>sales</h1>
               <p>Convallis interdum purus adipiscing dis parturient poseure ac a 
               quem a elefiend montes parturient poseure curea tempor</p>

               <div className='bannar-btn'>
                <div className='bannar-btn-rm'>Read More</div>
                <div className='bannar-btn-rm sn'>Shop Now</div>
               </div>
            </div>
          </div>
      
    </div>
  )
}

