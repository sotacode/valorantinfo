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
            <div className="gap-4 grid grid-cols-1 lg:grid-cols-2">
                {otherMaps.map((item, index) => (
                    <Card shadow="sm" key={index} isPressable onPress={() => handleSelectedCard(item)}>
                        <CardBody className="overflow-visible p-0 relative">
                            <div className="absolute inset-0 bg-violet-500/20 animate-pulse" />
                            <Image
                                shadow="sm"
                                radius="lg"
                                width="100%"
                                alt={item.displayName}
                                className="w-full object-cover max-h-[350px] opacity-0 transition-opacity duration-300"
                                src={item.splash}
                                onLoad={(e) => {
                                    const target = e.target as HTMLImageElement;
                                    target.classList.remove('opacity-0');
                                    target.classList.add('opacity-100');
                                    target.previousElementSibling?.remove();
                                }}
                            />
                        </CardBody>
                        <CardFooter className="text-small justify-between">
                            <b>{item.displayName}</b>
                        </CardFooter>
                    </Card>
                ))}
            </div>
            { selectedMap && <ModalDetailMap map={selectedMap} isOpen={isOpen} onOpen={onOpen} onOpenChange={onOpenChange} />}
        </>
    );
}