import { Link, router, Head, Form } from '@inertiajs/react';
import { ReactNode } from 'react';
import { route } from 'ziggy-js';
import { Form as F} from 'radix-ui';
import { TextArea, TextField } from '@radix-ui/themes';

export default function Create(children: ReactNode) {

    return (
        <section className="max-w-4xl mx-auto py-8 w-full">
            <Head title="Create a post" />
            <h1 className="font-semibold text-xl">Create a post</h1>
            <Form action="/posts/store" method="post" >
                <TextField.Root  variant="surface" placeholder='Enter the title...'/>
                <TextArea variant="surface" placeholder='Enter the message...'/>
                <input className="border-1 border-color-black block my-4 rounded py-2" type="text" name='title' />
                <textarea className="border-1 border-color-black block my-4 rounded py-4 min-h-[200px]" name="body">

                </textarea>
                <button className="bg-blue-600 text-white px-4 py-2 rounded" type="submit">submit</button>
            </Form>
        </section>
    )

};