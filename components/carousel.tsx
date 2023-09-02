import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Importa los estilos del carrusel
import { title } from './primitives';
import Link from 'next/link';

const CarouselComponent = () => {
    return (
        <div className="w-full max-w-screen-lg mx-auto">
            <Carousel
                showArrows={true}
                infiniteLoop={true}
                autoPlay={true}
                interval={3000}
            >
                <div className="relative h-80">
                    <img
                        src="agents.jpg"
                        alt="Slide 1"
                        className="w-full h-full object-cover"
                    />
                    <p className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 text-white p-2">
                        <Link
                            href="agents"
                            style={{width: "100%", height: "100%"}}
                            className='flex items-center justify-center'
                        >
                            {/* <h1 className="text-fuchsia-400 text-6xl">AGENTES&nbsp;</h1> */}

                        </Link>
                    </p>
                </div>
                <div className="relative h-80">
                    <img
                        src="weapons.jpg"
                        alt="Slide 2"
                        className="w-full h-full object-cover"
                    />
                    <p className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 text-white p-2">
                        <Link
                            href="weapons"
                            style={{width: "100%", height: "100%"}}
                            className='flex items-center justify-center'
                        >
                            {/* <h1 className="text-fuchsia-400 text-6xl">ARMAS&nbsp;</h1> */}

                        </Link>
                    </p>
                </div>
                <div className="relative h-80">
                    <img
                        src="maps.jpg"
                        alt="Slide 2"
                        className="w-full h-full object-cover"
                    />
                    <p className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 text-white p-2">
                        <Link
                            href="maps"
                            style={{width: "100%", height: "100%"}}
                            className='flex items-center justify-center'
                        >
                            {/* <h1 className="text-fuchsia-400 text-6xl">MAPAS&nbsp;</h1> */}
                        </Link>
                    </p>
                </div>
                <div className="relative h-80">
                    <img
                        src="cards.jpg"
                        alt="Slide 2"
                        className="w-full h-full object-cover"
                    />
                    <p className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 text-white p-2">
                        <Link
                            href="cards"
                            style={{width: "100%", height: "100%"}}
                            className='flex items-center justify-center'
                        >
                            {/* <h1 className="text-fuchsia-400 text-6xl">CARTAS&nbsp;</h1> */}
                        </Link>
                    </p>
                </div>
                <div className="relative h-80">
                    <img
                        src="tiers.png"
                        alt="Slide 2"
                        className="w-full h-full object-cover"
                    />
                    <p className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 text-white p-2">
                        <Link
                            href="tiers"
                            style={{width: "100%", height: "100%"}}
                            className='flex items-center justify-center'
                        >
                           {/*  <h1 className="text-fuchsia-400 text-6xl">RANGOS&nbsp;</h1> */}

                        </Link>
                    </p>
                </div>
            </Carousel>
        </div>
    );
};

export default CarouselComponent;