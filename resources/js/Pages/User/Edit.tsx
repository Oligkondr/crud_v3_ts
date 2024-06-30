import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Button, Form} from 'react-bootstrap';
import Title from '@/Components/Title.js';
import ListBtn from '@/Components/Buttons/ListBtn.js';
import {useState} from 'react';
import {router, usePage} from '@inertiajs/react';

export default function Edit({user}) {

    const {errors} = usePage().props

    const [data, setData] = useState({
        name: user.name,
        email: user.email,
        gender: user.gender,
        birthday: user.birthday,
    });

    const handleInput = (e) => {
        setData({...data, [e.target.name]: e.target.value});
    };

    function handleSubmit(e) {
        e.preventDefault();
        router.put(`/user/${user.id}`, data);
    }

    return (
        <Container fluid="md">
            <Row>
                <Col>
                    <Title title={`Пользователь #${user.id}`}/>
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
                            <Form.Control type="text" name="name" value={data.name} placeholder="ФИО" required
                                          onChange={handleInput}/>
                            {errors.name && <Form.Text className="text-danger">{errors.name}</Form.Text>}
                        </Form.Group>
                        <Row>
                            <Col>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Дата рождения</Form.Label>
                                    <Form.Control type="date" name="birthday" value={data.birthday}
                                                  placeholder="Дата рождения" required
                                                  onChange={handleInput}/>
                                    {errors.birthday &&
                                        <Form.Text className="text-danger">{errors.birthday}</Form.Text>}
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Пол</Form.Label>
                                    <Form.Check type="radio" name="gender" label="Мужской" value="Мужской"
                                                checked={data.gender === 'Мужской'} onChange={handleInput}/>
                                    <Form.Check type="radio" name="gender" label="Женский" value="Женский"
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
                    Сохранить
                </Button>
            </Form>
        </Container>
    );
}
