import { Link, router, Head, Form, usePage } from '@inertiajs/react';
import { useState } from 'react';
// import { route } from 'ziggy-js';
// import { Form as F } from 'radix-ui';
import { TextArea, TextField, Button } from '@radix-ui/themes';
import {store} from '@/routes/posts';

type CategoryObj = {
    id: number,
    name: string
}

type PostCreateProps = {
    categories: Array<CategoryObj | null>,
    name: string,
    errors?: object,
    sideBarOpen: boolean,
}

export default function Create({ categories, name, errors, sideBarOpen }: PostCreateProps) {
     const { auth } = usePage().props;
     const [title, setTitle] = useState<string>('general');
     const [category, setCategory] = useState<string>('general');
     const [msg, setMessage] = useState<string>('this is a general post');
    console.log(categories)
    console.log(name)

    return (
        <section className="max-w-4xl mx-auto py-8 w-full">
            <Head title="Create a post" />
            <h1 className="font-semibold text-xl">Create a post</h1>
            <Form {...store.form()} method="post" >
                <fieldset className="my-4 ">
                    <label htmlFor="title">Title</label>
                    <TextField.Root className="border border-color-black block rounded py-2 w-1/2" type="text" name='title'
                     value={title}
                     onChange={(e) => setTitle(e.target.value)}
                    />
                </fieldset>
                <fieldset className="my-4 ">
                    <label htmlFor="category">Category</label>
                    <TextField.Root className="border border-color-black block rounded py-2 w-1/2" type="text" name='category'
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    />
                </fieldset>

                <fieldset className="my-4 ">

                    <label htmlFor="body">Message</label>
                    <TextArea className="border border-color-black block rounded py-4 min-h-37.5 w-1/2" name="body" 
                    value={msg}
                    onChange={(e)=> setMessage(e.target.value)}
                    >
                    </TextArea>
                </fieldset>
                <TextField.Root className="none" type="hidden" name='user_id' value={auth?.user?.id}
                />
                <Button className="text-lg capitalize" type="submit">create post</Button>
            </Form>
        </section>
    )

};