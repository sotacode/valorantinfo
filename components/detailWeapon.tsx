import { Weapon } from '@/types/weapons';
import React, { FC } from 'react'

interface DetailWeaponProps {
    weapon: Weapon;
}

export const DetailWeapon:FC<DetailWeaponProps> = ({weapon}) => {

  return (
    <div>{weapon.displayName}</div>
  )
}
