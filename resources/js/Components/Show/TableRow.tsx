export default function TableRow ({ name, value }) {
    return (
        <tr>
            <th>
                {name}
            </th>
            <td>
                {value}
            </td>
        </tr>
    );
}
