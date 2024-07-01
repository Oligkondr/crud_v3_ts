import { Trash3 } from 'react-bootstrap-icons';
import { Link, router } from '@inertiajs/react';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import {useLaravelReactI18n} from "laravel-react-i18n";

interface DestroyBtnProps {
    id: number
}

export default function DestroyBtn ({ id }: DestroyBtnProps) {

    const {t, tChoice, currentLocale, setLocale, getLocales, loading, isLocale} = useLaravelReactI18n();

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = (e: any) => {
        e.preventDefault();
        setShow(true);
    };

    const handleDestroy = () => {
        router.delete(`/user/${id}`);
        handleClose();
    };

    return (
        <>
            <Link href="#" onClick={handleShow} title={t('Delete')} className={'text-danger ml-2 fs-5'}>
                <Trash3 className={'d-inline'}/>
            </Link>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{t('Attention!')}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{t('The user will be deleted permanently!')}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        {t('Cancel')}
                    </Button>
                    <Button variant="danger" onClick={handleDestroy}>
                        {t('Delete')}
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
