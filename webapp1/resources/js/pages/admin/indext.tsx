import { Link, router, Head } from '@inertiajs/react';
import { ReactNode } from 'react';
import { route } from 'ziggy-js';

export default function Index( children : ReactNode) {

    return(
        <section className="max-w-4xl mx-auto py-8 w-full">
            <Head title="Admin Dashboard"/>
            <h1>Admin Dashboard</h1>
        </section>
    )
};