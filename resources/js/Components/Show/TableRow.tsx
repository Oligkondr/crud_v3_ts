interface TableRowProps {
    name: string,
    value: string
}

export default function TableRow ({ name, value }: TableRowProps) {
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
