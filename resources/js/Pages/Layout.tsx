import {useLaravelReactI18n} from "laravel-react-i18n";
import Select from "@/Components/Select";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {router} from "@inertiajs/react";
import axios from "axios";

interface LayoutProps {
    children: any
}

export default function Layout({children}: LayoutProps) {
    const {currentLocale, setLocale} = useLaravelReactI18n();

    const setLang = (lang: string) => {
        setLocale(lang)
        axios.post('/api/set-lang', {lang})
    }

    return (
        <Container fluid="md">
            <main>
                <header className={"mt-2"}>
                    <Row>
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
