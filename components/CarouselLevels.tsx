import { Level } from '@/types/weapons';
import { useDisclosure } from '@nextui-org/react';
import React, { useRef, useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

interface CarouselLevelsProps {
    levels: Level[];
}

export const CarouselLevels: React.FC<CarouselLevelsProps> = ({ levels }) => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [currentVideoIndex, setCurrentVideoIndex] = useState<number>(0);
    const [videoReady, setVideoReady] = useState<boolean>(false);
    const videoRefs = useRef<HTMLVideoElement[]>([]);

    // Función para pausar el video anterior
    const pausePreviousVideo = () => {
        if (videoRefs.current[currentVideoIndex]) {
            videoRefs.current[currentVideoIndex].pause();
        }
    };

    const handleVideoChange = (index: number) => {
        pausePreviousVideo();
        setCurrentVideoIndex(index);
    };

    useEffect(() => {
        // Escuchar el evento de carga del video
        const videoElement = videoRefs.current[currentVideoIndex];

        if (videoElement) {
            videoElement.addEventListener('canplaythrough', () => {
                setVideoReady(true); // Cuando el video está listo para reproducirse
            });
        }

        // Limpiar el evento al desmontar el componente
        return () => {
            if (videoElement) {
                videoElement.removeEventListener('canplaythrough', () => { });
            }
        };
    }, [currentVideoIndex]);

    return (
        <div className="carousel-container">
            <Carousel
                showArrows={true}
                showStatus={false}
                showThumbs={false}
                infiniteLoop={false}
                autoPlay={false}
                interval={3000}
                stopOnHover={true}
                transitionTime={500}
                swipeable={false}
                emulateTouch={false}
                dynamicHeight={true}
                className="w-full"
                onChange={handleVideoChange}
            >
                {levels.map((level, index) => {
                    if (level.streamedVideo) {
                        return (
                            <div key={level.uuid} className="px-10 z-24 flex flex-col items-center justify-center">
                                <video controls ref={(el) => el && (videoRefs.current[index] = el)}>
                                    <source src={level.streamedVideo} type="video/mp4" />
                                </video>
                                {videoReady ?
                                    <p className="mt-8 text-bold text-xl">{level.displayName}</p>
                                    :
                                    <p className="mt-8 text-bold text-xl">{level.displayName}</p>
                                }
                            </div>
                        );
                    } else {
                        /* Tratar caso en que no hay video */
                        return (
                            <div key={level.uuid}>
                                <img
                                    src="https://media.valorant-api.com/weaponskins/940fb417-4a9c-3004-41f5-3e8f1f4178b2/displayicon.png"
                                    alt="not found"
                                />
                                <p>{level.displayName}</p>
                            </div>
                        );
                    }
                })}
            </Carousel>
        </div>
    );
};