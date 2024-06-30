import EditBtn from '@/Components/Buttons/EditBtn.js';
import ShowBtn from '@/Components/Buttons/ShowBtn.js';
import DestroyBtn from '@/Components/Buttons/DestroyBtn.js';

export default function TableRow ({user}) {
    return (
        <tr>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.gender}</td>
            <td>{user.birthday_format}</td>
            <td className={'text-right'}>
                <ShowBtn id={user.id}/>
                <EditBtn id={user.id}/>
                <DestroyBtn id={user.id}/>
            </td>
        </tr>
    );
}
