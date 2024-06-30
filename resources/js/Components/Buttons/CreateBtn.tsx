import { PersonPlus } from 'react-bootstrap-icons';
import { Link } from '@inertiajs/react';

export default function CreateBtn () {
    return (
        <Link href="/user/create" title="Создать пользователя" className={'text-success fs-4'}>
            <PersonPlus className={'d-inline'}/>
        </Link>
    );
}
