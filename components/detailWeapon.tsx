import { Weapon } from '@/types/weapons';
import { Card, CardBody, CardFooter, CardHeader, Divider, Image, Link } from '@nextui-org/react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import React, { FC } from 'react'

export interface DetailWeaponProps {
  weapon: Weapon;
}

export const DetailWeapon: FC<DetailWeaponProps> = ({ weapon }) => {

  return (
    <div className='w-full'>
      <Card className="w-[1200px]">
        <CardHeader className="flex gap-3">
          <Image
            alt="nextui logo"
            height={40}
            radius="sm"
            src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
            width={40}
          />
          <div className="flex flex-col">
            <p className="text-md">Algo</p>
            <p className="text-small text-default-500">wena los k</p>
          </div>
        </CardHeader>
        <Divider />
        <CardBody>
          <p>no me la counter strike</p>
        </CardBody>
        <Divider />
        <CardFooter>
          <Link
            isExternal
            showAnchorIcon
            href="#"
          >
            kkkkkk
          </Link>
        </CardFooter>
      </Card>
    </div>
  )
}
