import {useLaravelReactI18n} from "laravel-react-i18n";
import Layout from "@/Pages/Layout";
import {PageProps} from "@/types";
import {Link} from "@inertiajs/react";

const Main = ({auth}: PageProps) => {
    const {t} = useLaravelReactI18n();

    return (
        <Layout auth={auth}>
            <h1 style={{fontSize: '3rem'}}>{t('User manager')}</h1>
            {auth.user && <Link href={route('user.index')} className={"text-decoration-underline"}>{t('User list')}</Link>}
        </Layout>
    );
}

export default Main;
