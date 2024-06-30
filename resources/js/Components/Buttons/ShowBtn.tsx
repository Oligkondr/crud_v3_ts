import { Person } from 'react-bootstrap-icons';
import { Link } from '@inertiajs/react';

export default function ShowBtn ({id}) {
    return (
        <Link href={`/user/${id}`} title="Смотреть" className={'text-success ml-2 fs-5'}>
            <Person className={'d-inline'}/>
        </Link>
    );
}
