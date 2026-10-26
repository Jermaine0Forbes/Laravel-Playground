import { Link, router, Head} from '@inertiajs/react';
import { ReactNode } from 'react';
import { route } from 'ziggy-js';

export default function Show( children : ReactNode) {

    console.log(children)
    return(
        <section className="max-w-4xl mx-auto py-8 w-full">
            <Head title="Post"/>
            <p>this is the posts page</p>
        </section>
    )

};