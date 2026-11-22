import { Link } from '@inertiajs/react';
import { Text, Tabs, Avatar, Flex, Badge } from '@radix-ui/themes';
import { MessageSquare, Heart, Share2 } from 'lucide-react';

export default function SectionTabsHome() {
    return (
        <section>
            <Tabs.Root value="all">
                <div className="mb-4 rounded-sm bg-white">
                    <Tabs.List>
                        <Tabs.Trigger value="all">All</Tabs.Trigger>
                        <Tabs.Trigger value="general">General</Tabs.Trigger>
                        <Tabs.Trigger value="tech">Tech</Tabs.Trigger>
                        <Tabs.Trigger value="gaming">Gaming</Tabs.Trigger>
                        <Tabs.Trigger value="travel">Travel</Tabs.Trigger>
                    </Tabs.List>
                </div>

                <div id="tabs-content-container">
                    <Tabs.Content
                        className="post-content-container"
                        value="all"
                    >
                        <div className="post-content">
                            <Flex gap="3">
                                <Avatar
                                    className="w-full max-w-18.75"
                                    size="4"
                                    radius="full"
                                    fallback="A"
                                />
                                <div className="post-details">
                                    <div className="post-details-1 align-items mb-2 flex justify-between">
                                        <Text
                                            size="5"
                                            className="font-bold capitalize"
                                        >
                                            best travel destinations for 2022
                                        </Text>
                                    </div>
                                    <Flex
                                        className="post-details-2 mb-2 items-center"
                                        gap="3"
                                    >
                                        <Badge
                                            color="green"
                                            size="2"
                                            className="max-w-50 truncate"
                                        >
                                            Travel Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit, sed do
                                            eiusmod tempor incididunt ut labore
                                            et dolore magna aliqua. Ut enim ad
                                            minim veniam, quis nostrud
                                            exercitation ullamco laboris nisi ut
                                            aliquip ex ea commodo consequat.
                                            Duis aute irure dolor in
                                            reprehenderit in voluptate velit
                                            esse cillum dolore eu fugiat nulla
                                            pariatur. Excepteur sint occaecat
                                            cupidatat non proident, sunt in
                                            culpa qui officia deserunt mollit
                                            anim id est laborum.
                                        </Badge>
                                        <Link
                                            className="post-details-user max-w-50 truncate"
                                            href="#"
                                        >
                                            <Text size="2">
                                                LisaM Lorem ipsum dolor sit
                                                amet, consectetur adipiscing
                                                elit, sed do eiusmod tempor
                                                incididunt ut labore et dolore
                                                magna aliqua. Ut enim ad minim
                                                veniam, quis nostrud
                                                exercitation ullamco laboris
                                                nisi ut aliquip ex ea commodo
                                                consequat. Duis aute irure dolor
                                                in reprehenderit in voluptate
                                                velit esse cillum dolore eu
                                                fugiat nulla pariatur. Excepteur
                                                sint occaecat cupidatat non
                                                proident, sunt in culpa qui
                                                officia deserunt mollit anim id
                                                est laborum.
                                            </Text>
                                        </Link>
                                        <span className="text-gray text-sm capitalize">
                                            posted by: 12 hours ago
                                        </span>
                                    </Flex>
                                    <div className="post-details-3 mb-3 border-b border-b-gray-300 py-2">
                                        <p className="truncate overflow-hidden font-light capitalize italic">
                                            what are your top travel
                                            destinations for 2022? share your
                                            recommendations! Lorem ipsum dolor
                                            sit amet, consectetur adipiscing
                                            elit. Donec at pretium enim. Proin
                                            arcu urna, tempor quis fringilla
                                            nec, euismod eu nunc. Sed congue
                                            auctor finibus. Sed sed viverra ex.
                                            Suspendisse in odio convallis,
                                            ullamcorper ligula porttitor, semper
                                            turpis. Nulla varius odio a augue
                                            commodo tristique. Mauris dignissim
                                            sit amet diam sit amet dictum.
                                            Phasellus massa orci, pulvinar eu
                                            nunc a, lacinia interdum ligula.
                                            Donec viverra convallis nibh.
                                            Phasellus massa magna, venenatis vel
                                            gravida vel, maximus at felis. Etiam
                                            nec viverra massa.
                                        </p>
                                    </div>
                                    <Flex className="post-details-4 gap-4 text-sm">
                                        <Link className="flex gap-2">
                                            <MessageSquare className="w-5 -scale-x-100" />
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
                    <Tabs.Content
                        className="post-content-container"
                        value="tech"
                    >
                        <Text size="2">Make changes to your account.</Text>
                    </Tabs.Content>
                    <Tabs.Content
                        className="post-content-container"
                        value="gaming"
                    >
                        <Text size="2">Make changes to your account.</Text>
                    </Tabs.Content>
                    <Tabs.Content
                        className="post-content-container"
                        value="travel"
                    >
                        <Text size="2">Make changes to your account.</Text>
                    </Tabs.Content>
                </div>
            </Tabs.Root>
        </section>
    );
}
