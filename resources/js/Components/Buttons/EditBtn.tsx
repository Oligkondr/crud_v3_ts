import { PencilSquare } from 'react-bootstrap-icons';
import { Link } from '@inertiajs/react';

export default function EditBtn ({id}) {
    return (
        <Link href={`/user/${id}/edit`} title="Править" className={'text-primary ml-2 fs-5'}>
            <PencilSquare className={'d-inline'}/>
        </Link>
    );
}
