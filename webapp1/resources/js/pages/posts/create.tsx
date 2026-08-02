import { Link, router, Head, Form } from '@inertiajs/react';
import { ReactNode } from 'react';
import { route } from 'ziggy-js';

export default function Create( children : ReactNode) {

    return(
        <section className="max-w-4xl mx-auto py-8 w-full">
            <Head title="Create a post"/>
            <h1 className="">Create a post</h1>
            <Form action="/posts/store" method="post">
            <input type="text" name='title' />
            <textarea name="body">

            </textarea>
                <button type="submit">submit</button>
            </Form>
        </section>
    )

};