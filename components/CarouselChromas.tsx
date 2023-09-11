import { Chroma } from '@/types/weapons';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

interface CarouselChromasProps {
  chromas: Chroma[];
}

export const CarouselChromas: React.FC<CarouselChromasProps> = ({ chromas }) => {

  return (
    <div className="carousel-container w-[300px] sm:w-full">
      <Carousel
        showArrows={true}
        showStatus={false} // Oculta los puntos indicadores
        showThumbs={true}  // Muestra la previsualización inferior (miniaturas)
        infiniteLoop={true}
        autoPlay={true}
        interval={3000}
        stopOnHover={true}
        transitionTime={500}
        swipeable={true}
        emulateTouch={true}
        dynamicHeight={true}
        className='w-full'
      >
        {chromas.map((chroma) => (
          <div key={chroma.uuid} className='h-[400px]'>
              <img
                className='object-cover'
                src={chroma.fullRender}
                alt={chroma.displayName}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain', // Esto mantiene la proporción y contiene la imagen
                }}
              />
              <p className=''>{chroma.displayName}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
};