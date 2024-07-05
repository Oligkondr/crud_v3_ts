import {Person} from 'react-bootstrap-icons';
import {Link} from '@inertiajs/react';
import {useLaravelReactI18n} from "laravel-react-i18n";

interface ShowBtnProps {
    id: number
}

export default function ShowBtn({id}: ShowBtnProps) {
    const {t} = useLaravelReactI18n();
    return (
        <Link href={route('user.show', [id])} title={t('Show')} className={'text-success ml-2 fs-5'}>
            <Person className={'d-inline'}/>
        </Link>
    );
}
