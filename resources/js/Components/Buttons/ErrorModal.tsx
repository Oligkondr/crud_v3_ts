import { Modal } from 'react-bootstrap';

export default function ErrorModal ({errors, show, handleClose}) {
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Ошибки</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {errors.map(error => <p>{error}</p>)}
            </Modal.Body>
        </Modal>
    );
}
