import { useEffect, FormEventHandler } from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';
import Layout from "@/Pages/Layout";
import {PageProps} from "@/types";
import {useLaravelReactI18n} from "laravel-react-i18n";
import {Button, Form, Row} from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Title from "@/Components/Title";

export default function Register({auth}: PageProps) {

    const {t} = useLaravelReactI18n();

    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route('register'));
    };

    return (
        <Layout auth={auth} showLinks={false}>
            <Row>
                <Col>
                    <Title title={t('Registration')}/>
                </Col>
            </Row>
            <Form className={"mt-5"} onSubmit={submit}>
                <Row>
                    <Col>
                        <Form.Group className="mb-3">
                            <Form.Label>{t('Name')}</Form.Label>
                            <Form.Control type="text" placeholder={t('Name')} required
                                          onChange={e => setData('name', e.target.value)}/>
                            {errors.name && <Form.Text className="text-danger">{errors.name}</Form.Text>}
                        </Form.Group>

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
                            <Form.Label>{t('Repeat password')}</Form.Label>
                            <Form.Control type="password" placeholder={t('Repeat password')} required
                                          onChange={e => setData('password_confirmation', e.target.value)}/>
                            {errors.password_confirmation && <Form.Text className="text-danger">{errors.password_confirmation}</Form.Text>}
                        </Form.Group>
                    </Col>
                </Row>
                <Button variant="primary" type="submit">
                    {t('Submit')}
                </Button>
                <Link href={route('login')} className={"ml-3 text-decoration-underline"}>{t('Log in')}</Link>
            </Form>
        </Layout>
    );
}
