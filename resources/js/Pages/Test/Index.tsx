import {Link} from "@inertiajs/react";

export default function Index() {

    return (
        <>
            <h1>Ziggy</h1>
            <Link href={route('main')}>Ссылка</Link>
        </>
    );
}
