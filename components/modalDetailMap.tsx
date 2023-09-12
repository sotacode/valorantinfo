import React from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Tabs, Tab } from "@nextui-org/react";
import { FC } from 'react';
import { CarouselChromas } from "./CarouselChromas";
import { CarouselLevels } from "./CarouselLevels";
import { Map } from "@/types/maps";
import SitesMap from "./sitesMaps";


interface ModalDetailMapProps {
    map: Map;
    isOpen: boolean;
    onOpen: () => void;
    onOpenChange: () => void;
}

export const ModalDetailMap: FC<ModalDetailMapProps> = ({ map, isOpen, onOpen, onOpenChange }) => {

    return (
        <Modal size="full" scrollBehavior="inside" isOpen={isOpen} onOpenChange={onOpenChange} isDismissable={false} className="max-w-screen-2xl">
            <ModalContent className="items-center">
                {(onClose) => (
                    <>
                        <ModalHeader className="flex flex-col gap-1 text-bold text-3xl">{map.displayName}</ModalHeader>
                        <ModalBody className="w-full max-w-screen-xl items-center">
                            <SitesMap map={map}/>
                        </ModalBody>
                        <ModalFooter>
                            <Button color="secondary" onPress={onClose}>
                                Close
                            </Button>
                        </ModalFooter>
                    </>
                )}
            </ModalContent>
        </Modal>
    );
}