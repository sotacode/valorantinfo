import { Agent } from '@/types/agent'
import { Button, Card, CardFooter, Image } from '@nextui-org/react'
import React, { FC } from 'react'
import { title } from './primitives'

interface Props {
    agent: Agent
}


export const CardAgent:FC<Props> = ({agent: {displayName, bustPortrait, backgroundGradientColors, description}}) => {
  return (
    <Card
      isFooterBlurred
      radius="lg"
      className="border-none"
    >
      <Image
        isZoomed
        alt="Woman listing to music"
        className="object-cover"
        src={bustPortrait}
        width={400}
      />
      <CardFooter className="flex justify-center items-center before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10 backdrop-blur-lg">
            <h1 className='text-4xl' style={{ fontFamily: "ValorantFont", color: `#${backgroundGradientColors[0]}`}}>{displayName}</h1>
      </CardFooter>
    </Card>
  )
}
