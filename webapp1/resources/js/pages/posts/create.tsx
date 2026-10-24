import { Link, router, Head, Form } from '@inertiajs/react';
import { ReactNode } from 'react';
// import { route } from 'ziggy-js';
// import { Form as F } from 'radix-ui';
import { TextArea, TextField, Button } from '@radix-ui/themes';
import posts from '@/routes/posts';

type CategoryObj = {
    id: number,
    name: string
}

type PostCreateProps = {
    categories : Array<CategoryObj | null>
}

export default function Create({categories} : PostCreateProps) {

    console.log(categories)
    console.log('foo')

    return (
        <section className="max-w-4xl mx-auto py-8 w-full">
            <Head title="Create a post" />
            <h1 className="font-semibold text-xl">Create a post</h1>
            <Form action={posts.store.post()} method="post" >
                <fieldset className="my-4 ">
                    <label htmlFor="title">Title</label>
                    <TextField.Root className="border border-color-black block rounded py-2 w-1/2" type="text" name='title'
                    />
                </fieldset>
                <fieldset className="my-4 ">
                    <label htmlFor="category">Category</label>
                    <TextField.Root className="border border-color-black block rounded py-2 w-1/2" type="text" name='category'
                    />
                </fieldset>

                <fieldset className="my-4 ">

                    <label htmlFor="body">Message</label>
                    <TextArea className="border border-color-black block rounded py-4 min-h-37.5 w-1/2" name="body">

                    </TextArea>
                </fieldset>
                <Button className="text-lg capitalize" type="submit">create post</Button>
            </Form>
        </section>
    )

};