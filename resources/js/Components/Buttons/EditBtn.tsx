import {PencilSquare} from 'react-bootstrap-icons';
import {Link} from '@inertiajs/react';
import {useLaravelReactI18n} from "laravel-react-i18n";

interface EditBtnProps {
    id: number
}

export default function EditBtn({id}: EditBtnProps) {
    const {t} = useLaravelReactI18n();

    return (
        <Link href={route('user.edit', [id])} title={t('Edit')} className={'text-primary ml-2 fs-5'}>
            <PencilSquare className={'d-inline'}/>
        </Link>
    );
}
