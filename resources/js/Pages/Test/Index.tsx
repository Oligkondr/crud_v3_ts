import {useLaravelReactI18n} from 'laravel-react-i18n';
import Select from "@/Components/Select";
import { useRoute } from 'ziggy-js';
import {Link} from "@inertiajs/react";

export default function Index() {
    // const {t, tChoice, currentLocale, setLocale, getLocales, loading, isLocale} = useLaravelReactI18n();
    const route = useRoute();

    return (
        <>
            <h1>Ziggy</h1>
            <Link href={route('test')}>Ссылка</Link>
        </>
    );
}
