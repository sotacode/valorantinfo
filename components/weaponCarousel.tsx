import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import { FC } from 'react';
import { DetailWeaponProps } from './detailWeapon';
import { Skin } from '@/types/weapons';

export const WeaponCarousel: FC<DetailWeaponProps> = ({ weapon }) => {
    return (
        <div className="max-w-screen-lg mx-auto">
            <Carousel
                showArrows={false}
                infiniteLoop={true}
                autoPlay={true}
                showThumbs={false}
                stopOnHover={false}
                showIndicators={false}
                interval={2000}
                centerMode={false}
            >
                {weapon.skins.map((skin: Skin) => (
                    <React.Fragment key={skin.uuid}>
                        {skin.displayIcon && (
                            <div className="relative h-60">
                                <img
                                    src={skin.displayIcon}
                                    alt={`Skin ${skin.displayName}`}
                                    className="withoutborderimg h-[200px] w-[200px]"
                                />
                                <p className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 text-white p-2">
                                    {/* Contenido adicional */}
                                </p>
                            </div>
                        )}
                    </React.Fragment>
                ))}
            </Carousel>
        </div>
    );
};