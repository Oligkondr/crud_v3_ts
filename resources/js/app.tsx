import './bootstrap';
import '../css/app.css';
// import './i18n'
import {createRoot, hydrateRoot} from 'react-dom/client';
import {createInertiaApp} from '@inertiajs/react';
import {resolvePageComponent} from 'laravel-vite-plugin/inertia-helpers';
import {LaravelReactI18nProvider} from "laravel-react-i18n";

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.tsx`, import.meta.glob('./Pages/**/*.tsx')),
    setup({el, App, props}) {
        if (import.meta.env.DEV) {
            createRoot(el).render(
                <LaravelReactI18nProvider
                    locale={'ru'}
                    fallbackLocale={'en'}
                    files={import.meta.glob('/lang/*.json')}
                >
                    <App {...props} />
                </LaravelReactI18nProvider>
            );
            return
        }

        hydrateRoot(el, <App {...props} />);
    },
    progress: {
        color: '#4B5563',
    },
});
