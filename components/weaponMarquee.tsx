import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import { FC } from 'react';
import { DetailWeaponProps } from './detailWeapon';
import { Skin } from '@/types/weapons';
import Marquee from "react-fast-marquee";
import { Card, CardBody, CardFooter, Image } from '@nextui-org/react';

export const WeaponMarquee: FC<DetailWeaponProps> = ({ weapon }) => {
    return (
        <div className="max-w-screen-xl mx-auto">
            <Marquee gradient gradientWidth={100} gradientColor={[0, 0, 0]} style={{ pointerEvents: "none" }} className="z-10">
                <div className="flex">
                    {
                        weapon.skins.map((skin, index) => {
                            if (skin.displayIcon) {
                                return (
                                    <Card shadow="lg" key={index} isPressable className="max-w-[900px] bg-transparent mx-2">
                                        <CardBody className="flex items-center justify-center">
                                            <Image
                                                shadow="none"
                                                alt={skin.displayName}
                                                className="h-[100px] object-cover"
                                                src={skin.displayIcon ? skin.displayIcon : ""}
                                            />
                                        </CardBody>
                                    </Card>)
                            } else {
                                return null
                            }

                        })
                    }
                </div>
            </Marquee>
        </div>
    );
};