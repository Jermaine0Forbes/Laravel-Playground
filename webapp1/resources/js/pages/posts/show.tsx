import { Link, router, Head} from '@inertiajs/react';
import { ReactNode } from 'react';
import { route } from 'ziggy-js';

export default function Show( children : ReactNode) {
    return(
        <section className="max-w-4xl mx-auto py-8 w-full">
            <Head title="Post"/>
        </section>
    )

};