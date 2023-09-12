import { LanguageContext } from '@/context/language/LanguageContext';
import { Card as CardType } from '@/types/cards';
import { insertCharAtIndex } from '@/utils/common';
import { Card, CardBody, CardFooter, Image } from '@nextui-org/react';
import React, { useContext, useEffect, useState } from 'react'

export default function Cards() {
  const { language } = useContext(LanguageContext);
  const [cards, setCards] = useState<CardType[]>([]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const languageFormated = insertCharAtIndex(language, "-", 2);
        const response = await fetch(`https://valorant-api.com/v1/playercards?language=${languageFormated}`);
        if (!response.ok) {
          throw new Error('No se pudo obtener la información');
        }
        const data = await response.json();
        setCards(data.data);

      } catch (error) {
        console.error('Error al obtener datos:', error);
      }
    };

    fetchData();
  }, [language]);
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 max-w-screen-2xl">
      <div className="gap-2 grid grid-cols-2 sm:grid-cols-4 xl:grid-cols-5">
        {cards.map((card, index) => (
          <Card shadow="sm" key={index} className='m-4'>
            <CardBody className="overflow-visible p-0">
              <div className='gap-2 grid grid-cols-1 lg:grid-cols-2'>
                <div>
                  <Image
                    shadow="sm"
                    radius="lg"
                    width="100%"
                    alt={card.displayName}
                    className="w-full object-cover"
                    src={card.largeArt}
                  />

                </div>
                <div className='flex flex-col'>
                  <Image
                    shadow="sm"
                    radius="lg"
                    width="100%"
                    alt={card.displayName}
                    className="w-full object-cover"
                    src={card.wideArt}
                  />
                  <Image
                    shadow="sm"
                    radius="lg"
                    width="100%"
                    alt={card.displayName}
                    className="w-full object-cover pt-2"
                    src={card.smallArt}
                  />
                  <div className='flex flex-grow items-center justify-center text-center'>
                    <b className='text-bold text-small'>{card.displayName}</b>
                  </div>
                </div>
              </div>
            </CardBody>
          </Card>
        ))}
      </div>
    </section>
  )
}
