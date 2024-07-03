import {useLaravelReactI18n} from 'laravel-react-i18n';
import Select from "@/Components/Select";

export default function Index({test}) {
    const {t, tChoice, currentLocale, setLocale, getLocales, loading, isLocale} = useLaravelReactI18n();
    return (
        <>
            <h1>123 {test}</h1>
            <a href="/user">Ссылка</a>
        </>
    );
}
