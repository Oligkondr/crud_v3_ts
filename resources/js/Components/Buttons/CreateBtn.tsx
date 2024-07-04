import { PersonPlus } from 'react-bootstrap-icons';
import { Link } from '@inertiajs/react';
import {useLaravelReactI18n} from "laravel-react-i18n";

export default function CreateBtn () {
    const {t} = useLaravelReactI18n();

    return (
        <Link href="/user/create" title={t('Create')} className={'text-success fs-4'}>
            <PersonPlus className={'d-inline'}/>
        </Link>
    );
}
