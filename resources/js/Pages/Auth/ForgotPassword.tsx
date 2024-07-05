import {Link, useForm} from '@inertiajs/react';
import {FormEventHandler} from 'react';
import {PageProps} from "@/types";
import Layout from "@/Pages/Layout";
import {Button, Form, Row} from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Title from "@/Components/Title";
import {useLaravelReactI18n} from "laravel-react-i18n";

export default function ForgotPassword({auth, status}: PageProps<{ status?: string }>) {
    const {data, setData, post, processing, errors} = useForm({
        email: '',
    });

    const {t} = useLaravelReactI18n();

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route('password.email'));
    };

    return (
        <Layout auth={auth} showLinks={false}>
            <Row>
                <Col>
                    <Title title={t('Password recovery')}/>
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

                    </Col>
                </Row>
                <Button variant="primary" type="submit">
                    {t('E-mail password reset link')}
                </Button>
                <Link href={route('login')} className={"ml-3 text-decoration-underline"}>{t('Log in')}</Link>
            </Form>
        </Layout>
    );
}
