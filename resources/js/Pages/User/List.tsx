import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Table} from 'react-bootstrap';
import Title from '@/Components/Title.js';
import CreateBtn from '@/Components/Buttons/CreateBtn.js';
import TableRow from '@/Components/List/TableRow.js';
import {useLaravelReactI18n} from "laravel-react-i18n";

interface ListProps {
    users: any
}

export default function List({users}: ListProps) {
    const {t, tChoice, currentLocale, setLocale, getLocales, loading, isLocale} = useLaravelReactI18n();

    return (
        <Container fluid="md">
            <Row>
                <Col>
                    <Title title={t('User list')}/>
                </Col>
                <Col className={'text-right mr-2'}>
                    <CreateBtn/>
                </Col>
            </Row>
            <Table striped>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>{t('Name')}</th>
                    <th>E-mail</th>
                    <th>{t('Gender')}</th>
                    <th>{t('Birthday')}</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                {users.map((user: any, i: number) => (
                    <TableRow key={i} user={user}/>
                ))}
                </tbody>
            </Table>
        </Container>
    );
}
