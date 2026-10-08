import { Head, Link, usePage } from '@inertiajs/react';
import { dashboard, login, register } from '@/routes';
import posts from '@/routes/posts';
import { Text, Container, Box, Grid, Button, Tabs, Avatar, Flex, Badge } from '@radix-ui/themes';
import NavHeaderHome from '@/components/nav-header-home';
import { NotebookPen, PencilLine, MessageSquare, Heart, Share2, Pencil } from 'lucide-react';

export default function Welcome() {
    const { auth } = usePage().props;

    return (
        <>
            <Head title="Welcome" />
            <section className="flex min-h-screen flex-col items-center text-[#1b1b18] ">
                <NavHeaderHome />
                <h2>Post whatever you want</h2>
                <Container className="w-full mt-5" >
                    <Grid columns={{ initial: "1fr", md: "3fr 1fr" }} gap="4">
                        <Box>
                            <div className="bg-white mb-4 rounded-sm p-2 grid grid-cols-3 gap-4">
                                <Button size="3" className="p-3 text-xl mr-3">
                                    <NotebookPen /> <Text className="py-2">Create a Post</Text>
                                </Button>
                                <Button size="3" className="p-3 text-xl mr-3">
                                    <PencilLine /> <Text className="py-2">Create a Category</Text>
                                </Button>
                            </div>
                            <Tabs.Root value="all">
                                <div className="bg-white mb-4 rounded-sm">

                                    <Tabs.List >
                                        <Tabs.Trigger value="all" >
                                            All
                                        </Tabs.Trigger>
                                        <Tabs.Trigger value="general">General</Tabs.Trigger>
                                        <Tabs.Trigger value="tech">Tech</Tabs.Trigger>
                                        <Tabs.Trigger value="gaming">Gaming</Tabs.Trigger>
                                        <Tabs.Trigger value="travel">Travel</Tabs.Trigger>
                                    </Tabs.List>

                                </div>

                                <div id="tabs-content-container">

                                    <Tabs.Content className="post-content-container" value="all">
                                        <div className="min-h-40 mb-4 rounded-md bg-white p-5 shadow-sm">
                                            <Flex gap="3">
                                                <Avatar className="max-w-[75]-px w-full" size="4" radius='full' fallback="A" />
                                                <div className="post-details">
                                                    <div className="post-details-block-1 flex align-items justify-between mb-2">
                                                        <Text size="5" className="capitalize font-bold">best travel destinations for 2022</Text>
                                                        <span className="text-gray capitalize text-sm">posted by: 12 hours ago</span>
                                                    </div>
                                                    <Flex className="post-details-2 items-center mb-2" gap="3">
                                                        <Badge color="green" size="2">Travel</Badge>
                                                        <Link className="post-details-user" href="#"><Text size="2">LisaM</Text></Link>
                                                    </Flex>
                                                    <div className='post-details-3 py-3 border-b border-b-gray-300 mb-2'>
                                                        <p className="overflow-hidden truncate italic font-light capitalize">what are your top travel destinations for 2022? share your recommendations! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at pretium enim. Proin arcu urna, tempor quis fringilla nec, euismod eu nunc. Sed congue auctor finibus. Sed sed viverra ex. Suspendisse in odio convallis, ullamcorper ligula porttitor, semper turpis. Nulla varius odio a augue commodo tristique. Mauris dignissim sit amet diam sit amet dictum. Phasellus massa orci, pulvinar eu nunc a, lacinia interdum ligula. Donec viverra convallis nibh. Phasellus massa magna, venenatis vel gravida vel, maximus at felis. Etiam nec viverra massa.</p>
                                                    </div>
                                                    <Flex className="post-details-4 gap-4 text-sm">
                                                        <Link className="flex gap-2">
                                                            <MessageSquare className="-scale-x-100 w-[20px]" />
                                                            <span>Comment (0)</span>
                                                        </Link>
                                                        <Link className="flex gap-2">
                                                            <Heart className="w-[20px]"/>
                                                            <span>Like</span>
                                                        </Link>
                                                        <Link className="flex gap-2">
                                                            <Share2 className="w-[20px]"/>
                                                            <span>Share</span>
                                                        </Link>
                                                    </Flex>
                                                </div>
                                            </Flex>
                                        </div>
                                    </Tabs.Content>
                                    <Tabs.Content className="post-content-container" value="tech">
                                        <Text size="2">Make changes to your account.</Text>
                                    </Tabs.Content>
                                    <Tabs.Content className="post-content-container" value="gaming">
                                        <Text size="2">Make changes to your account.</Text>
                                    </Tabs.Content>
                                    <Tabs.Content className="post-content-container" value="travel">
                                        <Text size="2">Make changes to your account.</Text>
                                    </Tabs.Content>

                                </div>

                            </Tabs.Root>
                        </Box>
                        <Box display={{ initial: "none", md: "block" }}>
                            <div className="h-70 mb-4 rounded-md bg-slate-300"> side content</div>
                            <div className="h-70 mb-4 rounded-md bg-slate-300"> side content</div>
                            <div className="h-70 mb-4 rounded-md bg-slate-300"> side content</div>
                        </Box>
                    </Grid>
                </Container>
            </section>
        </>
    );
}
