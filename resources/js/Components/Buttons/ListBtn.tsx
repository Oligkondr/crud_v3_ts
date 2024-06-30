import { People } from 'react-bootstrap-icons';
import { Link } from '@inertiajs/react';

export default function ListBtn () {
    return (
        <Link href="/user" title="Список пользователей" className={'fs-4'}>
            <People className={'d-inline'}/>
        </Link>
    );
}
