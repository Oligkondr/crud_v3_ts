import {useForm} from '@inertiajs/react';
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
            </Form>
            {/*<Head title="Forgot Password" />*/}

            {/*<div className="mb-4 text-sm text-gray-600 dark:text-gray-400">*/}
            {/*    Forgot your password? No problem. Just let us know your email address and we will email you a password*/}
            {/*    reset link that will allow you to choose a new one.*/}
            {/*</div>*/}

            {/*{status && <div className="mb-4 font-medium text-sm text-green-600 dark:text-green-400">{status}</div>}*/}

            {/*<form onSubmit={submit}>*/}
            {/*    <TextInput*/}
            {/*        id="email"*/}
            {/*        type="email"*/}
            {/*        name="email"*/}
            {/*        value={data.email}*/}
            {/*        className="mt-1 block w-full"*/}
            {/*        isFocused={true}*/}
            {/*        onChange={(e) => setData('email', e.target.value)}*/}
            {/*    />*/}

            {/*    <InputError message={errors.email} className="mt-2" />*/}

            {/*    <div className="flex items-center justify-end mt-4">*/}
            {/*        <PrimaryButton className="ms-4" disabled={processing}>*/}
            {/*            Email Password Reset Link*/}
            {/*        </PrimaryButton>*/}
            {/*    </div>*/}
            {/*</form>*/}
        </Layout>
    );
}
