import React, { ComponentProps, ReactElement } from "react";
import { Modal, Text } from "../../../main";
import "./LanguagesModal.scss";
import { LanguageItem } from "./LanguageItem";

type TLanguagesModalProps = {
    isModalOpen: boolean;
    languages: ComponentProps<typeof LanguageItem>['language'][]
    onClose: () => void;
    onLanguageSwitch: (code: string) => void;
    selectedLanguage: string;
    headerTitle: string | ReactElement;
};

export const DesktopLanguagesModal = ({
    isModalOpen,
    languages,
    onClose,
    onLanguageSwitch,
    selectedLanguage,
    headerTitle,
}: TLanguagesModalProps) => {
    return (
        <Modal
            ariaHideApp={false}
            className="languages-modal"
            isOpen={isModalOpen}
            onRequestClose={onClose}
        >
            <Modal.Header onRequestClose={onClose}>
                <Text weight="bold">{headerTitle}</Text>
            </Modal.Header>
            <Modal.Body className="languages-modal__body">
                {languages.map((language) => {
                    const onButtonClick = () => {
                        onLanguageSwitch(language.code);
                        onClose();
                    };
                    return (
                        <LanguageItem
                            language={language}
                            selectedLanguage={selectedLanguage}
                            key={language.code}
                            onButtonClick={onButtonClick}
                        />
                    );
                })}
            </Modal.Body>
        </Modal>
    );
};
DesktopLanguagesModal.displayName = "DesktopLanguagesModal";
