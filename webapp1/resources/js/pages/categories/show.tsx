import PostContent from '@/components/post-content';
import { CategoryShowProps, Post } from '@/types/global';
import { Link, router, Head,InfiniteScroll} from '@inertiajs/react';
import { ReactNode } from 'react';


export default function Show( children : CategoryShowProps) {
    const { category, posts}= children;
    console.log(children)
    return(
        <section className="max-w-4xl mx-auto py-8 w-full">
            <Head title={`Category: ${category?.name}`} />
            <h1 className="text-3xl font-bold capitalize mx-1 py-1">{category?.name}</h1>
            <div className="border-t-4 border-black pt-3 bg-gray-100">
                <InfiniteScroll data={"posts"}>
                {
                    posts?.data.length > 0 && posts?.data.map((post :Post, i : number) => <PostContent key={i} {...post} />)
                }

                </InfiniteScroll>
            </div>
        </section>
    )

};