import { Link, router, Head} from '@inertiajs/react';
import { ReactNode } from 'react';
import { route } from 'ziggy-js';

export default function Show( children : ReactNode) {
   const { category, post: {title, body}} = children;
    console.log(children)
    return(
        <section className="max-w-4xl mx-auto py-8 w-full">
            <Head title="Post"/>
            <h1>{title}</h1>
             <div>Categories: <Link href={'/category/'+category?.slug}>{category?.name}</Link></div>
            <p>{body}</p>
        </section>
    )

};