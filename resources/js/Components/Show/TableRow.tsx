import {useLaravelReactI18n} from "laravel-react-i18n";
import {Image} from 'react-bootstrap';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

interface TableRowProps {
    name: string,
    value: string,
    trans: boolean,
    image: boolean
}

export default function TableRow({name, value, trans, image}: TableRowProps) {

    const {t} = useLaravelReactI18n();

    let content;

    if (trans) {
        content = t(value);
    } else if (image) {
        content = value ?
            <Row>
                <Col md={3}>
                    <Image src={`/storage/${value}`} rounded />
                </Col>
            </Row> : '';
    } else {
        content = value;
    }

    return (
        <tr>
            <th>
                {name}
            </th>
            <td>
                {content}
            </td>
        </tr>
    );
}
