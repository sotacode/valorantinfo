import { Weapon } from '@/types/weapons';
import { Card, Image } from '@nextui-org/react'
import React from 'react'
import { FC } from 'react';

interface CardWeaponProps {
    weapon: Weapon;
    handleSelectedWeapon: (weapon: Weapon) => void;
}
export const CardWeapon: FC<CardWeaponProps> = ({ weapon, handleSelectedWeapon }) => {
    return (
        <Card
            isPressable
            className="cardweapon overflow-visible py-5 px-4 my-5 h-[145px] w-full flex flex-col items-center justify-center hover:transition-all hover:border-2 hover:border-indigo-600"
            onPress={() => { handleSelectedWeapon(weapon) }}
        >
            <Image
                className="imageweapon max-h-[80px] col-span-4"
                src={weapon.displayIcon}
            />
            <h1 className='text-bold text-lg absolute bottom-0 left-0 pl-3 pb-1'>{weapon.displayName}</h1>
        </Card>
    )
}
