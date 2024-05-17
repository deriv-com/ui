import React, { ReactElement } from "react";
import { Modal, Text } from "../../../main";
import "./LanguagesModal.scss";
import { IconTypes } from "@deriv/quill-icons";
import { LanguageItem } from "./LanguageItem";

type TLanguagesModalProps = {
    isModalOpen: boolean;
    languages: {
        code: string;
        display_name: string | ReactElement;
        icon: IconTypes;
    }[];
    onClose: () => void;
    onLanguageSwitch: (code: string) => void;
    currentLang: string;
    headerTitle: string | ReactElement;
};

export const DesktopLanguagesModal = ({
    isModalOpen,
    languages,
    onClose,
    onLanguageSwitch,
    currentLang,
    headerTitle,
}: TLanguagesModalProps) => {
    return (
        <Modal
            ariaHideApp={false}
            className="languages-modal"
            isOpen={isModalOpen}
        >
            <Modal.Header hideBorder onRequestClose={onClose}>
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
                            currentLang={currentLang}
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
