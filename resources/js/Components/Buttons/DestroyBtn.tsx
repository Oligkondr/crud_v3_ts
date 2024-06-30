import { Trash3 } from 'react-bootstrap-icons';
import { Link, router } from '@inertiajs/react';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';

export default function DestroyBtn ({ id }) {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = (e) => {
        e.preventDefault();
        setShow(true);
    };

    const handleDestroy = () => {
        router.delete(`/user/${id}`);
        handleClose();
    };

    return (
        <>
            <Link onClick={handleShow} title="Удалить" className={'text-danger ml-2 fs-5'}>
                <Trash3 className={'d-inline'}/>
            </Link>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Внимание!</Modal.Title>
                </Modal.Header>
                <Modal.Body>Пользователь будет удален безвозвратно!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Отменить
                    </Button>
                    <Button variant="danger" onClick={handleDestroy}>
                        Удалить
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
