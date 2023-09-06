import { DetailWeapon } from "@/components/detailWeapon";
import { LanguageContext } from "@/context/language/LanguageContext"
import { Weapon, Weapons } from "@/types/weapons"
import { insertCharAtIndex } from "@/utils/common";
import { Card, Image } from "@nextui-org/react";
import { useContext, useEffect, useState } from "react"


export default function Weapons() {
  const { language } = useContext(LanguageContext);
  const [weapons, setWeapons] = useState<Weapon[] | undefined>();
  const [ selectedWeapon, setSelectedWeapon ] = useState<Weapon | undefined>(undefined);
  const [showDetailWeapon, setshowDetailWeapon] = useState<boolean>(false)


  const handleSelectedWeapon = (weapon: Weapon)=>{
    console.log(weapon)
    setSelectedWeapon(weapon);
    setshowDetailWeapon(true);
  }

  useEffect(() => {
    const fetchData = async () => {
      const languageFormated = insertCharAtIndex(language, "-", 2);
      const response = await fetch(`https://valorant-api.com/v1/weapons?language=${languageFormated}`);
      if (!response.ok) {
        throw new Error('No se pudo obtener la información');
      }
      const data = await response.json();
      setWeapons(data.data);
    }

    fetchData()
  }, [language])

  return (
    <div className="flex flex-col items-center justify-center gap-4 py-4 md:py-10">
      {
        !showDetailWeapon || !selectedWeapon ? 
        <>
        {weapons?.map((weapon) => (
          <div key={weapon.uuid} className="flex items-center justify-center grid grid-cols-6 gap-8">
            <div className="flex items-center justify-center col-span-2">
              <h1 className="text-bold text-3xl col-span-2 " style={{ fontFamily: "ValorantFont" }}>{weapon.displayName}</h1>
            </div>
            <div className="flex items-center justify-center col-span-4">
              <Card 
                isPressable
                className="overflow-visible bg-transparent"
                onPress={()=>{handleSelectedWeapon(weapon)}}
              >
                <Image
                  className="hover:scale-110 col-span-4"
                  src={weapon.displayIcon}
                />
              </Card>
            </div>
  
          </div>
        ))}
        </>
        :
        <>
          <DetailWeapon weapon={selectedWeapon}/>
        </>
      }
    </div>
  )
}
