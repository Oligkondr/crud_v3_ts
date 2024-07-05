import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Table} from 'react-bootstrap';
import Title from '@/Components/Title.js';
import ListBtn from '@/Components/Buttons/ListBtn.js';
import EditBtn from '@/Components/Buttons/EditBtn.js';
import DestroyBtn from '@/Components/Buttons/DestroyBtn.js';
import TableRow from '@/Components/Show/TableRow.js';
import {Fragment} from 'react';
import {useLaravelReactI18n} from "laravel-react-i18n";
import Layout from "@/Pages/Layout";
import List from "@/Pages/User/List";
import {PageProps} from "@/types";

const Show = ({auth, user}: PageProps<{user: any}>) => {
    const {t} = useLaravelReactI18n();

    const keys: any = {
        id: 'ID',
        name: t('Name'),
        gender: t('Gender'),
        birthday_format: t('Birthday'),
        email: 'E-mail',
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
                    <Fragment key={index}>
                        <TableRow name={keys[key]} value={user[key]}/>
                    </Fragment>
                ))}
                </tbody>
            </Table>
        </Layout>
    );
}

export default Show;
