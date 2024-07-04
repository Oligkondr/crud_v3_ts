import { People } from 'react-bootstrap-icons';
import { Link } from '@inertiajs/react';
import {useLaravelReactI18n} from "laravel-react-i18n";

export default function ListBtn () {
    const {t} = useLaravelReactI18n();

    return (
        <Link href="/user" title={t('User list')} className={'fs-4'}>
            <People className={'d-inline'}/>
        </Link>
    );
}
