import { Post } from '@/types/global';
import { Link } from '@inertiajs/react';
import { Text, Avatar, Flex, Badge } from '@radix-ui/themes';
import { MessageSquare, Heart, Share2, Eye } from 'lucide-react';
import { route } from 'ziggy-js';


export default function PostContent(props: Post) {
    const { title, category, body, slug, likes, views, user, updated_at } = props;

    return (
        <div className="post-content">
            <Flex gap="3">
                <Link href={route('user.show', user?.id)}>
                    <Avatar className="max-w-18.75 w-full" size="4" radius='full' fallback={user?.name[0]} />
                </Link>
                <div className="post-details">
                    <Link href={route('posts.show', { category: category?.slug, post: slug })}>
                        <div className="post-details-1 flex align-items justify-between mb-2  truncate" title={title}>
                            <Text size="5" className="capitalize font-bold">{title}</Text>
                        </div>
                        <Flex className="post-details-2 items-center mb-2" gap="3">
                            <Badge color="green" size="2" className="category-title max-w-50 truncate">{category?.name}</Badge>
                            <span className="user-name post-details-user max-w-50 truncate"  ><Text size="2">{typeof user !== "string" ? user?.name : null}</Text></span >
                            <span className="text-gray capitalize text-sm">posted by: {updated_at}</span>
                        </Flex>
                        <div className='post-details-3 py-2 border-b border-b-gray-300 mb-3'>
                            <p className="overflow-hidden truncate italic font-light capitalize">{body}</p>
                        </div>
                    </Link>
                    <Flex className="post-details-4 gap-4 text-sm">
                        <Link className="flex gap-2">
                            <Eye className="w-5" />
                            <span>Views ({views})</span>
                        </Link >
                        <Link className="flex gap-2">
                            <MessageSquare className="-scale-x-100 w-5" />
                            <span>Comment (0)</span>
                        </Link >

                        <Link className="flex gap-2">
                            <Heart className="w-5" />
                            <span>Like ({likes})</span>
                        </Link >
                        <Link className="flex gap-2">
                            <Share2 className="w-5" />
                            <span>Share</span>
                        </Link >
                    </Flex>
                </div>
            </Flex >
        </div >
    )
}