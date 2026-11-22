import { Link, Head, InfiniteScroll } from '@inertiajs/react';
import { Box, Card } from '@radix-ui/themes';
import { route } from 'ziggy-js';
import { create } from '@/routes/categories';
import type { CategoryListProps, Category } from '@/types/global';

export default function Index(children: CategoryListProps) {
    const { categories } = children;

    return (
        <section className="mx-auto w-full max-w-4xl py-8">
            <Head title="List categories" />
            <div className="mb-3 flex justify-between">
                <h1 className="py-1 text-2xl font-bold">Categories</h1>
                <Link
                    href={create()}
                    className="bg-ruby cursor-pointer rounded-sm p-2 text-white"
                >
                    Create Category
                </Link>
            </div>
            <InfiniteScroll data="categories">
                {categories.data.length > 0 &&
                    categories.data.map((cat: Category, i: number) => (
                        <Link href={route('categories.show', cat.slug)} key={i}>
                            <Box maxWidth={'400px'} className="mb-3">
                                <Card>
                                    <h3 className="block text-lg font-bold">
                                        {cat.name}
                                    </h3>
                                    <div className="mt-2 flex justify-between gap-2 text-sm">
                                        <p className="font-light">
                                            Users:{' '}
                                            <span className="font-bold">
                                                {cat.user_count}
                                            </span>
                                        </p>
                                        <p className="font-light">
                                            Posts:{' '}
                                            <span className="font-bold">
                                                {cat.post_count}
                                            </span>
                                        </p>
                                    </div>
                                </Card>
                            </Box>
                        </Link>
                    ))}
            </InfiniteScroll>
        </section>
    );
}
