import { Link, router, InfiniteScroll } from '@inertiajs/react';
import { route } from 'ziggy-js';

type Post = {
    id: number,
    title: string,
    body: string,
    views: number,
    votes: number,
    user: string | Author
}

type Author = {
    name: string,
    id: number
}

function isAuthor(val: any): val is Author {
    return "id" in val && typeof val != "string";
}
export default function Index({ posts }: { posts: any }) {
    const handleDelete = (id: number) => {
        if (confirm('Delete this post?')) {
            router.delete(route('posts.destroy', id));
        }
    };

    console.log(posts)

    return (
        <div className="max-w-4xl mx-auto py-8">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold">Posts</h1>
                <Link
                    href={route('posts.create')}
                    className="bg-blue-600 text-white px-4 py-2 rounded"
                >
                    New Post
                </Link>
            </div>

            <InfiniteScroll data={"posts"}>
                <table className="w-full border-collapse">
                    <thead>
                        <tr className="text-left border-b">
                            <th className="py-2">Title</th>
                            <th className="py-2">Author</th>
                            <th className="py-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {posts.data.map((post: Post) => (

                            <tr key={post.id} className="border-b">
                                <td className="py-2">{post.title}</td>
                                <td className="py-2">
                                    <Link
                                        className="text-blue-600"
                                        href={isAuthor(post.user) ? "/user/" + post?.user?.id : undefined}
                                    // href={route('users.show', typeof  post.user == "object" ? post.user.id: undefined)}
                                    >
                                        {typeof post.user == "object" ? post?.user?.name : ''}
                                    </Link>
                                </td>
                                <td className="py-2 space-x-2">
                                    <Link
                                        href={route('posts.edit', post.id)}
                                        className="text-blue-600"
                                    >
                                        Edit
                                    </Link>
                                    <button
                                        onClick={() => handleDelete(post.id)}
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
    );
}