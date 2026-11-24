import { Link, router, InfiniteScroll, Head, usePage } from '@inertiajs/react';
import { route } from 'ziggy-js';
import { isAuthor, canDeletePost } from '@/lib/utils';
import type { AuthUser, Post, PostIndexProps } from '@/types/global';
import { AlertDialog, Button, Flex } from '@radix-ui/themes';
// import { Toaster } from '@/components/ui/sonner';
import { toast, Toaster } from 'sonner';
import { useState } from 'react';


export default function Index({ posts }: PostIndexProps) {

    const { auth}= usePage().props;
    const {user: authUser} = auth;
    const [open, setOpen] = useState<boolean>(false);
    const [postId, setPostId]= useState<number>(0);

    const canDelete = (post: Post, user: AuthUser = authUser) => {
        if(canDeletePost(post, user))
        {
            setOpen(true)
            setPostId(post?.id)
            return;
        }
        toast("User cannot delete post");

    };

    const handleDelete = () => {

    };
    console.log(posts)

    return (
        <section data-testid="posts-index-section">
            <Toaster position='top-center' />
            <Head title="Posts" />
            <div className="mx-auto max-w-4xl py-8">
                <div className="mb-6 flex items-center justify-between">
                    <h1 className="text-2xl font-bold">Posts</h1>
                    <Link
                        href={route('posts.create')}
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
                                                canDelete(post)
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
            <AlertDialog.Root open={open}>
                <AlertDialog.Content maxWidth="450px">
                    <AlertDialog.Title>Delete Post</AlertDialog.Title>
                    <AlertDialog.Description>Do you want to delete this post</AlertDialog.Description>
                    <Flex gap="3" mt="4" justify="end">
                        <AlertDialog.Cancel>
                            <Button variant="soft" color="gray">
                                Cancel
                            </Button>
                        </AlertDialog.Cancel>
                        <AlertDialog.Action>
                            <Button variant="solid" onClick={handleDelete} >
                                Delete it
                            </Button>
                        </AlertDialog.Action>
                    </Flex>
                </AlertDialog.Content>
            </AlertDialog.Root>
        </section>
    );
}
