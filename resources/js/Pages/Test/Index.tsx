import {useLaravelReactI18n} from 'laravel-react-i18n';
import Select from "@/Components/Select";


export default function Index() {
    const {t, tChoice, currentLocale, setLocale, getLocales, loading, isLocale} = useLaravelReactI18n();
    return (
        <>
            <Select
                className={"mr-20"}
                value={currentLocale()}
                options={[
                    {value: 'ru', label: 'Русский'},
                    {value: 'en', label: 'English'},
                ]}
                onChange={(event) => setLocale(event.currentTarget.value)}
            />
            <h1>{t('show users')}</h1>
        </>
    );
}
