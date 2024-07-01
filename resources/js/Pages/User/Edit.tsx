import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Button, Form} from 'react-bootstrap';
import Title from '@/Components/Title.js';
import ListBtn from '@/Components/Buttons/ListBtn.js';
import {useState} from 'react';
import {router, usePage} from '@inertiajs/react';
import {useLaravelReactI18n} from "laravel-react-i18n";

interface EditProps {
    user: any,
}


export default function Edit({user}: EditProps) {

    const {t, tChoice, currentLocale, setLocale, getLocales, loading, isLocale} = useLaravelReactI18n();

    const {errors} = usePage().props

    const [data, setData] = useState({
        name: user.name,
        email: user.email,
        gender: user.gender,
        birthday: user.birthday,
    });

    const handleInput = (e: any) => {
        setData({...data, [e.target.name]: e.target.value});
    };

    function handleSubmit(e: any) {
        e.preventDefault();
        router.put(`/user/${user.id}`, data);
    }

    return (
        <Container fluid="md">
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
                                          onChange={handleInput}/>
                            {errors.name && <Form.Text className="text-danger">{errors.name}</Form.Text>}
                        </Form.Group>
                        <Row>
                            <Col>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>{t('Birthday')}</Form.Label>
                                    <Form.Control type="date" name="birthday" value={data.birthday}
                                                  placeholder={t('Birthday')} required
                                                  onChange={handleInput}/>
                                    {errors.birthday &&
                                        <Form.Text className="text-danger">{errors.birthday}</Form.Text>}
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>{t('Gender')}</Form.Label>
                                    <Form.Check type="radio" name="gender" label={t('Man')} value="Мужской"
                                                checked={data.gender === 'Мужской'} onChange={handleInput}/>
                                    <Form.Check type="radio" name="gender" label={t('Woman')} value="Женский"
                                                checked={data.gender === 'Женский'} onChange={handleInput}/>
                                    {errors.gender && <Form.Text className="text-danger">{errors.gender}</Form.Text>}
                                </Form.Group>
                            </Col>
                        </Row>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>E-mail</Form.Label>
                            <Form.Control type="email" name="email" value={data.email} placeholder="E-mail" required
                                          onChange={handleInput}/>
                            {errors.email && <Form.Text className="text-danger">{errors.email}</Form.Text>}
                        </Form.Group>
                    </Col>
                </Row>
                <Button variant="primary" type="submit">
                    {t('Save')}
                </Button>
            </Form>
        </Container>
    );
}
