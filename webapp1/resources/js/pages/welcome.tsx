import { Head, Link, usePage } from '@inertiajs/react';
import { dashboard, login, register } from '@/routes';
import posts from '@/routes/posts';
import { Text, Container, Box, Grid, Button } from '@radix-ui/themes';
import NavHeaderHome from '@/components/nav-header-home';
import { NotebookPen, PencilLine } from 'lucide-react';

export default function Welcome() {
    const { auth } = usePage().props;

    return (
        <>
            <Head title="Welcome" />
            <section className="flex min-h-screen flex-col items-center bg-[#FDFDFC]  text-[#1b1b18]  dark:bg-[#0a0a0a]">
               <NavHeaderHome />
                <h2>Post whatever you want</h2>
                <Container className="w-full mt-5" >
                    <Grid columns={{ initial: "1fr", md:"3fr 1fr"}} gap="4">
                            <Box>
                                <div className="h-50 mb-4 rounded-md bg-slate-300"> 
                                    <Button>
                                        <NotebookPen /> <Text>Create a Post</Text>
                                    </Button>
                                    <Button>
                                        <PencilLine /> <Text>Create a Category</Text>
                                    </Button>
                                </div>
                                <div className="h-50 mb-4 rounded-md bg-slate-300"> main content</div>
                                <div className="h-50 mb-4 rounded-md bg-slate-300"> main content</div>
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
