import { Link, Head} from '@inertiajs/react';
import { ReactNode, useState } from 'react';
import { Tabs } from 'radix-ui';
import { route } from 'ziggy-js';

interface IProfile {
    posts: Post[] | null,
    user: User,
    history?: object
}

type Post = {
    id: number,
    title: string
};

type User = {
    id: number,
    name: string,
    email: string,

}

export default function Show({ posts, user }: IProfile) {
    console.log(posts)
    const [tab, setTab] = useState<string>("tab1")
    return (
        <section className="max-w-4xl mx-auto py-8 w-full">
            <Head title={user.name+" profile"} />
            <div className="max-w-lg">
                <h1 className="text-xl font-semibold">{user.name}</h1>
                <Tabs.Root className="TabsRoot my-4" defaultValue="tab1" onValueChange={(e) => setTab(e)}>
                    <Tabs.List className="TabsList py-4" aria-label="Manage your account">
                        <Tabs.Trigger className={tab == "tab1" ? "TabsTrigger text-lg mr-3 text-blue-600  border-b-3 border-b-blue-600" : "TabsTrigger text-lg mr-3 "} value="tab1">
                            Posts
                        </Tabs.Trigger>
                        <Tabs.Trigger className={tab == "tab2" ? "TabsTrigger text-lg mr-3 text-blue-600 border-b-3 border-b-blue-600" : "TabsTrigger text-lg mr-3 "} value="tab2">
                            History
                        </Tabs.Trigger>
                    </Tabs.List>
                    <Tabs.Content className="TabsContent" value="tab1">
                        {
                            posts != null && posts.map(p => <Link className="text-blue-600 block" href={route("posts.show", p.id)} key={p.id}>- {p.title}</Link>)
                        }
                    </Tabs.Content>
                    <Tabs.Content className="TabsContent" value="tab2">
                        <div>insert history of posts</div>
                    </Tabs.Content>
                </Tabs.Root>

            </div>
        </section>
    )
};