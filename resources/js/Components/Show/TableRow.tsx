import {useLaravelReactI18n} from "laravel-react-i18n";

interface TableRowProps {
    name: string,
    value: string,
    trans: boolean
}

export default function TableRow({name, value, trans}: TableRowProps) {

    const {t} = useLaravelReactI18n();

    return (
        <tr>
            <th>
                {name}
            </th>
            <td>
                {trans ? t(value) : value}
            </td>
        </tr>
    );
}
