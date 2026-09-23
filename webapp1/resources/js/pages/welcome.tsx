import { Head, Link, usePage } from '@inertiajs/react';
import { dashboard, login, register } from '@/routes';
import posts from '@/routes/posts';
import { Text } from '@radix-ui/themes';

export default function Welcome() {
    const { auth } = usePage().props;

    return (
        <>
            <Head title="Welcome" />
            <section className="flex min-h-screen flex-col items-center bg-[#FDFDFC]  text-[#1b1b18]  dark:bg-[#0a0a0a]">
                <header className="border-b-2 border-black-400 border-b-black-400 mb-6 w-full flex justify-center">
                    <div
                        id="nav-container"
                        className=" w-full max-w-[335px] text-sm not-has-[nav]:hidden lg:max-w-4xl flex justify-between items-center"
                    >
                        <Text weight={"bold"} wrap="wrap" className="text-lg">Posty</Text>
                        <nav className="flex items-center justify-end gap-4">
                            {auth.user ? (
                                <Link
                                    href={dashboard()}
                                    className="inline-block rounded-sm border border-[#19140035] px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#1915014a] dark:border-[#3E3E3A] dark:text-[#EDEDEC] dark:hover:border-[#62605b]"
                                >
                                    Dashboard
                                </Link>
                            ) : (
                                <>
                                    <Link href={posts.list()}>
                                        Posts
                                    </Link>
                                    <Link
                                        href={login()}
                                        className="inline-block rounded-sm border border-transparent px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#19140035] dark:text-[#EDEDEC] dark:hover:border-[#3E3E3A]"
                                    >
                                        Login
                                    </Link>
                                    <Link
                                        href={register()}
                                        className="inline-block rounded-sm border border-[#19140035] px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#1915014a] dark:border-[#3E3E3A] dark:text-[#EDEDEC] dark:hover:border-[#62605b]"
                                    >
                                        Register
                                    </Link>
                                </>
                            )}
                        </nav>

                    </div>
                </header>
                <h2>Post whatever you want</h2>
            </section>
        </>
    );
}
