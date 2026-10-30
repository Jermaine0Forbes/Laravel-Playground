import { Link, router, Head} from '@inertiajs/react';
import { ReactNode } from 'react';
import { route } from 'ziggy-js';

export default function Show( children : ReactNode) {
    const { category, posts}= children;
    console.log(children)
    return(
        <section className="max-w-4xl mx-auto py-8 w-full">
            <Head title="Show category  "/>
            <h1 className="text-xl font-bold">{category?.name}</h1>
        </section>
    )

};