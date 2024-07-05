import {House} from 'react-bootstrap-icons';
import {Link} from '@inertiajs/react';
import {useLaravelReactI18n} from "laravel-react-i18n";

export default function HomeBtn() {
    const {t} = useLaravelReactI18n();
    return (
        <Link href={route('main')} title={t('Main')} className={'ml-2 fs-5'}>
            <House className={'d-inline'}/>
        </Link>
    );
}
