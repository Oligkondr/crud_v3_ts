import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Button, Form} from 'react-bootstrap';
import Title from '@/Components/Title.js';
import ListBtn from '@/Components/Buttons/ListBtn.js';
import {useForm} from '@inertiajs/react';
import {useLaravelReactI18n} from "laravel-react-i18n";
import Layout from "@/Pages/Layout";

const Create = () => {

    const {t} = useLaravelReactI18n();


    const {setData, post, errors} = useForm({
        name: '',
        email: '',
        gender: '',
        birthday: '',
        password: '',
    });

    function handleSubmit(e: any) {
        e.preventDefault();
        post('/user')
    }

    return (
        <>
            <Row>
                <Col>
                    <Title title={t('Create user')}/>
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
                            <Form.Control type="text" name="name" placeholder={t('Name')} required
                                          onChange={e => setData('name', e.target.value)}/>
                            {errors.name && <Form.Text className="text-danger">{errors.name}</Form.Text>}
                        </Form.Group>
                        <Row>
                            <Col>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>{t('Birthday')}</Form.Label>
                                    <Form.Control type="date" name="birthday" placeholder={t('Birthday')} required
                                                  onChange={e => setData('birthday', e.target.value)}/>
                                    {errors.birthday &&
                                        <Form.Text className="text-danger">{errors.birthday}</Form.Text>}
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>{t('Gender')}</Form.Label>
                                    <Form.Check type="radio" name="gender" label={t('Man')} value="Мужской"
                                                onChange={e => setData('gender', e.target.value)}/>
                                    <Form.Check type="radio" name="gender" label={t('Woman')} value="Женский"
                                                onChange={e => setData('gender', e.target.value)}/>
                                    {errors.gender && <Form.Text className="text-danger">{errors.gender}</Form.Text>}
                                </Form.Group>
                            </Col>
                        </Row>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>E-mail</Form.Label>
                            <Form.Control type="email" name="email" placeholder="E-mail" required
                                          onChange={e => setData('email', e.target.value)}/>
                            {errors.email && <Form.Text className="text-danger">{errors.email}</Form.Text>}
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>{t('Password')}</Form.Label>
                            <Form.Control type="password" name="password" placeholder={t('Password')} required
                                          onChange={e => setData('password', e.target.value)}/>
                            {errors.password && <Form.Text className="text-danger">{errors.password}</Form.Text>}
                        </Form.Group>
                    </Col>
                </Row>
                <Button variant="primary" type="submit">
                    {t('Create')}
                </Button>
            </Form>
        </>
    );
}

Create.layout = (page: any) => <Layout children={page}/>

export default Create;
