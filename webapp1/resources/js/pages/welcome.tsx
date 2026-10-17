import { Head, Link, usePage } from '@inertiajs/react';
import { Text, Container, Box, Grid, Button, Tabs, Avatar, Flex, Badge, Link as LinkUI } from '@radix-ui/themes';
import NavHeaderHome from '@/components/nav-header-home';
import { NotebookPen, PencilLine, MessageSquare, Heart, Share2, Pencil } from 'lucide-react';

export default function Welcome() {
    const { auth } = usePage().props;

    return (
        <>
            <Head title="Welcome" />
            <section className="flex min-h-screen flex-col items-center text-[#1b1b18] ">
                <NavHeaderHome />
                <Container className="w-full mt-5" >
                    <Grid columns={{ initial: "1fr", md: "3fr 1fr" }} className="px-3" gap="4">
                        <Box id="main-container" className="w-full">
                            <div className="bg-white mb-4 rounded-sm p-2 grid grid-cols-3 gap-4">
                                <Button size="3" className="p-3 text-xl mr-3">
                                    <Pencil /> <Text className="py-2">Create a Post</Text>
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
                                        <div className="post-content">
                                            <Flex gap="3">
                                                <Avatar className="max-w-18.75 w-full" size="4" radius='full' fallback="A" />
                                                <div className="post-details">
                                                    <div className="post-details-1 flex align-items justify-between mb-2">
                                                        <Text size="5" className="capitalize font-bold">best travel destinations for 2022</Text>
                                                        
                                                    </div>
                                                    <Flex className="post-details-2 items-center mb-2" gap="3">
                                                        <Badge color="green" size="2" className="max-w-50 truncate">Travel Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Badge>
                                                        <Link className="post-details-user max-w-50 truncate" href="#" ><Text size="2">LisaM Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text></Link>
                                                        <span className="text-gray capitalize text-sm">posted by: 12 hours ago</span>
                                                    </Flex>
                                                    <div className='post-details-3 py-2 border-b border-b-gray-300 mb-3'>
                                                        <p className="overflow-hidden truncate italic font-light capitalize">what are your top travel destinations for 2022? share your recommendations! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at pretium enim. Proin arcu urna, tempor quis fringilla nec, euismod eu nunc. Sed congue auctor finibus. Sed sed viverra ex. Suspendisse in odio convallis, ullamcorper ligula porttitor, semper turpis. Nulla varius odio a augue commodo tristique. Mauris dignissim sit amet diam sit amet dictum. Phasellus massa orci, pulvinar eu nunc a, lacinia interdum ligula. Donec viverra convallis nibh. Phasellus massa magna, venenatis vel gravida vel, maximus at felis. Etiam nec viverra massa.</p>
                                                    </div>
                                                    <Flex className="post-details-4 gap-4 text-sm">
                                                        <Link className="flex gap-2">
                                                            <MessageSquare className="-scale-x-100 w-5" />
                                                            <span>Comment (0)</span>
                                                        </Link>
                                                        <Link className="flex gap-2">
                                                            <Heart className="w-5" />
                                                            <span>Like</span>
                                                        </Link>
                                                        <Link className="flex gap-2">
                                                            <Share2 className="w-5" />
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
                        <Box id="side-container" display={{ initial: "none", md: "block" }}>
                            <div className="side-container-block">
                                <div className="side-header-container">
                                    <Text size="4" className="side-header-title">Popular topics</Text>
                                </div>

                                <ul className="capitalize max-w-53.75">
                                    <li className="truncate capitalize">
                                        <LinkUI href="#" size="2">
                                            Photography Tips
                                        </LinkUI>
                                    </li>

                                    <li className="truncate capitalize">
                                        <LinkUI href="#" size="2">
                                            pc build advice Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                        </LinkUI>
                                    </li>

                                    <li className="truncate capitalize">
                                        <LinkUI href="#" size="2">
                                            best tv shows
                                        </LinkUI>
                                    </li>

                                    <li className="truncate capitalize">
                                        <LinkUI href="#" size="2">
                                            camping gear recommendations
                                        </LinkUI>
                                    </li>

                                </ul>
                            </div>
                            <div className="side-container-block">
                                <div className="side-header-container">
                                    <Text size="4" className="side-header-title">Top Contributors</Text>
                                </div>
                                <div className="flex gap-2">
                                    <Avatar className="max-w-18.75 w-full" size="2" radius='full' fallback="A" />
                                    <Flex justify="between" className=" w-full border-b border-b-gray-300 last:border-none py-2">
                                        <Text title="EmilyR" size="2" className="font-bold truncate overflow-hidden max-w-15">EmilyRLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
                                        <LinkUI href='#'>1,245 Posts</LinkUI>
                                    </Flex>
                                </div>
                            </div>
                            <div className="side-container-block">
                                <div className="side-header-container">
                                    <Text size="4" className="side-header-title">recent replies</Text>
                                </div>
                                <div className="flex gap-2 border-b border-b-gray-300 py-2 last:border-none">
                                    <div className="max-w-15 truncate font-bold">
                                        <LinkUI href="#" title="EmilyR" size="2">EmilyRLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</LinkUI>:
                                    </div>
                                    <p className="max-w-50 truncate">"<Text size="1">I agree, that's a great point Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>"</p>
                                </div>
                            </div>
                        </Box>
                    </Grid>
                </Container>
            </section>
        </>
    );
}
