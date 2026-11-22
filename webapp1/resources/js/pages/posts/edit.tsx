import { Head, Form } from '@inertiajs/react';
import { TextArea, TextField, Button } from '@radix-ui/themes';
import { useState } from 'react';
import { update } from '@/routes/posts';
import type { PostEditProps } from '@/types/global';

export default function Edit({ post, category }: PostEditProps) {
    const [title, setTitle] = useState<string>(post?.title);
    const [msg, setMessage] = useState<string>(post?.body);

    return (
        <section className="mx-auto w-full max-w-4xl py-8">
            <Head title="Edit post" />
            <h1 className="text-xl font-semibold">Edit the post</h1>
            <Form {...update.form(post.id)} method="post">
                {({ errors, processing }) => (
                    <>
                        <fieldset className="my-4">
                            <label htmlFor="title">Title</label>
                            <TextField.Root
                                className="border-color-black block w-1/2 rounded border py-2"
                                type="text"
                                name="title"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                            {errors.title && (
                                <div className="text-red-800">
                                    {errors.title}
                                </div>
                            )}
                        </fieldset>
                        <fieldset className="my-4">
                            <label htmlFor="name">Category</label>
                            <TextField.Root
                                className="border-color-black block w-1/2 rounded border py-2"
                                type="text"
                                name="name"
                                value={category.name}
                                readOnly
                            />
                            {errors.name && (
                                <div className="text-red-800">
                                    {errors.name}
                                </div>
                            )}
                        </fieldset>

                        <fieldset className="my-4">
                            <label htmlFor="body">Message</label>
                            <TextArea
                                className="border-color-black block min-h-37.5 w-1/2 rounded border py-4"
                                name="body"
                                value={msg}
                                onChange={(e) => setMessage(e.target.value)}
                            ></TextArea>
                            {errors.body && (
                                <div className="text-red-800">
                                    {errors.body}
                                </div>
                            )}
                        </fieldset>
                        <Button
                            className="text-lg capitalize"
                            disabled={processing}
                            type="submit"
                        >
                            update post
                        </Button>
                    </>
                )}
            </Form>
        </section>
    );
}
