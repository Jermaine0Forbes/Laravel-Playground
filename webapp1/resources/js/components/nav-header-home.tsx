import { Link, usePage } from '@inertiajs/react';
import { dashboard, login, register, logout } from '@/routes';
import posts from '@/routes/posts';
import { Text, TextField, Flex, Container, Separator } from '@radix-ui/themes';
import { NotebookPen, Search } from 'lucide-react';

export default function NavHeaderHome() {
    const { auth } = usePage().props;

    return (
        <header className="border-b-2 border-black-400 border-b-black-400 mb-6 w-full flex justify-center bg-black text-white">
            <Container
                id="nav-container"
            >
                <div className=" w-full text-sm not-has-[nav]:hidden flex justify-between py-3">
                    <Flex gap="2">
                        <NotebookPen />
                        <Text weight={"bold"} wrap="wrap" className="text-lg"> Posty</Text>
                    </Flex>
                    <TextField.Root className="w-full max-w-100 " size="2" placeholder="Search...">
                        <TextField.Slot side="right">
                            <Separator orientation="vertical" />
                            <Search />
                        </TextField.Slot>
                    </TextField.Root>
                    <nav className="flex items-center justify-end gap-4">
                        {auth.user ? (
                            <>
                                <Link href="#">
                                    Notifications
                                </Link>
                                <Link
                                    href={dashboard()}
                                    className="inline-block rounded-sm border border-[#19140035] px-5 py-1.5 text-sm leading-normal hover:border-[#1915014a] dark:border-[#3E3E3A] dark:text-[#EDEDEC] dark:hover:border-[#62605b] capitalize"
                                >
                                    {auth.user?.name}
                                </Link>

                                <Link
                                    href={logout()}
                                    className="inline-block rounded-sm border border-transparent px-5 py-1.5 text-sm leading-normal hover:border-[#19140035] dark:text-[#EDEDEC] dark:hover:border-[#3E3E3A]"
                                >
                                    Logout
                                </Link>

                            </>
                        ) : (
                            <>

                                <Link
                                    href={login()}
                                    className="inline-block rounded-sm border border-transparent px-5 py-1.5 text-sm leading-normal hover:border-[#19140035] dark:text-[#EDEDEC] dark:hover:border-[#3E3E3A]"
                                >
                                    Login
                                </Link>
                                <Link
                                    href={register()}
                                    className="inline-block px-5 py-1.5 text-sm leading-normal hover:border-[#1915014a] dark:border-[#3E3E3A] dark:text-[#EDEDEC] dark:hover:border-[#62605b]"
                                >
                                    Signup
                                </Link>
                            </>

                        )}
                        <Link href={posts.list()}>
                            Posts
                        </Link>
                    </nav>

                </div>

            </Container>
        </header>
    );
}