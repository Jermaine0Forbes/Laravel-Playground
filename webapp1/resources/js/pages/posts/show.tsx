import { Link, Head } from '@inertiajs/react';
import { route } from 'ziggy-js';
import type { PostShowProps } from '@/types/global';

export default function Show(children: PostShowProps) {
    const {
        category,
        post: { title, body, views, likes },
    } = children;

    return (
        <section className="mx-auto w-full max-w-4xl py-8">
            <Head title="Post" />
            <h1 className="mb-1 text-xl font-bold capitalize">{title}</h1>
            <div className="ruby mb-4 font-semibold capitalize">
                Categories:{' '}
                <Link href={route('categories.show', category?.slug)}>
                    {category?.name}
                </Link>
            </div>
            <p>{body}</p>
            <div className="text-md my-2 flex max-w-[200px] justify-between">
                <div className="capitalize">Views: {views}</div>
                <div className="capitalize">likes: {likes}</div>
            </div>
        </section>
    );
}
