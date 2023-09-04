import React, { FC } from "react";
import {Card, CardBody, Image, Button, Progress} from "@nextui-org/react";
import { Agent } from "@/types/agent";
interface Props {
  agent: Agent;
}
export const DetailAgent:FC<Props> =  ({agent: {displayName, bustPortrait, background, description, role}}) => {
  const [liked, setLiked] = React.useState(false);

  return (
    <div
      className="border-none bg-background/60 dark:bg-default-100/50 max-w-[1000px]"
    >
      <div>
        <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center">
          <div className="relative col-span-6 md:col-span-6">
            <Image
              alt="Album cover"
              className="object-cover absolute inset-0 z-20"
              height={500}
              shadow="md"
              src={bustPortrait}
              width="100%"
            />
          <Image
              alt="Album cover"
              className="object-cover"
              height={500}
              shadow="md"
              src={background}
              width="100%"
            />
          </div>

          <div className="flex flex-col col-span-6 md:col-span-6">
            <div className="flex justify-between items-start">
              <div className="flex flex-col gap-0">
                <h3 className="font-semibold text-foreground/90">{displayName}</h3>
                <p className="text-small text-foreground/80">{description}</p>
                <h1 className="text-large font-medium mt-2">{role?.displayName}</h1>
              </div>
              <Button
                isIconOnly
                className="text-default-900/60 data-[hover]:bg-foreground/10 -translate-y-2 translate-x-2"
                radius="full"
                variant="light"
                onPress={() => setLiked((v) => !v)}
              >
              </Button>
            </div>

            <div className="flex flex-col mt-3 gap-1">
              <Progress
                aria-label="Music progress"
                classNames={{
                  indicator: "bg-default-800 dark:bg-white",
                  track: "bg-default-500/30",
                }}
                color="default"
                size="sm"
                value={33}
              />
              <div className="flex justify-between">
                <p className="text-small">1:23</p>
                <p className="text-small text-foreground/50">4:32</p>
              </div>
            </div>

            <div className="flex w-full items-center justify-center">
              <Button
                isIconOnly
                className="data-[hover]:bg-foreground/10"
                radius="full"
                variant="light"
              >
              </Button>
              <Button
                isIconOnly
                className="data-[hover]:bg-foreground/10"
                radius="full"
                variant="light"
              >
              </Button>
              <Button
                isIconOnly
                className="w-auto h-auto data-[hover]:bg-foreground/10"
                radius="full"
                variant="light"
              >
              </Button>
              <Button
                isIconOnly
                className="data-[hover]:bg-foreground/10"
                radius="full"
                variant="light"
              >
              </Button>
              <Button
                isIconOnly
                className="data-[hover]:bg-foreground/10"
                radius="full"
                variant="light"
              >
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}