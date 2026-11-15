import { Link, router, Head, Form } from '@inertiajs/react';
import { ReactNode, useState } from 'react';
import { route } from 'ziggy-js';
import { store } from '@/routes/categories';

type CategoryCreateProps = {
    categories: string[],
}

export default function Create(children: CategoryCreateProps) {
    const {categories} = children;
    console.log(categories)
    const [name, setName] = useState<string>('');
    const [warning, setWarning] = useState<string>('');
    const handleCategoryName = (name: string) => {
        setName(name)   
        
        if(categories.includes(name))
            {
                setWarning('This category already exists')
            }else{
                setWarning('')

            }
    };

    return (
        <section className="max-w-4xl mx-auto py-8 w-full">
            <Head title="Create category" />
            <h1 className="font-bold text-xl">Create a category</h1>
            <Form {...store.form()} method="post" >
                {({ errors, processing }) => (
                    <>
                        <fieldset className="my-4 ">
                            <label htmlFor="namee">Category</label>
                            <input className="border border-color-black block rounded py-2 w-1/2 px-2" type="text" name='name'
                                value={name}
                                onChange={(e) => handleCategoryName(e.target.value)}
                            />
                            {warning && <div className="text-red-800">{warning}</div>}
                            {errors.name && <div className="text-red-800">{errors.name}</div>}
                        </fieldset>
                        <input type="submit" disabled={ processing || warning.length > 0 }className="bg-ruby cursor-pointer rounded disabled:cursor-not-allowed disabled:bg-gray-300 text-white p-2" />
                    </>
                )}
            </Form>
        </section>
    )

};