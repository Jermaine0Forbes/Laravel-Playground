import { CategoryListProps, Category } from '@/types/global';
import { Link, Head, InfiniteScroll } from '@inertiajs/react';
import { route } from 'ziggy-js';
import {  Box, Card } from '@radix-ui/themes';

export default function Index(children: CategoryListProps) {
    const { categories } = children
    return (
        <section className="max-w-4xl mx-auto py-8 w-full">
            <Head title="List categories" />
            <h1 className="text-2xl font-bold py-1">Categories</h1>
            <InfiniteScroll data="categories">
                {
                    categories.data.length > 0 && categories.data.map((cat: Category, i: number) => (
                        <Link href={route('categories.show', cat.slug)} key={i}>
                            <Box maxWidth={'240px'} className="mb-3">
                                <Card>
                                    <h3 className="text-lg font-bold block">{cat.name}</h3>
                                    <div className="flex gap-2 justify-between text-sm mt-2">
                                        <p className="font-light">Users: <span className="font-bold">{cat.user_count}</span></p>
                                        <p className="font-light">Posts: <span className="font-bold">{cat.post_count}</span></p>
                                    </div>
                                </Card>
                            </Box>
                        </Link>
                    ))
                }
            </InfiniteScroll>
        </section>
    )

};