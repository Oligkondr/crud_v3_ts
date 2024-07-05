import {FormEventHandler, useEffect} from 'react';
import {useForm} from '@inertiajs/react';
import Layout from "@/Pages/Layout";
import {PageProps} from "@/types";
import {Button, Form, Row} from "react-bootstrap";
import Col from "react-bootstrap/Col";
import {useLaravelReactI18n} from "laravel-react-i18n";
import Title from "@/Components/Title";
import ListBtn from "@/Components/Buttons/ListBtn";

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
                            <Form.Check type={"checkbox"} label={t('Remember me')} checked={data.remember} onChange={e => setData('remember', e.target.checked)}/>
                        </Form.Group>
                    </Col>
                </Row>
                <Button variant="primary" type="submit">
                    {t('Log in')}
                </Button>
            </Form>
            {/*<Head title="Log in" />*/}
            {/*{status && <div className="mb-4 font-medium text-sm text-green-600">{status}</div>}*/}

            {/*<form onSubmit={submit}>*/}
            {/*    <div>*/}
            {/*        <InputLabel htmlFor="email" value="Email" />*/}

            {/*        <TextInput*/}
            {/*            id="email"*/}
            {/*            type="email"*/}
            {/*            name="email"*/}
            {/*            value={data.email}*/}
            {/*            className="mt-1 block w-full"*/}
            {/*            autoComplete="username"*/}
            {/*            isFocused={true}*/}
            {/*            onChange={(e) => setData('email', e.target.value)}*/}
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
            {/*            autoComplete="current-password"*/}
            {/*            onChange={(e) => setData('password', e.target.value)}*/}
            {/*        />*/}

            {/*        <InputError message={errors.password} className="mt-2" />*/}
            {/*    </div>*/}

            {/*    <div className="block mt-4">*/}
            {/*        <label className="flex items-center">*/}
            {/*            <Checkbox*/}
            {/*                name="remember"*/}
            {/*                checked={data.remember}*/}
            {/*                onChange={(e) => setData('remember', e.target.checked)}*/}
            {/*            />*/}
            {/*            <span className="ms-2 text-sm text-gray-600 dark:text-gray-400">Remember me</span>*/}
            {/*        </label>*/}
            {/*    </div>*/}

            {/*    <div className="flex items-center justify-end mt-4">*/}
            {/*        {canResetPassword && (*/}
            {/*            <Link*/}
            {/*                href={route('password.request')}*/}
            {/*                className="underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"*/}
            {/*            >*/}
            {/*                Forgot your password?*/}
            {/*            </Link>*/}
            {/*        )}*/}

            {/*        <PrimaryButton className="ms-4" disabled={processing}>*/}
            {/*            Log in*/}
            {/*        </PrimaryButton>*/}
            {/*    </div>*/}
            {/*</form>*/}
        </Layout>
    );
}
