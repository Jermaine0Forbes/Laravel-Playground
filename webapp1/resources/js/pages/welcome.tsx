import { Head, Link } from '@inertiajs/react';
import {
    Text,
    Container,
    Box,
    Grid,
    Button,
    Avatar,
    Flex,
    Link as LinkUI,
} from '@radix-ui/themes';
import { PencilLine, Pencil } from 'lucide-react';
import NavHeaderHome from '@/components/nav-header-home';
import SectionTabsHome from '@/components/section-tabs-home';
import SideContainerBlock from '@/components/side-container-block';
import categories from '@/routes/categories';
import posts from '@/routes/posts';

export default function Welcome() {
    return (
        <>
            <Head title="Welcome" />
            <section className="flex min-h-screen flex-col items-center text-[#1b1b18]">
                <NavHeaderHome />
                <Container className="mt-5 w-full">
                    <Grid
                        columns={{ initial: '1fr', md: '3fr 1fr' }}
                        className="px-3"
                        gap="4"
                    >
                        <Box id="main-container" className="w-full">
                            <div className="mb-4 grid grid-cols-3 gap-4 rounded-sm bg-white p-2">
                                <Link href={posts.create()}>
                                    <Button
                                        size="3"
                                        className="home-action-btn"
                                    >
                                        <Pencil />{' '}
                                        <Text className="py-2">
                                            Create a Post
                                        </Text>
                                    </Button>
                                </Link>
                                <Link href={categories.create()}>
                                    <Button
                                        size="3"
                                        className="home-action-btn"
                                    >
                                        <PencilLine />{' '}
                                        <Text className="py-2">
                                            Create a Category
                                        </Text>
                                    </Button>
                                </Link>
                            </div>
                            <SectionTabsHome />
                        </Box>
                        <Box
                            id="side-container"
                            display={{ initial: 'none', md: 'block' }}
                        >
                            <SideContainerBlock title="Popular topicss">
                                <ul className="max-w-53.75 capitalize">
                                    <li className="truncate capitalize">
                                        <LinkUI href="#" size="2">
                                            Photography Tips
                                        </LinkUI>
                                    </li>

                                    <li className="truncate capitalize">
                                        <LinkUI href="#" size="2">
                                            pc build advice Lorem ipsum dolor
                                            sit amet, consectetur adipiscing
                                            elit, sed do eiusmod tempor
                                            incididunt ut labore et dolore magna
                                            aliqua. Ut enim ad minim veniam,
                                            quis nostrud exercitation ullamco
                                            laboris nisi ut aliquip ex ea
                                            commodo consequat.
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
                            </SideContainerBlock>
                            <SideContainerBlock title="Top Contributors">
                                <div className="flex gap-2">
                                    <Avatar
                                        className="w-full max-w-18.75"
                                        size="2"
                                        radius="full"
                                        fallback="A"
                                    />
                                    <Flex
                                        justify="between"
                                        className="w-full border-b border-b-gray-300 py-2 last:border-none"
                                    >
                                        <Text
                                            title="EmilyR"
                                            size="2"
                                            className="max-w-15 truncate overflow-hidden font-bold"
                                        >
                                            EmilyRLorem ipsum dolor sit amet,
                                            consectetur adipiscing elit, sed do
                                            eiusmod tempor incididunt ut labore
                                            et dolore magna aliqua. Ut enim ad
                                            minim veniam, quis nostrud
                                            exercitation ullamco laboris nisi ut
                                            aliquip ex ea commodo consequat.
                                        </Text>
                                        <LinkUI href="#">1,245 Posts</LinkUI>
                                    </Flex>
                                </div>
                            </SideContainerBlock>

                            <SideContainerBlock title="recent replies">
                                <div className="flex gap-2 border-b border-b-gray-300 py-2 last:border-none">
                                    <div className="max-w-15 truncate font-bold">
                                        <LinkUI
                                            href="#"
                                            title="EmilyR"
                                            size="2"
                                        >
                                            EmilyRLorem ipsum dolor sit amet,
                                            consectetur adipiscing elit, sed do
                                            eiusmod tempor incididunt ut labore
                                            et dolore magna aliqua. Ut enim ad
                                            minim veniam, quis nostrud
                                            exercitation ullamco laboris nisi ut
                                            aliquip ex ea commodo consequat.
                                        </LinkUI>
                                        :
                                    </div>
                                    <p className="max-w-50 truncate">
                                        "
                                        <Text size="1">
                                            I agree, that's a great point Lorem
                                            ipsum dolor sit amet, consectetur
                                            adipiscing elit, sed do eiusmod
                                            tempor incididunt ut labore et
                                            dolore magna aliqua. Ut enim ad
                                            minim veniam, quis nostrud
                                            exercitation ullamco laboris nisi ut
                                            aliquip ex ea commodo consequat.
                                        </Text>
                                        "
                                    </p>
                                </div>
                            </SideContainerBlock>
                        </Box>
                    </Grid>
                </Container>
            </section>
        </>
    );
}
