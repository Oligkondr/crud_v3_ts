import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Button, Form} from 'react-bootstrap';
import Title from '@/Components/Title.js';
import ListBtn from '@/Components/Buttons/ListBtn.js';
import {useState} from 'react';
import {router, usePage} from '@inertiajs/react';

export default function Create() {

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

    function handleSubmit(e) {
        console.log(typeof e)

        e.preventDefault();
        router.post('/user', post)
    }

    return (
        <Container fluid="md">
            <Row>
                <Col>
                    <Title title={'Создать пользователя'}/>
                </Col>
                <Col className={'text-end'}>
                    <ListBtn/>
                </Col>
            </Row>

            <Form onSubmit={handleSubmit}>
                <Row>
                    <Col>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>ФИО</Form.Label>
                            <Form.Control type="text" name="name" placeholder="ФИО" required onChange={handleInput}/>
                            {errors.name && <Form.Text className="text-danger">{errors.name}</Form.Text>}
                        </Form.Group>
                        <Row>
                            <Col>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Дата рождения</Form.Label>
                                    <Form.Control type="date" name="birthday" placeholder="Дата рождения" required
                                                  onChange={handleInput}/>
                                    {errors.birthday &&
                                        <Form.Text className="text-danger">{errors.birthday}</Form.Text>}
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Пол</Form.Label>
                                    <Form.Check type="radio" name="gender" label="Мужской" value="Мужской"
                                                onChange={handleInput}/>
                                    <Form.Check type="radio" name="gender" label="Женский" value="Женский"
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
                            <Form.Label>Пароль</Form.Label>
                            <Form.Control type="password" name="password" placeholder="Пароль" required
                                          onChange={handleInput}/>
                            {errors.password && <Form.Text className="text-danger">{errors.password}</Form.Text>}
                        </Form.Group>
                    </Col>
                </Row>
                <Button variant="primary" type="submit">
                    Создать
                </Button>
            </Form>
        </Container>
    );
}
