import React, { useContext } from "react";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import ModalsContext from "../../../../../domain/providers/modal/ModalsContext";
import ModalsContextType from "../../../../../domain/providers/modal/ModalsContextType";
import ModalCustomComponentProps from "./ModalCustomComponentProps";

const ModalCustomComponent: React.FC<ModalCustomComponentProps> = () => {
    const { isOpenModalCustom, closeModalCustom, customModal } = useContext(ModalsContext) as ModalsContextType;

    if (customModal === undefined) return <></>

    return <div className="modal_rerffers_component">
        <Modal centered size={customModal.size ?? 'lg'} isOpen={isOpenModalCustom} toggle={() => closeModalCustom()} >
            <ModalHeader toggle={() => closeModalCustom()}>{customModal.title}</ModalHeader>
            <ModalBody>
                <div className="">
                    {customModal.content}
                </div>
            </ModalBody>
        </Modal>
    </div>
}

ModalCustomComponent.defaultProps = {
    title: ''
}

export default ModalCustomComponent;