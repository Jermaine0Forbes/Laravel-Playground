import type { Auth } from '@/types/auth';

declare module 'react' {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    interface InputHTMLAttributes<T> {
        passwordrules?: string;
    }
}

declare module '@inertiajs/core' {
    export interface InertiaConfig {
        sharedPageProps: {
            name: string;
            auth: Auth;
            sidebarOpen: boolean;
            [key: string]: unknown;
        };
    }
}


export type SideBlockProps = {
    title: string,
    children: React.ReactNode,
}

export type Post = {
    id: number,
    title: string,
    category: {
        id: number
        slug: string
    },
    slug: string
    body: string,
    views: number,
    likes: number,
    user: string | Author
}

export type Author = {
    name: string,
    id: number
}

export interface IProfile {
    posts: Pick<Post, "id" | "title">[] | null,
    user: User,
    history?: object
}


export type User = {
    id: number,
    name: string,
    email: string,

}
