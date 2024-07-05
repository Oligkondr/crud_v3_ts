import {useLaravelReactI18n} from "laravel-react-i18n";
import Select from "@/Components/Select";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {Link} from "@inertiajs/react";
import axios from "axios";
import {PageProps} from '@/types';
import HomeBtn from "@/Components/Buttons/HomeBtn";

export default function Layout({auth, children, showLinks = true}: PageProps<{ children: any, showLinks?: boolean }>) {
    const {t, currentLocale, setLocale} = useLaravelReactI18n();

    const setLang = (lang: string) => {
        setLocale(lang)
        axios.post('/api/set-lang', {lang})
    }

    return (
        <Container fluid="md">
            <main>
                <header className={"mt-2"}>
                    <Row>
                        <Col>
                            <HomeBtn/>
                        </Col>
                        <Col>
                        {showLinks && (auth.user ? (
                                <>
                                    <span className={"mr-3"}>{auth.user.name}</span>
                                    <Link href={route('logout')} method="post" className={"text-decoration-underline"}>{t('Log out')}</Link>
                                </>
                            ) : (
                                <>
                                    <Link href={route('login')} className={"mr-3 text-decoration-underline"}>{t('Log in')}</Link>
                                    <Link href={route('register')} className={"text-decoration-underline"}>{t('Registration')}</Link>
                                </>
                            ))
                        }
                        </Col>
                        <Col className={"text-right"}>
                            <Select
                                value={currentLocale()}
                                options={[
                                    {value: 'ru', label: 'Русский'},
                                    {value: 'en', label: 'English'},
                                ]}
                                onChange={(event) => setLang(event.currentTarget.value)}
                            />
                        </Col>
                    </Row>
                </header>
                <section className={"mt-2"}>{children}</section>
            </main>
        </Container>
    )
}
