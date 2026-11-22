import { Link } from '@inertiajs/react';
import { Text, Avatar, Flex, Badge } from '@radix-ui/themes';
import { MessageSquare, Heart, Share2, Eye } from 'lucide-react';
import { route } from 'ziggy-js';
import type { Post } from '@/types/global';

export default function PostContent(props: Post) {
    const { title, category, body, slug, likes, views, user, updated_at } =
        props;

    return (
        <div className="post-content">
            <Flex gap="3">
                <Link href={route('user.show', user?.id)}>
                    <Avatar
                        className="w-full max-w-18.75"
                        size="4"
                        radius="full"
                        fallback={user?.name[0]}
                    />
                </Link>
                <div className="post-details">
                    <Link
                        href={route('posts.show', {
                            category: category?.slug,
                            post: slug,
                        })}
                    >
                        <div
                            className="post-details-1 align-items mb-2 flex justify-between truncate"
                            title={title}
                        >
                            <Text size="5" className="font-bold capitalize">
                                {title}
                            </Text>
                        </div>
                        <Flex
                            className="post-details-2 mb-2 items-center"
                            gap="3"
                        >
                            <Badge
                                color="green"
                                size="2"
                                className="category-title max-w-50 truncate"
                            >
                                {category?.name}
                            </Badge>
                            <span className="user-name post-details-user max-w-50 truncate">
                                <Text size="2">
                                    {typeof user !== 'string'
                                        ? user?.name
                                        : null}
                                </Text>
                            </span>
                            <span className="text-gray text-sm capitalize">
                                posted by: {updated_at}
                            </span>
                        </Flex>
                        <div className="post-details-3 mb-3 border-b border-b-gray-300 py-2">
                            <p className="truncate overflow-hidden font-light capitalize italic">
                                {body}
                            </p>
                        </div>
                    </Link>
                    <Flex className="post-details-4 gap-4 text-sm">
                        <Link className="flex gap-2">
                            <Eye className="w-5" />
                            <span>Views ({views})</span>
                        </Link>
                        <Link className="flex gap-2">
                            <MessageSquare className="w-5 -scale-x-100" />
                            <span>Comment (0)</span>
                        </Link>

                        <Link className="flex gap-2">
                            <Heart className="w-5" />
                            <span>Like ({likes})</span>
                        </Link>
                        <Link className="flex gap-2">
                            <Share2 className="w-5" />
                            <span>Share</span>
                        </Link>
                    </Flex>
                </div>
            </Flex>
        </div>
    );
}
