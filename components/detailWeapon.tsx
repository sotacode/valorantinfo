import { Weapon } from '@/types/weapons';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import React, { FC } from 'react'
import { useContext } from 'react';
import { LanguageContext } from '@/context/language/LanguageContext';
import { weaponsINFO } from '@/config/weapons';
import { CarouselSkins } from './carouselSkins';


export interface DetailWeaponProps {
  weapon: Weapon;
}

export const DetailWeapon: FC<DetailWeaponProps> = ({ weapon }) => {

  const { language } = useContext(LanguageContext);
  const { detailWeaponsTexts } = weaponsINFO;

  return (
    <div className='w-full flex flex-col items-center justify-center mt-20'>
      <div className='grid grid-cols-1 xl:grid-cols-3 gap-4 max-w-screen-xl items-center justify-center'>
        {/* Primer div para estadisticas */}
        <div className='w-full flex flex-col items-center justify-center xl:items-start'>
          <div className='pb-2 text-bold text-xl '>
            {detailWeaponsTexts[language].displayName.title}: {weapon.displayName}
          </div>
          <div className='pb-2 text-bold text-xl '>
            {detailWeaponsTexts[language].category.title}: {weapon.shopData?.categoryText}
          </div>
          <div className='pb-2 text-bold text-xl '>
            {detailWeaponsTexts[language].cost.title}: {weapon.shopData?.cost}
          </div>
          <div className='pb-2 text-bold text-xl '>
            {detailWeaponsTexts[language].fireRate.title}: {weapon.weaponStats?.fireRate}
          </div>
          <div className='pb-2 text-bold text-xl '>
            {detailWeaponsTexts[language].magazineSize.title}: {weapon.weaponStats?.magazineSize}
          </div>
          <div className='pb-2 text-bold text-xl '>
            {detailWeaponsTexts[language].equipTimeSeconds.title}: {weapon.weaponStats?.equipTimeSeconds}
          </div>
          <div className='pb-2 text-bold text-xl '>
            {detailWeaponsTexts[language].reloadTimeSeconds.title}: {weapon.weaponStats?.reloadTimeSeconds}
          </div>
          <div className='pb-2 text-bold text-xl'>
            {detailWeaponsTexts[language].firstBulletAccuracy.title}: {weapon.weaponStats?.firstBulletAccuracy}
          </div>
          <div className='pb-2 text-bold text-xl '>
            {detailWeaponsTexts[language].wallPenetration.title}: {weapon.weaponStats?.wallPenetration.split("::")[1]}
          </div>
        </div>
        {/* Segundo div para skins */}
        <div className='w-full col-span-2 flex flex-col items-center justify-center col-span-1 xl:col-span-2'>
          <h1 className='text-xl'>
            Skins
          </h1>
          <div className='max-w-screen-lg overflow-x-hidden w-[320px] sm:w-[550px] md:w-[700px] carouselskinks'>
            <CarouselSkins skins={weapon.skins} />
          </div>
        </div>
      </div>
    </div>
  )
}
