import { Link, router, InfiniteScroll, Head } from '@inertiajs/react';
import { route } from 'ziggy-js';
import { isAuthor } from '@/lib/utils';
import type { Post, PostIndexProps } from '@/types/global';


export default function Index({ posts }: PostIndexProps) {
    const handleDelete = (id: number) => {
        if (confirm('Delete this post?')) {
            router.delete(route('posts.destroy', id));
        }
    };

    return (
        <section>
            <Head title="Posts" />
            <div className="mx-auto max-w-4xl py-8">
                <div className="mb-6 flex items-center justify-between">
                    <h1 className="text-2xl font-bold">Posts</h1>
                    <Link
                        href={route('posts.create', '')}
                        className="bg-ruby rounded px-4 py-2 text-white"
                    >
                        New Post
                    </Link>
                </div>

                <InfiniteScroll data={'posts'}>
                    <table className="w-full border-collapse">
                        <thead>
                            <tr className="border-b text-left">
                                <th className="py-2">Title</th>
                                <th className="py-2">Category</th>
                                <th className="py-2">Author</th>
                                <th className="py-2">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {posts.data.map((post: Post) => (
                                <tr key={post.id} className="border-b">
                                    <td className="py-2">
                                        <Link
                                            href={route('posts.show', {
                                                category: post?.category?.slug,
                                                post: post?.slug,
                                            })}
                                        >
                                            {post.title}
                                        </Link>
                                    </td>
                                    <td className="py-2">
                                        <Link
                                            href={route(
                                                'categories.show',
                                                post?.category?.slug,
                                            )}
                                        >
                                            {post?.category?.name}
                                        </Link>
                                    </td>
                                    <td className="py-2">
                                        <Link
                                            className="text-blue-600"
                                            href={route(
                                                'user.show',
                                                isAuthor(post.user)
                                                    ? post?.user?.id
                                                    : undefined,
                                            )}
                                        >
                                            {typeof post.user == 'object'
                                                ? post?.user?.name
                                                : ''}
                                        </Link>
                                    </td>
                                    <td className="space-x-2 py-2">
                                        <Link
                                            href={route('posts.edit', post.id)}
                                            className="text-blue-600"
                                        >
                                            Edit
                                        </Link>
                                        <button
                                            onClick={() =>
                                                handleDelete(post.id)
                                            }
                                            className="text-red-600"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </InfiniteScroll>
            </div>
        </section>
    );
}
