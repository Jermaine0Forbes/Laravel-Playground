import { Head, InfiniteScroll } from '@inertiajs/react';
import PostContent from '@/components/post-content';
import type { CategoryShowProps, Post } from '@/types/global';

export default function Show(children: CategoryShowProps) {
    const { category, posts } = children;
    console.log(children);

    return (
        <section className="mx-auto w-full max-w-4xl py-8">
            <Head title={`Category: ${category?.name}`} />
            <h1 className="mx-1 py-1 text-3xl font-bold capitalize">
                {category?.name}
            </h1>
            <div className="border-t-4 border-black bg-gray-100 pt-3">
                <InfiniteScroll data={'posts'}>
                    {posts?.data.length > 0 &&
                        posts?.data.map((post: Post, i: number) => (
                            <PostContent key={i} {...post} />
                        ))}
                </InfiniteScroll>
            </div>
        </section>
    );
}
