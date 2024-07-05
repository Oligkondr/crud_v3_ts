import {FormEventHandler, useEffect} from 'react';
import {Link, useForm} from '@inertiajs/react';
import Layout from "@/Pages/Layout";
import {PageProps} from "@/types";
import {Button, Form, Row} from "react-bootstrap";
import Col from "react-bootstrap/Col";
import {useLaravelReactI18n} from "laravel-react-i18n";
import Title from "@/Components/Title";

export default function Login({auth, status, canResetPassword}: PageProps<{
    status?: string,
    canResetPassword: boolean
}>) {

    const {t} = useLaravelReactI18n();

    const {data, setData, post, processing, errors, reset} = useForm({
        email: '',
        password: '',
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route('login'));
    };

    return (
        <Layout auth={auth} showLinks={false}>
            <Row>
                <Col>
                    <Title title={t('Log in')}/>
                </Col>
            </Row>
            <Form className={"mt-5"} onSubmit={submit}>
                <Row>
                    <Col>
                        <Form.Group className="mb-3">
                            <Form.Label>E-mail</Form.Label>
                            <Form.Control type="email" placeholder='E-mail' required
                                          onChange={e => setData('email', e.target.value)}/>
                            {errors.email && <Form.Text className="text-danger">{errors.email}</Form.Text>}
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>{t('Password')}</Form.Label>
                            <Form.Control type="password" placeholder={t('Password')} required
                                          onChange={e => setData('password', e.target.value)}/>
                            {errors.password && <Form.Text className="text-danger">{errors.password}</Form.Text>}
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Check type={"checkbox"} label={t('Remember me')} checked={data.remember}
                                        onChange={e => setData('remember', e.target.checked)}/>
                        </Form.Group>
                    </Col>
                </Row>
                <Button variant="primary" type="submit">
                    {t('Log in')}
                </Button>
                <Link href={route('register')} className={"ml-3 text-decoration-underline"}>{t('Registration')}</Link>
                <Link href={route('password.request')} className={"ml-3 text-decoration-underline"}>{t('Forgot your password?')}</Link>
            </Form>
        </Layout>
    );
}
