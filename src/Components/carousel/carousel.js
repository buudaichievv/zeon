import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import './carousel.css'
import carousel_jpg from '../../img/carousel.jpg'
const handleDragStart = (e) => e.preventDefault();

const items = [
  <img src={carousel_jpg} onDragStart={handleDragStart} role="presentation" />,
  <img src={carousel_jpg} onDragStart={handleDragStart} role="presentation" />,
  <img src={carousel_jpg} onDragStart={handleDragStart} role="presentation" />,
];

const Gallery = () => {
  return (
      <div className='carousel'>
        <AliceCarousel
            mouseTracking items={items}
            autoPlay true
            autoPlayInterval="1500"
            infinite 
          />
      </div>
  );
}
export default Gallery