import { Skin } from '@/types/weapons';
import { useDisclosure } from '@nextui-org/react';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { ModalSkinDetail } from './modalSkinDetail';
import { useState } from 'react';

interface CarouselSkinsProps {
  skins: Skin[];
}

export const CarouselSkins: React.FC<CarouselSkinsProps> = ({ skins }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [selectedSkin, setSelectedSkin] = useState<Skin | undefined>(undefined)

  const handleClickSkin = (skin: Skin) => {
    setSelectedSkin(skin);
    onOpen();
  };

  return (
    <div className="carousel-container">
      <Carousel
        showArrows={true}
        showStatus={false} // Oculta los puntos indicadores
        showThumbs={false}  // Muestra la previsualización inferior (miniaturas)
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
        {skins.map((skin) => (
          <div key={skin.uuid} className='h-[400px]'>
            <img
              className='object-cover'
              src={skin.displayIcon ? skin.displayIcon : ""}
              alt={skin.displayName}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain', // Esto mantiene la proporción y contiene la imagen
              }}
            />
            <p className='absolute inset-0' onClick={() => handleClickSkin(skin)}></p>
          </div>
        ))}
      </Carousel>
      { selectedSkin && <ModalSkinDetail skin={selectedSkin} isOpen={isOpen} onOpen={onOpen} onOpenChange={onOpenChange} />}
    </div>
  );
};