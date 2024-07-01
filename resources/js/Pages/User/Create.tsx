import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Button, Form} from 'react-bootstrap';
import Title from '@/Components/Title.js';
import ListBtn from '@/Components/Buttons/ListBtn.js';
import {useState} from 'react';
import {router, usePage} from '@inertiajs/react';
import {useLaravelReactI18n} from "laravel-react-i18n";

export default function Create() {

    const {t, tChoice, currentLocale, setLocale, getLocales, loading, isLocale} = useLaravelReactI18n();

    const {errors} = usePage().props

    const [post, setPost] = useState({
        name: '',
        email: '',
        gender: '',
        birthday: '',
        password: '',
    });

    const handleInput = (e: any) => {
        console.log(typeof e)
        setPost({...post, [e.target.name]: e.target.value});
    };

    function handleSubmit(e: any) {
        console.log(typeof e)

        e.preventDefault();
        router.post('/user', post)
    }

    return (
        <Container fluid="md">
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
                                          onChange={handleInput}/>
                            {errors.name && <Form.Text className="text-danger">{errors.name}</Form.Text>}
                        </Form.Group>
                        <Row>
                            <Col>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>{t('Birthday')}</Form.Label>
                                    <Form.Control type="date" name="birthday" placeholder={t('Birthday')} required
                                                  onChange={handleInput}/>
                                    {errors.birthday &&
                                        <Form.Text className="text-danger">{errors.birthday}</Form.Text>}
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>{t('Gender')}</Form.Label>
                                    <Form.Check type="radio" name="gender" label={t('Man')} value="Мужской"
                                                onChange={handleInput}/>
                                    <Form.Check type="radio" name="gender" label={t('Woman')} value="Женский"
                                                onChange={handleInput}/>
                                    {errors.gender && <Form.Text className="text-danger">{errors.gender}</Form.Text>}
                                </Form.Group>
                            </Col>
                        </Row>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>E-mail</Form.Label>
                            <Form.Control type="email" name="email" placeholder="E-mail" required
                                          onChange={handleInput}/>
                            {errors.email && <Form.Text className="text-danger">{errors.email}</Form.Text>}
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>{t('Password')}</Form.Label>
                            <Form.Control type="password" name="password" placeholder={t('Password')} required
                                          onChange={handleInput}/>
                            {errors.password && <Form.Text className="text-danger">{errors.password}</Form.Text>}
                        </Form.Group>
                    </Col>
                </Row>
                <Button variant="primary" type="submit">
                    {t('Create')}
                </Button>
            </Form>
        </Container>
    );
}
