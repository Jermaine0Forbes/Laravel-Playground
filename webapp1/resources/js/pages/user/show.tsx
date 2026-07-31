import { Link, router, InfiniteScroll } from '@inertiajs/react';
import { ReactNode } from 'react';
import { Tabs  } from 'radix-ui';
import { route } from 'ziggy-js';

interface IProfile
{
    posts: Array<object> | null,
    user: object,
    history?: object
}

export default function Show({ posts, user} : IProfile) {
     console.log(posts)
    return (
        <div className="max-w-4xl mx-auto py-8">
            <h1>{user.name}</h1>
            <Tabs.Root className="TabsRoot" defaultValue="tab1">
                <Tabs.List className="TabsList" aria-label="Manage your account">
                    <Tabs.Trigger className="TabsTrigger" value="tab1">
                        Posts
                    </Tabs.Trigger>
                    <Tabs.Trigger className="TabsTrigger" value="tab2">
                        History
                    </Tabs.Trigger>
                </Tabs.List>
                <Tabs.Content className="TabsContent" value="tab1">
                    {
                        posts != null && posts.map( p => <Link href={route("posts.show", p.id)} key={p.id}>{p.title}</Link>)
                    }
                </Tabs.Content>
                <Tabs.Content className="TabsContent" value="tab2">
                    <div>insert history of posts</div>
                </Tabs.Content>
            </Tabs.Root>
        </div>
    )
};