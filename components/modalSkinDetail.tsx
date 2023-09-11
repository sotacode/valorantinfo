import React from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Tabs, Tab } from "@nextui-org/react";
import { FC } from 'react';
import { Skin } from "@/types/weapons";
import { CarouselChromas } from "./CarouselChromas";
import { CarouselLevels } from "./CarouselLevels";


interface ModalSkinDetailProps {
    skin: Skin;
    isOpen: boolean;
    onOpen: () => void;
    onOpenChange: () => void;
}

export const ModalSkinDetail: FC<ModalSkinDetailProps> = ({ skin, isOpen, onOpen, onOpenChange }) => {

    return (
        <Modal size="full" isOpen={isOpen} onOpenChange={onOpenChange} isDismissable={false} className="max-w-screen-2xl">
            <ModalContent className="items-center">
                {(onClose) => (
                    <>
                        <ModalHeader className="flex flex-col gap-1 text-bold text-3xl">{skin.displayName}</ModalHeader>
                        <ModalBody className="w-full max-w-screen-xl items-center">
                            <Tabs key="light" variant="light" size="lg" color="secondary" aria-label="Tabs variants">
                                { skin.chromas.length > 0 && <Tab key="photos" title="Chromas">
                                    <CarouselChromas chromas={skin.chromas}/>
                                </Tab>}
                                { skin.levels.length > 1 && <Tab key="music" title="Levels">
                                    <CarouselLevels levels={skin.levels}/>
                                </Tab>}
                            </Tabs>
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