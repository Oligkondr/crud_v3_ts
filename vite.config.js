import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';
import path from 'path';
import i18n from 'laravel-react-i18n/vite';

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/sass/app.scss',
                'resources/js/app.tsx',
            ],
            ssr: 'resources/js/ssr.tsx',
            refresh: true,
        }),
        react(),
        i18n(),
    ],
    resolve: {
        alias: {
            '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
            'ziggy-js': path.resolve('vendor/tightenco/ziggy'),
        },
    },
});
