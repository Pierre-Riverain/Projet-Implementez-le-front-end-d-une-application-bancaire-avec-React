import { Button } from "../Button";
import { Modal } from "../Modal";

export function MessageModal({isOpen, title, onClose, onButtonClick, buttonText, message}) {

    return (
        <Modal isOpen={isOpen} onClose={onClose} title={title}>
            <p>{message}</p>
            <div className="modal-buttons">
                <Button onClick={onButtonClick}>{buttonText ? buttonText : "Ok"}</Button>
            </div>
        </Modal>
    )
}