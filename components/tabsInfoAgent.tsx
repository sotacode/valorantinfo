import { useState } from "react";
import { Ability } from "@/types/agent";
import { Tabs, Tab, Chip, Image } from "@nextui-org/react";


interface InfoAgentProps {
    description: string;
    abilities: Ability[];
    displayIconSmall: string;
}

export const TabsInfoAgent: React.FC<InfoAgentProps> = ({ description, abilities, displayIconSmall }) => {
    const [selected, setSelected] = useState<any>("description");

    return (
        <div className="flex w-full flex-col mt-4">
            <Tabs
                aria-label="Options"
                color="primary"
                variant="underlined"
                classNames={{
                    tabList: "gap-6 w-full relative rounded-none p-0 border-b border-divider",
                    cursor: "w-full bg-[#b249f8]",
                    tab: "max-w-fit px-0 h-24",
                    tabContent: "group-data-[selected=true]:text-[#b249f8]"
                }}
            >
                <Tab
                    key="description"
                    title={
                        <div className="flex flex-col justify-center items-center min-w-[50px] min-h-[50px] justify-center">
                            <h1 className="text-lg font-bold text-foreground/90 opacity-0">a</h1>
                            <Image
                                alt="Album cover"
                                className="max-w-[100px]"
                                shadow="md"
                                src={displayIconSmall ? displayIconSmall : ""}
                                width={40}
                            />
                        </div>
                    }
                >
                    <div className="min-h-[250px]">
                        <h3 className="text-lg font-medium ml-2">Description</h3>
                        <p className="text-md font-thin ml-3 mt-2">{description}</p>
                    </div>

                </Tab>
                <Tab
                    key="q"
                    title={
                        <div className="flex flex-col justify-center items-center min-w-[50px] min-h-[50px] justify-center">
                            <h1 className="text-lg font-bold text-foreground/90">Q</h1>
                            <Image
                                alt="Album cover"
                                className="max-w-[100px]"
                                shadow="md"
                                src={abilities[0]?.displayIcon ? abilities[0]?.displayIcon : ""}
                                width={40}
                            />
                        </div>
                    }
                >
                    <div className="min-h-[250px]">
                        <h3 className="text-lg font-medium ml-2">{abilities[0]?.displayName}</h3>
                        <p className="text-md font-thin ml-3 mt-2">{abilities[0]?.description}</p>
                    </div>
                </Tab>
                <Tab
                    key="w"
                    title={
                        <div className="flex flex-col justify-center items-center min-w-[50px] min-h-[50px] justify-center">
                            <h1 className="text-lg font-bold text-foreground/90">W</h1>
                            <Image
                                alt="Album cover"
                                className="max-w-[100px]"
                                shadow="md"
                                src={abilities[1]?.displayIcon ? abilities[1]?.displayIcon : ""}
                                width={40}
                            />
                        </div>
                    }
                >
                    <div className="min-h-[250px]">
                        <h3 className="text-lg font-medium ml-2">{abilities[1]?.displayName}</h3>
                        <p className="text-md font-thin ml-3 mt-2">{abilities[1]?.description}</p>
                    </div>
                </Tab>
                <Tab
                    key="e"
                    title={
                        <div className="flex flex-col justify-center items-center min-w-[50px] min-h-[50px] justify-center">
                            <h1 className="text-lg font-bold text-foreground/90">E</h1>
                            <Image
                                alt="Album cover"
                                className="max-w-[100px]"
                                shadow="md"
                                src={abilities[2]?.displayIcon ? abilities[2]?.displayIcon : ""}
                                width={40}
                            />
                        </div>
                    }
                >
                    <div className="min-h-[250px]">
                        <h3 className="text-lg font-medium ml-2">{abilities[2]?.displayName}</h3>
                        <p className="text-md font-thin ml-3 mt-2">{abilities[2]?.description}</p>
                    </div>
                </Tab>
                <Tab
                    key="r"
                    title={
                        <div className="flex flex-col justify-center items-center min-w-[50px] min-h-[50px] justify-center">
                            <h1 className="text-lg font-bold text-foreground/90">R</h1>
                            <Image
                                alt="Album cover"
                                className="max-w-[100px]"
                                shadow="md"
                                src={abilities[3]?.displayIcon ? abilities[3]?.displayIcon : ""}
                                width={40}
                            />
                        </div>
                    }
                >
                    <div className="min-h-[250px]">
                        <h3 className="text-lg font-medium ml-2">{abilities[3]?.displayName}</h3>
                        <p className="text-md font-thin ml-3 mt-2">{abilities[3]?.description}</p>
                    </div>
                </Tab>
            </Tabs>
        </div>
    );
}