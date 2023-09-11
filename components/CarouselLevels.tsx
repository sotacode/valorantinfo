import { Level } from '@/types/weapons';
import { useDisclosure } from '@nextui-org/react';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';


interface CarouselLevelsProps {
    levels: Level[];
}

export const CarouselLevels: React.FC<CarouselLevelsProps> = ({ levels }) => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    return (
        <div className="carousel-container">
            
            <Carousel
                showArrows={true}
                showStatus={false} // Oculta los puntos indicadores
                showThumbs={false}  // Muestra la previsualización inferior (miniaturas)
                infiniteLoop={false}
                autoPlay={false}
                interval={3000}
                stopOnHover={true}
                transitionTime={500}
                swipeable={false}
                emulateTouch={false}
                dynamicHeight={true}
                className='w-full'
            >
                {levels.map((level) => {
                    if (level.streamedVideo) {
                        return (
                            <div key={level.uuid} className='px-10 z-24'>
                                <video controls>
                                    <source src={level.streamedVideo} type="video/mp4" />
                                </video>
                                <p className=''>{level.displayName}</p>
                            </div>
                        )
                    }
                    else {
                        /* Tratar caso en que no hay video */
                        return (<div key={level.uuid}>
                            <img src="https://media.valorant-api.com/weaponskins/940fb417-4a9c-3004-41f5-3e8f1f4178b2/displayicon.png" alt="not found" />
                            <p>{level.displayName}</p>
                        </div>)
                    }
                })}
            </Carousel>
        </div>
    );
};