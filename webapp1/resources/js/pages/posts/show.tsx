import { PostShowProps } from '@/types/global';
import { Link, router, Head} from '@inertiajs/react';
import { ReactNode } from 'react';
import { route } from 'ziggy-js';

export default function Show( children : PostShowProps) {
   const { category, post: {title, body, views, likes}} = children;
    return(
        <section className="max-w-4xl mx-auto py-8 w-full">
            <Head title="Post"/>
            <h1 className="text-xl font-bold capitalize mb-1">{title}</h1>
             <div className="font-semibold capitalize ruby mb-4">Categories: <Link href={route('categories.show',category?.slug)}>{category?.name}</Link></div>
            <p>{body}</p>
            <div className="text-md flex max-w-[200px] justify-between my-2">
                <div className="capitalize">Views: {views}</div>
                <div className="capitalize">likes: {likes}</div>
            </div>
        </section>
    )

};