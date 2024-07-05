import {FormEventHandler, useEffect} from 'react';
import {useForm} from '@inertiajs/react';
import {PageProps} from "@/types";
import Layout from "@/Pages/Layout";
import {Button, Form} from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import {useLaravelReactI18n} from "laravel-react-i18n";
import Title from "@/Components/Title";

export default function ResetPassword({auth, token, email}: PageProps<{ token: string, email: string }>) {
    const {data, setData, post, processing, errors, reset} = useForm({
        token: token,
        email: email,
        password: '',
        password_confirmation: '',
    });

    const {t} = useLaravelReactI18n();

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route('password.store'));
    };

    return (
        <Layout auth={auth} showLinks={false}>
            <Row>
                <Col>
                    <Title title={t('New password')}/>
                </Col>
            </Row>
            <Form className={"mt-5"} onSubmit={submit}>
                <Row>
                    <Col>
                        <Form.Group className="mb-3">
                            <Form.Label>{t('Password')}</Form.Label>
                            <Form.Control type="password" placeholder={t('Password')} required
                                          onChange={e => setData('password', e.target.value)}/>
                            {errors.password && <Form.Text className="text-danger">{errors.password}</Form.Text>}
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>{t('Repeat password')}</Form.Label>
                            <Form.Control type="password" placeholder={t('Repeat password')} required
                                          onChange={e => setData('password_confirmation', e.target.value)}/>
                            {errors.password_confirmation &&
                                <Form.Text className="text-danger">{errors.password_confirmation}</Form.Text>}
                        </Form.Group>
                    </Col>
                </Row>
                <Button variant="primary" type="submit">
                    {t('Save')}
                </Button>
            </Form>
        </Layout>
    );
}
