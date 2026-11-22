import { Head, Form } from '@inertiajs/react';
import { useState } from 'react';
import { store } from '@/routes/categories';

type CategoryCreateProps = {
    categories: string[];
};

export default function Create(children: CategoryCreateProps) {
    const { categories } = children;
    console.log(categories);
    const [name, setName] = useState<string>('');
    const [warning, setWarning] = useState<string>('');
    const handleCategoryName = (name: string) => {
        setName(name);

        if (categories.includes(name)) {
            setWarning('This category already exists');
        } else {
            setWarning('');
        }
    };

    return (
        <section className="mx-auto w-full max-w-4xl py-8">
            <Head title="Create category" />
            <h1 className="text-xl font-bold">Create a category</h1>
            <Form {...store.form()} method="post">
                {({ errors, processing }) => (
                    <>
                        <fieldset className="my-4">
                            <label htmlFor="namee">Category</label>
                            <input
                                className="border-color-black block w-1/2 rounded border px-2 py-2"
                                type="text"
                                name="name"
                                value={name}
                                onChange={(e) =>
                                    handleCategoryName(e.target.value)
                                }
                            />
                            {warning && (
                                <div className="text-red-800">{warning}</div>
                            )}
                            {errors.name && (
                                <div className="text-red-800">
                                    {errors.name}
                                </div>
                            )}
                        </fieldset>
                        <input
                            type="submit"
                            disabled={processing || warning.length > 0}
                            className="bg-ruby cursor-pointer rounded p-2 text-white disabled:cursor-not-allowed disabled:bg-gray-300"
                        />
                    </>
                )}
            </Form>
        </section>
    );
}
