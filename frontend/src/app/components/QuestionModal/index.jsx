import { Modal } from "../Modal";
import { Button } from "../Button";

export function QuestionModal({ isOpen, title, onClose, onConfirmButtonClick, confirmButtonText, onRejectButtonClick, rejectButtonText, message }) {
    return (
        <Modal isOpen={isOpen} onClose={onClose} title={title}>
                <p>{message}</p>
                <div className="modal-buttons">
                    <Button onClick={onConfirmButtonClick}>{confirmButtonText ? confirmButtonText : "Yes"}</Button>
                    <Button onClick={onRejectButtonClick}>{rejectButtonText ? rejectButtonText : "No"}</Button>
                </div>
        </Modal>
    )
}