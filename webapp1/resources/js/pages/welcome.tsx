import { Head} from '@inertiajs/react';
import { Text, Container, Box, Grid, Button, Tabs, Avatar, Flex, Link as LinkUI } from '@radix-ui/themes';
import NavHeaderHome from '@/components/nav-header-home';
import SectionTabsHome from '@/components/section-tabs-home';
import { PencilLine, MessageSquare, Heart, Share2, Pencil } from 'lucide-react';


export default function Welcome() {

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
                            <SectionTabsHome/>
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
