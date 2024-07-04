import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Button, Form} from 'react-bootstrap';
import Title from '@/Components/Title.js';
import ListBtn from '@/Components/Buttons/ListBtn.js';
import {useForm} from '@inertiajs/react';
import {useLaravelReactI18n} from "laravel-react-i18n";
import Layout from "@/Pages/Layout";

interface EditProps {
    user: any,
}


const Edit = ({user}: EditProps) => {

    const {t} = useLaravelReactI18n();

    const {data, setData, put, errors} = useForm({
        name: user.name,
        email: user.email,
        gender: user.gender,
        birthday: user.birthday,
    });

    function handleSubmit(e: any) {
        e.preventDefault();
        put(`/user/${user.id}`);
    }

    return (
        <>
            <Row>
                <Col>
                    <Title title={`${t('User')} #${user.id}`}/>
                </Col>
                <Col className={'text-end'}>
                    <ListBtn/>
                </Col>
            </Row>

            <Form onSubmit={handleSubmit}>
                <Row>
                    <Col>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>{t('Name')}</Form.Label>
                            <Form.Control type="text" name="name" value={data.name} placeholder={t('Name')} required
                                          onChange={e => setData('name', e.target.value)}/>
                            {errors.name && <Form.Text className="text-danger">{errors.name}</Form.Text>}
                        </Form.Group>
                        <Row>
                            <Col>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>{t('Birthday')}</Form.Label>
                                    <Form.Control type="date" name="birthday" value={data.birthday}
                                                  placeholder={t('Birthday')} required
                                                  onChange={e => setData('birthday', e.target.value)}/>
                                    {errors.birthday &&
                                        <Form.Text className="text-danger">{errors.birthday}</Form.Text>}
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>{t('Gender')}</Form.Label>
                                    <Form.Check type="radio" name="gender" label={t('Man')} value="Мужской"
                                                checked={data.gender === 'Мужской'}
                                                onChange={e => setData('gender', e.target.value)}/>
                                    <Form.Check type="radio" name="gender" label={t('Woman')} value="Женский"
                                                checked={data.gender === 'Женский'}
                                                onChange={e => setData('gender', e.target.value)}/>
                                    {errors.gender && <Form.Text className="text-danger">{errors.gender}</Form.Text>}
                                </Form.Group>
                            </Col>
                        </Row>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>E-mail</Form.Label>
                            <Form.Control type="email" name="email" value={data.email} placeholder="E-mail" required
                                          onChange={e => setData('email', e.target.value)}/>
                            {errors.email && <Form.Text className="text-danger">{errors.email}</Form.Text>}
                        </Form.Group>
                    </Col>
                </Row>
                <Button variant="primary" type="submit">
                    {t('Save')}
                </Button>
            </Form>
        </>
    );
}

Edit.layout = (page: any) => <Layout children={page}/>

export default Edit;
