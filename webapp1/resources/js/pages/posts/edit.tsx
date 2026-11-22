import { Head, Form } from '@inertiajs/react';
import { useState } from 'react';
import { TextArea, TextField, Button } from '@radix-ui/themes';
import { faker } from '@faker-js/faker';
import { update } from '@/routes/posts';
import { PostEditProps } from '@/types/global';


export default function Edit({ post, category }: PostEditProps) {

         const [title, setTitle] = useState<string>(post?.title);
     const [msg, setMessage] = useState<string>(post?.body);
     console.log(post);
    return (
        <section className="max-w-4xl mx-auto py-8 w-full">
            <Head title="Edit post" />
            <h1 className="font-semibold text-xl">Edit the post</h1>
            <Form {...update.form(post.id)} method="post" >
                {({ errors, processing }) => (
                    <>
                        <fieldset className="my-4 ">
                            <label htmlFor="title">Title</label>
                            <TextField.Root className="border border-color-black block rounded py-2 w-1/2" type="text" name='title'
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                            {errors.title && <div className="text-red-800">{errors.title}</div>}
                        </fieldset>
                        <fieldset className="my-4 ">
                            <label htmlFor="name">Category</label>
                               <TextField.Root className="border border-color-black block rounded py-2 w-1/2" type="text" name='name'
                                value={category.name}
                                readOnly
                            />
                            {errors.name && <div className="text-red-800">{errors.name}</div>}
                        </fieldset>

                        <fieldset className="my-4 ">

                            <label htmlFor="body">Message</label>
                            <TextArea className="border border-color-black block rounded py-4 min-h-37.5 w-1/2" name="body"
                                value={msg}
                                onChange={(e) => setMessage(e.target.value)}
                            >
                            </TextArea>
                            {errors.body && <div className="text-red-800">{errors.body}</div>}
                        </fieldset>
                        {/* <input className="none" type="hidden" name='user_id' value={auth?.user?.id}
                                /> */}
                        <Button className="text-lg capitalize" disabled={processing} type="submit">update post</Button>

                    </>
                )}
            </Form>
        </section>
    )

};