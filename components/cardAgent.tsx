import { Agent } from '@/types/agent'
import { Button, Card, CardFooter, Image } from '@nextui-org/react'
import React, { FC } from 'react'
import { title } from './primitives'

interface Props {
    agent: Agent;
    handleSelectedCard: (agent: Agent) => void;
}

export const CardAgent:FC<Props> = ({agent, handleSelectedCard}) => {
  const {displayName, bustPortrait, backgroundGradientColors, description} = agent;
  return (
    <Card
      isFooterBlurred
      radius="none"
      shadow='none'
      isPressable
      onPress={() => handleSelectedCard(agent)}
      className="border-none max-w-[300px] overflow-x-hidden flex justify-center items-center bg-transparent"
    >
      <Image
        isZoomed
        alt="Woman listing to music"
        className="max-w-[500px]"
        src={bustPortrait ? bustPortrait : ""}
      />
      <CardFooter className="flex justify-center items-center before:bg-white/10 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10 backdrop-blur-lg">
            <h1 className='text-4xl' style={{ fontFamily: "ValorantFont", color: `#${backgroundGradientColors[0]}`}}>{displayName}</h1>
      </CardFooter>
    </Card>
  )
}
