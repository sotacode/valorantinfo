import React, { useContext, useEffect, useState } from "react";
import { LanguageContext } from "@/context/language/LanguageContext";
import { insertCharAtIndex } from "@/utils/common";
import { Map } from "@/types/maps";
import { Card, CardBody, CardFooter, Divider, Image, useDisclosure } from "@nextui-org/react";
import { ModalDetailMap } from "./modalDetailMap";

export default function GridMaps() {
    const { language } = useContext(LanguageContext);
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [competitiveMaps, setCompetitiveMaps] = useState<Map[]>([]);
    const [otherMaps, setOtherMaps] = useState<Map[]>([]);
    const [selectedMap, setSelectedMap] = useState<Map | undefined>();

    const handleSelectedCard = (map: any) => {
        setSelectedMap(map);
        onOpen();
    }


    useEffect(() => {
        const fetchData = async () => {
            try {
                const languageFormated = insertCharAtIndex(language, "-", 2);
                const response = await fetch(`https://valorant-api.com/v1/maps?language=${languageFormated}`);
                if (!response.ok) {
                    throw new Error('No se pudo obtener la información');
                }
                const data = await response.json();
                console.log(data)
                const competitive_maps = data.data.filter((item: Map) => item.narrativeDescription !== null);
                const other_maps = data.data.filter((item: Map) => item.narrativeDescription === null);
                setCompetitiveMaps(competitive_maps);
                setOtherMaps(other_maps)
            } catch (error) {
                console.error('Error al obtener datos:', error);
            }
        };

        fetchData();
    }, [language]);

    return (
        <>
            <h1 className="w-full text-center text-4xl text-bold mb-10">Competitive Maps</h1>
            <div className="gap-4 grid grid-cols-1 lg:grid-cols-2">
                {competitiveMaps.map((item, index) => (
                    <Card shadow="sm" key={index} isPressable onPress={() => handleSelectedCard(item)}>
                        <CardBody className="overflow-visible p-0">
                            <Image
                                shadow="sm"
                                radius="lg"
                                width="100%"
                                alt={item.displayName}
                                className="w-full object-cover max-h-[350px]"
                                src={item.splash}
                            />
                        </CardBody>
                        <CardFooter className="justify-center">
                            <b className="text-bold text-2xl">{item.displayName}</b>
                            {/* <p className="text-default-500">{item.tacticalDescription}</p> */}
                        </CardFooter>
                    </Card>
                ))}
            </div>

            <Divider className="my-10"/>

            <h1 className="w-full text-center text-4xl text-bold my-10">Other Maps</h1>
            <div className="gap-4 grid grid-cols-1 lg:grid-cols-2">
                {otherMaps.map((item, index) => (
                    <Card shadow="sm" key={index} isPressable onPress={() => handleSelectedCard(item)}>
                        <CardBody className="overflow-visible p-0">
                            <Image
                                shadow="sm"
                                radius="lg"
                                width="100%"
                                alt={item.displayName}
                                className="w-full object-cover max-h-[350px]"
                                src={item.splash}
                            />
                        </CardBody>
                        <CardFooter className="text-small justify-between">
                            <b>{item.displayName}</b>
                            {/* <p className="text-default-500">{item.tacticalDescription}</p> */}
                        </CardFooter>
                    </Card>
                ))}
            </div>
            { selectedMap && <ModalDetailMap map={selectedMap} isOpen={isOpen} onOpen={onOpen} onOpenChange={onOpenChange} />}
        </>
    );
}