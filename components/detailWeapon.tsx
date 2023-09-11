import { Weapon } from '@/types/weapons';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import React, { FC } from 'react'
import { useContext } from 'react';
import { LanguageContext } from '@/context/language/LanguageContext';
import { weaponsINFO } from '@/config/weapons';
import { CarouselSkins } from './carouselSkins';
import { Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from '@nextui-org/react';


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
          <Table removeWrapper aria-label="Example static collection table">
            <TableHeader>
              <TableColumn>{detailWeaponsTexts[language].columnatribute.title}</TableColumn>
              <TableColumn>{detailWeaponsTexts[language].columnvalue.title}</TableColumn>
              <TableColumn>{detailWeaponsTexts[language].columnunit.title}</TableColumn>
            </TableHeader>

            <TableBody>
              <TableRow key="1">
                <TableCell>{detailWeaponsTexts[language].displayName.title}</TableCell>
                <TableCell>{weapon.displayName}</TableCell>
                <TableCell>-</TableCell>
              </TableRow>
              <TableRow key="2">
                <TableCell>{detailWeaponsTexts[language].category.title}</TableCell>
                <TableCell>{weapon.shopData?.categoryText}</TableCell>
                <TableCell>-</TableCell>
              </TableRow>
              <TableRow key="3">
                <TableCell>{detailWeaponsTexts[language].cost.title}</TableCell>
                <TableCell>{weapon.shopData?.cost}</TableCell>
                <TableCell>-</TableCell>
              </TableRow>
              <TableRow key="4">
                <TableCell>{detailWeaponsTexts[language].fireRate.title}</TableCell>
                <TableCell>{weapon.weaponStats?.fireRate}</TableCell>
                <TableCell>bullet/seg</TableCell>
              </TableRow>
              <TableRow key="5">
                <TableCell>{detailWeaponsTexts[language].magazineSize.title}</TableCell>
                <TableCell>{weapon.weaponStats?.magazineSize}</TableCell>
                <TableCell>a</TableCell>
              </TableRow>
              <TableRow key="6">
                <TableCell>{detailWeaponsTexts[language].equipTimeSeconds.title}</TableCell>
                <TableCell>{weapon.weaponStats?.equipTimeSeconds}</TableCell>
                <TableCell>sec</TableCell>
              </TableRow>
              <TableRow key="7">
                <TableCell>{detailWeaponsTexts[language].reloadTimeSeconds.title}</TableCell>
                <TableCell>{weapon.weaponStats?.reloadTimeSeconds}</TableCell>
                <TableCell>sec</TableCell>
              </TableRow>
              <TableRow key="8">
                <TableCell>{detailWeaponsTexts[language].firstBulletAccuracy.title}</TableCell>
                <TableCell>{weapon.weaponStats?.firstBulletAccuracy}</TableCell>
                <TableCell>%</TableCell>
              </TableRow>
              <TableRow key="9">
                <TableCell>{detailWeaponsTexts[language].wallPenetration.title}</TableCell>
                <TableCell>{weapon.weaponStats?.wallPenetration.split("::")[1]}</TableCell>
                <TableCell>-</TableCell>
              </TableRow>

            </TableBody>
          </Table>
        </div>
        {/* Segundo div para skins */}
        <div className='w-full col-span-2 flex flex-col items-center justify-center col-span-1 xl:col-span-2'>
          <h1 className='text-xl'>
            {detailWeaponsTexts[language].titleSkin.title}
          </h1>
          <div className='max-w-screen-lg overflow-x-hidden w-[320px] sm:w-[550px] md:w-[700px] carouselskinks'>
            <CarouselSkins skins={weapon.skins} />
          </div>
        </div>
      </div>
    </div>
  )
}
