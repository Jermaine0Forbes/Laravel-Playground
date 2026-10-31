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

export type Category = {
id: number, 
name: string,
slug: string,

}

export type Post = {
    id: number,
    title: string,
    category?:Category
    slug: string
    body: string,
    views: number,
    likes: number,
    user:  Author,
    updated_at: string,
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

export type BaseProps = {
     name: string,
    errors?: object,
    sideBarOpen: boolean,
}

export type PostShowProps = {
    category: Category,
    post: Post
} & BaseProps;


export type PostCreateProps = {
    categories: Array<Category | null>,

} & BaseProps;

export type CategoryShowProps =  {
    category: Category,
    posts:InertiaScroll<Post>
} & BaseProps;

export type DataForScroll = Post | Category;

export type InertiaScroll<T> = {
    current_page: number,
    data:Array<T>,
    first_page_url: string,
    from: number,
    last_page: number,
    last_page_url:string,
    links:Array<object>,
    next_page_url: string | null,
    path: string,
    per_page: number,
    prev_page_url: string,
    to: number,
    totatl: number,
}