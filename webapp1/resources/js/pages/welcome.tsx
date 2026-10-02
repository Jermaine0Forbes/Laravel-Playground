import { Head, Link, usePage } from '@inertiajs/react';
import { dashboard, login, register } from '@/routes';
import posts from '@/routes/posts';
import { Text, Container, Box, Grid, Button, TabNav, Tabs, Avatar } from '@radix-ui/themes';
import NavHeaderHome from '@/components/nav-header-home';
import { NotebookPen, PencilLine } from 'lucide-react';

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

                                    <Tabs.Content value="all">
                                        <div className="min-h-50 mb-4 rounded-md bg-white p-2 flex">
                                            <Text size="2">Make changes to your account.</Text>

                                        </div>
                                    </Tabs.Content>
                                    <Tabs.Content value="tech">
                                        <Text size="2">Make changes to your account.</Text>
                                    </Tabs.Content>
                                    <Tabs.Content value="gaming">
                                        <Text size="2">Make changes to your account.</Text>
                                    </Tabs.Content>
                                    <Tabs.Content value="travel">
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
