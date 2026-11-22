import { Link, Head } from '@inertiajs/react';
import { Tabs } from 'radix-ui';
import { useState } from 'react';
import { route } from 'ziggy-js';
import type { UserShowProps } from '@/types/global';

export default function Show({ posts, user }: UserShowProps) {
    console.log(posts);
    const [tab, setTab] = useState<string>('tab1');

    return (
        <section className="mx-auto w-full max-w-4xl py-8">
            <Head title={user.name + ' profile'} />
            <div className="">
                <h1 className="text-xl font-semibold">{user.name}</h1>
                <Tabs.Root
                    className="TabsRoot my-4"
                    defaultValue="tab1"
                    onValueChange={(e) => setTab(e)}
                >
                    <Tabs.List
                        className="TabsList py-4"
                        aria-label="Manage your account"
                    >
                        <Tabs.Trigger
                            className={
                                tab == 'tab1'
                                    ? 'TabsTrigger mr-3 border-b-3 border-b-blue-600 text-lg text-blue-600'
                                    : 'TabsTrigger mr-3 text-lg'
                            }
                            value="tab1"
                        >
                            Posts
                        </Tabs.Trigger>
                        <Tabs.Trigger
                            className={
                                tab == 'tab2'
                                    ? 'TabsTrigger mr-3 border-b-3 border-b-blue-600 text-lg text-blue-600'
                                    : 'TabsTrigger mr-3 text-lg'
                            }
                            value="tab2"
                        >
                            History
                        </Tabs.Trigger>
                    </Tabs.List>
                    <Tabs.Content className="TabsContent" value="tab1">
                        {posts != null &&
                            posts.map((p) => (
                                <Link
                                    className="block border-b text-blue-600"
                                    href={route('posts.show', p.id)}
                                    key={p.id}
                                >
                                    - {p.title}
                                </Link>
                            ))}
                    </Tabs.Content>
                    <Tabs.Content className="TabsContent" value="tab2">
                        <div>insert history of posts</div>
                    </Tabs.Content>
                </Tabs.Root>
            </div>
        </section>
    );
}
