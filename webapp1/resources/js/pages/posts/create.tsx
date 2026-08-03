import { Link, router, Head, Form } from '@inertiajs/react';
import { ReactNode } from 'react';
import { route } from 'ziggy-js';
import { Form as F } from 'radix-ui';
import { TextArea, TextField } from '@radix-ui/themes';

export default function Create(children: ReactNode) {

    return (
        <section className="max-w-4xl mx-auto py-8 w-full">
            <Head title="Create a post" />
            <h1 className="font-semibold text-xl">Create a post</h1>
            <Form action="/posts/store" method="post" >
                <fieldset className="my-4 ">
                    <label htmlFor="title">Title</label>
                    <input className="border-1 border-color-black block rounded py-2 w-1/2" type="text" name='title'
                    />
                </fieldset>
                <fieldset className="my-4 ">

                    <label htmlFor="body">Message</label>
                    <textarea className="border-1 border-color-black block rounded py-4 min-h-[150px] w-1/2" name="body">

                    </textarea>
                </fieldset>
                <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 capitalize" type="submit">create post</button>
            </Form>
        </section>
    )

};