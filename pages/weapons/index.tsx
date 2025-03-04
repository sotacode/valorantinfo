import { CardWeapon } from "@/components/CardWeapon";
import { DetailWeapon } from "@/components/detailWeapon";
import { WeaponMarquee } from "@/components/weaponMarquee";
import { WeaponsPriorityProps, weaponsINFO } from "@/config/weapons";
import { LanguageContext } from "@/context/language/LanguageContext"
import { Weapon } from "@/types/weapons"
import { insertCharAtIndex } from "@/utils/common";
import { Card, Image } from "@nextui-org/react";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import { Suspense, useContext, useEffect, useState } from "react"
import { PiArrowFatLeftFill } from "react-icons/pi";




export default function WeaponsPage() {
  const { weaponsPriority } = weaponsINFO;
  const { language } = useContext(LanguageContext);
  const [weapons, setWeapons] = useState<Weapon[] | undefined>();
  const [selectedWeapon, setSelectedWeapon] = useState<Weapon | undefined>(undefined);
  const [showDetailWeapon, setshowDetailWeapon] = useState<boolean>(false);

  const sortWeapons = (weaponsToSort: Weapon[]) => {
    weaponsToSort.sort((weaponA, weaponB) => {
      const itemA = weaponsPriority.find((item: WeaponsPriorityProps) => item.uuid === weaponA.uuid)?.priority || 0;
      const itemB = weaponsPriority.find((item: WeaponsPriorityProps) => item.uuid === weaponB.uuid)?.priority || 0;
      return itemA - itemB;
    });
  }


  const handleSelectedWeapon = (weapon: Weapon) => {
    setSelectedWeapon(weapon);
    setshowDetailWeapon(true);
  }

  const handleBackToWeapons = () => {
    setshowDetailWeapon(true);
    setSelectedWeapon(undefined);
  }

  const [filterMelee, setFilterMelee] = useState<Weapon[] | undefined>(undefined);
  const [filterHeavy, setFilterHeavy] = useState<Weapon[] | undefined>(undefined);
  const [filterRifle, setFilterRifle] = useState<Weapon[] | undefined>(undefined);
  const [filterShotgun, setFilterShotgun] = useState<Weapon[] | undefined>(undefined);
  const [filterSidearm, setFilterSidearm] = useState<Weapon[] | undefined>(undefined);
  const [filterSniper, setFilterSniper] = useState<Weapon[] | undefined>(undefined);
  const [filterSMG, setFilterSMG] = useState<Weapon[] | undefined>(undefined);

  useEffect(() => {
    const fetchData = async () => {
      const languageFormated = insertCharAtIndex(language, "-", 2);
      const response = await fetch(`https://valorant-api.com/v1/weapons?language=${languageFormated}`);
      if (!response.ok) {
        throw new Error('No se pudo obtener la información');
      }
      const data = await response.json();
      let melee: Weapon[] = [];
      let heavy: Weapon[] = [];
      let rifle: Weapon[] = [];
      let shotgun: Weapon[] = [];
      let sidearm: Weapon[] = [];
      let sniper: Weapon[] = [];
      let smg: Weapon[] = [];

      data.data.map((weapon: Weapon) => {
        const type: string = weapon.category.split("::")[1];
        switch (type) {
          case "Melee":
            melee.push(weapon)
            break;
          case "Heavy":
            heavy.push(weapon)
            break;
          case "Rifle":
            rifle.push(weapon)
            break;
          case "Shotgun":
            shotgun.push(weapon)
            break;
          case "Sidearm":
            sidearm.push(weapon)
            break;
          case "Sniper":
            sniper.push(weapon)
            break;
          case "SMG":
            smg.push(weapon)
            break;
          default:
            break;
        }
      })
      sortWeapons(melee);
      sortWeapons(heavy);
      sortWeapons(rifle);
      sortWeapons(shotgun);
      sortWeapons(sidearm);
      sortWeapons(sniper);
      sortWeapons(smg);
      setFilterMelee(melee);
      setFilterHeavy(heavy);
      setFilterRifle(rifle);
      setFilterShotgun(shotgun);
      setFilterSidearm(sidearm);
      setFilterSniper(sniper);
      setFilterSMG(smg);

      setWeapons(data.data);

      if(selectedWeapon){
        const weapon = data.data.find((weapon: Weapon) => weapon.uuid == selectedWeapon.uuid);
        setSelectedWeapon(weapon);
      }
    }

    fetchData()
  }, [language])

  return (
    <div className="max-w-screen-xl">
      {
        !showDetailWeapon || !selectedWeapon ?
          <div className="flex flex-col items-center justify-center gap-3">
            <AnimatePresence mode="wait">
              <Suspense fallback={
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex items-center justify-center h-[500px]"
                >
                  <motion.svg 
                    className="animate-spin h-32 w-32" 
                    viewBox="0 0 24 24"
                  >
                    <circle 
                      className="opacity-25" 
                      cx="12" 
                      cy="12" 
                      r="10" 
                      stroke="currentColor" 
                      strokeWidth="4"
                      fill="none"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </motion.svg>
                </motion.div>
              }>
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="flex grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4"
                >
                  <div className="col-span-1 p-3">
                    <div className=" p-2">
                      {
                        filterSidearm?.map((weapon: Weapon) => {
                          return <div key={weapon.uuid}>
                            <CardWeapon weapon={weapon} handleSelectedWeapon={handleSelectedWeapon} />
                          </div>
                        })
                      }
                    </div>
                  </div>

                  <div className="col-span-1 p-3">
                    <div className="p-2">
                      <div className=" my-3">
                        {
                          filterSMG?.map((weapon: Weapon) => {
                            return <div key={weapon.uuid}>
                              <CardWeapon weapon={weapon} handleSelectedWeapon={handleSelectedWeapon} />
                            </div>
                          })
                        }
                      </div>
                      <div className=" my-3">
                        {
                          filterShotgun?.map((weapon: Weapon) => {
                            return <div key={weapon.uuid}>
                              <CardWeapon weapon={weapon} handleSelectedWeapon={handleSelectedWeapon} />
                            </div>
                          })
                        }
                      </div>
                    </div>
                  </div>
                  <div className="col-span-1 p-3">
                    <div className="p-2">
                      <div className="my-3">
                        {
                          filterRifle?.map((weapon: Weapon) => {
                            return <div key={weapon.uuid}>
                              <CardWeapon weapon={weapon} handleSelectedWeapon={handleSelectedWeapon} />
                            </div>
                          })
                        }
                      </div>
                      <div className="my-3">
                        {
                          filterMelee?.map((weapon: Weapon) => {
                            return <div key={weapon.uuid}>
                              <CardWeapon weapon={weapon} handleSelectedWeapon={handleSelectedWeapon} />
                            </div>
                          })
                        }
                      </div>
                    </div>
                  </div>
                  <div className="col-span-1 p-3">
                    <div className="p-2">
                      <div className="my-3">
                        {
                          filterSniper?.map((weapon: Weapon) => {
                            return <div key={weapon.uuid}>
                              <CardWeapon weapon={weapon} handleSelectedWeapon={handleSelectedWeapon} />
                            </div>
                          })
                        }
                      </div>
                      <div className="my-3">
                        {
                          filterHeavy?.map((weapon: Weapon) => {
                            return <div key={weapon.uuid}>
                              <CardWeapon weapon={weapon} handleSelectedWeapon={handleSelectedWeapon} />
                            </div>
                          })
                        }
                      </div>
                    </div>
                  </div>
                </motion.div>
              </Suspense>
            </AnimatePresence>
          </div>
          :
          <div className="w-full">
            <div className="weaponcarousel w-[300px] max-w-screen-xl mx-auto md:w-[600px] lg:w-[800px] xl:w-[1100px]">
              <WeaponMarquee weapon={selectedWeapon}/>
            </div>
            <div className="w-full flex items-center mt-4">
              <div className='absolute w-[50px] h-[50px]'>
                <PiArrowFatLeftFill onClick={handleBackToWeapons} className='absolute group text-3xl hover:text-4xl z-30 hover:transition-all hover:cursor-pointer' />
              </div>
              <h1 className="mx-auto text-bold text-5xl">{selectedWeapon.displayName}</h1>
            </div>
            <DetailWeapon weapon={selectedWeapon} />
          </div>
      }
    </div>
  )
}
