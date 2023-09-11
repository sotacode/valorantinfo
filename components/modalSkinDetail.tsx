import React from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Tabs, Tab } from "@nextui-org/react";
import { FC } from 'react';
import { Skin } from "@/types/weapons";


interface ModalSkinDetailProps {
    skin: Skin;
    isOpen: boolean;
    onOpen: () => void;
    onOpenChange: () => void;
}

export const ModalSkinDetail: FC<ModalSkinDetailProps> = ({ skin, isOpen, onOpen, onOpenChange }) => {

    return (
        <Modal size="full" isOpen={isOpen} onOpenChange={onOpenChange} isDismissable={false}>
            <ModalContent className="items-center">
                {(onClose) => (
                    <>
                        <ModalHeader className="flex flex-col gap-1 text-bold text-3xl">{skin.displayName}</ModalHeader>
                        <ModalBody>
                            <Tabs key="light" variant="light" aria-label="Tabs variants">
                                <Tab key="photos" title="Photos">
                                    photos here
                                </Tab>
                                <Tab key="music" title="Music">
                                    music here
                                </Tab>
                                <Tab key="videos" title="Videos">
                                    videos here
                                </Tab>
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