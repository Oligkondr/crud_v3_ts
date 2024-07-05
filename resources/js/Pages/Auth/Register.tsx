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
                    {t('Create')}
                </Button>
            </Form>
            {/*<Head title="Register" />*/}

            {/*<form onSubmit={submit}>*/}
            {/*    <div>*/}
            {/*        <InputLabel htmlFor="name" value="Name" />*/}

            {/*        <TextInput*/}
            {/*            id="name"*/}
            {/*            name="name"*/}
            {/*            value={data.name}*/}
            {/*            className="mt-1 block w-full"*/}
            {/*            autoComplete="name"*/}
            {/*            isFocused={true}*/}
            {/*            onChange={(e) => setData('name', e.target.value)}*/}
            {/*            required*/}
            {/*        />*/}

            {/*        <InputError message={errors.name} className="mt-2" />*/}
            {/*    </div>*/}

            {/*    <div className="mt-4">*/}
            {/*        <InputLabel htmlFor="email" value="Email" />*/}

            {/*        <TextInput*/}
            {/*            id="email"*/}
            {/*            type="email"*/}
            {/*            name="email"*/}
            {/*            value={data.email}*/}
            {/*            className="mt-1 block w-full"*/}
            {/*            autoComplete="username"*/}
            {/*            onChange={(e) => setData('email', e.target.value)}*/}
            {/*            required*/}
            {/*        />*/}

            {/*        <InputError message={errors.email} className="mt-2" />*/}
            {/*    </div>*/}

            {/*    <div className="mt-4">*/}
            {/*        <InputLabel htmlFor="password" value="Password" />*/}

            {/*        <TextInput*/}
            {/*            id="password"*/}
            {/*            type="password"*/}
            {/*            name="password"*/}
            {/*            value={data.password}*/}
            {/*            className="mt-1 block w-full"*/}
            {/*            autoComplete="new-password"*/}
            {/*            onChange={(e) => setData('password', e.target.value)}*/}
            {/*            required*/}
            {/*        />*/}

            {/*        <InputError message={errors.password} className="mt-2" />*/}
            {/*    </div>*/}

            {/*    <div className="mt-4">*/}
            {/*        <InputLabel htmlFor="password_confirmation" value="Confirm Password" />*/}

            {/*        <TextInput*/}
            {/*            id="password_confirmation"*/}
            {/*            type="password"*/}
            {/*            name="password_confirmation"*/}
            {/*            value={data.password_confirmation}*/}
            {/*            className="mt-1 block w-full"*/}
            {/*            autoComplete="new-password"*/}
            {/*            onChange={(e) => setData('password_confirmation', e.target.value)}*/}
            {/*            required*/}
            {/*        />*/}

            {/*        <InputError message={errors.password_confirmation} className="mt-2" />*/}
            {/*    </div>*/}

            {/*    <div className="flex items-center justify-end mt-4">*/}
            {/*        <Link*/}
            {/*            href={route('login')}*/}
            {/*            className="underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"*/}
            {/*        >*/}
            {/*            Already registered?*/}
            {/*        </Link>*/}

            {/*        <PrimaryButton className="ms-4" disabled={processing}>*/}
            {/*            Register*/}
            {/*        </PrimaryButton>*/}
            {/*    </div>*/}
            {/*</form>*/}
        </Layout>
    );
}
