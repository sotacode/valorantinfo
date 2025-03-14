import React, { FC, useState, useEffect } from "react";
import {Card, CardBody, Image, Button, Progress, Tooltip} from "@nextui-org/react";
import { Agent } from "@/types/agent";
import { BiPlayCircle, BiPauseCircle } from "react-icons/bi";
import AudioAgent from "./audioAgent";
import { TabsInfoAgent } from "./tabsInfoAgent";
import { BsInfoCircle } from "react-icons/bs";
import { motion } from "framer-motion";

interface Props {
  agent: Agent;
}

export const DetailAgent:FC<Props> =  ({agent: {displayName, bustPortrait, background, description, role, voiceLine, abilities, displayIconSmall}}) => {
  const [urlAudio, setUrlAudio] = useState(voiceLine ? voiceLine.mediaList[0].wave : undefined);
  const [imagesLoaded, setImagesLoaded] = useState({
    portrait: false,
    background: false,
    roleIcon: false
  });

  useEffect(() => {
    setUrlAudio(voiceLine ? voiceLine.mediaList[0].wave : undefined);
  }, [voiceLine]);

  const handleImageLoad = (imageType: keyof typeof imagesLoaded) => {
    setImagesLoaded(prev => ({
      ...prev,
      [imageType]: true
    }));
  };

  const LoadingPlaceholder = () => (
    <div className="animate-pulse bg-violet-500/20 w-full h-full absolute inset-0" />
  );

  return (
    <div className="border-none bg-background/60 dark:bg-default-100/50 max-w-[1000px]">
      <div>
        <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center">
          <div className="relative col-span-6 md:col-span-6">
            {!imagesLoaded.portrait && <LoadingPlaceholder />}
            <Image
              alt="Album cover"
              className="object-cover absolute inset-0 z-20"
              height={500}
              shadow="md"
              src={bustPortrait ? bustPortrait : ""}
              width="100%"
              onLoad={() => handleImageLoad('portrait')}
            />
            {!imagesLoaded.background && <LoadingPlaceholder />}
            <Image
              alt="Album cover"
              className="object-cover"
              height={500}
              shadow="md"
              src={background ? background : ""}
              width="100%"
              onLoad={() => handleImageLoad('background')}
            />
          </div>

          <div className="flex flex-col col-span-6 md:col-span-6">
            <div className="flex justify-between items-start">
              <div className="flex flex-col gap-0">
                <div className="flex items-center">
                  <div className="relative w-[20px] h-[20px]">
                    {!imagesLoaded.roleIcon && <LoadingPlaceholder />}
                    <Image 
                      alt="Album cover"
                      className="object-cover"
                      height={20}
                      shadow="md"
                      src={role?.displayIcon ? role?.displayIcon : ""}
                      width={20}
                      onLoad={() => handleImageLoad('roleIcon')}
                    />
                  </div>
                  <h3 className="text-md font-medium ml-3">{role?.displayName}</h3>
                  <div>
                    <Tooltip 
                      showArrow
                      placement="top-end"
                      content={role?.description ? role?.description : ""}
                      classNames={{
                        base: "py-2 px-4 max-w-[500px]",
                      }}
                    >
                      <Button isIconOnly variant="light">
                        <BsInfoCircle className="text-md"/>
                      </Button>
                    </Tooltip>
                  </div>
                </div>
                <h1 className="text-6xl font-semibold text-foreground/90">{displayName}</h1>
                <TabsInfoAgent description={description} abilities={abilities} displayIconSmall={displayIconSmall}/>
              </div>
            </div>
            
            <AudioAgent initialAudioUrl={urlAudio} />
          </div>
        </div>
      </div>
    </div>
  );
}