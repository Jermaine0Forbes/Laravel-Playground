import { Link, router, Head, Form} from '@inertiajs/react';
import { ReactNode } from 'react';
import { route } from 'ziggy-js';
import {store} from '@/routes/categories';

export default function Create( children : ReactNode) {
    return(
        <section className="max-w-4xl mx-auto py-8 w-full">
            <Head title="Create category"/>
            <Form {...store.form()} method="post" >
                {({errors, processing}) => (
                    <>
                    </>
                )}
            </Form>
        </section>
    )

};