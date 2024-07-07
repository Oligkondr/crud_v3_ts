import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Table} from 'react-bootstrap';
import Title from '@/Components/Title.js';
import ListBtn from '@/Components/Buttons/ListBtn.js';
import EditBtn from '@/Components/Buttons/EditBtn.js';
import DestroyBtn from '@/Components/Buttons/DestroyBtn.js';
import TableRow from '@/Components/Show/TableRow.js';
import {useLaravelReactI18n} from "laravel-react-i18n";
import Layout from "@/Pages/Layout";
import {PageProps} from "@/types";

const Show = ({auth, user}: PageProps<{ user: any }>) => {
    const {t} = useLaravelReactI18n();

    const keys: any = {
        id: 'ID',
        email: 'E-mail',
        state: t('State'),
        name: t('Name'),
        gender: t('Gender'),
        birthday_format: t('Birthday'),
    };

    return (
        <Layout auth={auth}>
            <Row>
                <Col>
                    <Title title={`${t('User')} #${user.id}`}/>
                </Col>
                <Col className={'text-end'}>
                    <ListBtn/>
                    <EditBtn id={user.id}/>
                    <DestroyBtn id={user.id}/>
                </Col>
            </Row>
            <Table striped>
                <tbody>
                {Object.keys(keys).map((key, index) => (
                    <TableRow key={index} name={keys[key]} value={user[key]} trans={key == 'state'}/>
                ))}
                </tbody>
            </Table>
        </Layout>
    );
}

export default Show;
