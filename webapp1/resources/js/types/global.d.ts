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
            auth: { user:AuthUser};
            sidebarOpen: boolean;
            [key: string]: unknown;
        };
    }
}

export type SideBlockProps = {
    title: string;
    children: React.ReactNode;
};

export type Category = {
    id: number;
    name: string;
    slug: string;
    user_count?: number;
    post_count?: number;
};

export type Post = {
    id: number;
    title: string;
    category?: Category;
    slug: string;
    body: string;
    views: number;
    likes: number;
    user: Author;
    updated_at: string;
    user_id: number,
};

export type Author = {
    name: string;
    id: number;
        role: string[],
    roles: string[],
};

export type User = {
    id: number;
    name: string;
    email: string;
    
};

export type AuthUser = {
    banned: boolean | null,
    created_at: string,
    email: string,
    email_verified_at: string | null,
    id: number,
    name: string,
    role: string[],
    roles: string[],
    two_factor_confirmed_at: string | null,
    updated_at: string | null
}

export type BaseProps = {
    auth: {
        user: Author;
    };
    name: string;
    errors?: object;
    sideBarOpen: boolean;
};

export interface UserShowProps {
    posts: Pick<Post, 'id' | 'title'>[] | null;
    user: User;
    history?: object;
}

export type AuthLoginProps = {
    status?: string;
    canResetPassword: boolean;
} & BaseProps;

export type AuthRegisterProps = {
    passwordRules: string;
} & BaseProps;

export type PostIndexProps = {
    posts: InertiaScroll<Omit<Post, 'body' | "views" | "likes", "updated_at" >>;
} & BaseProps;

export type PostShowProps = {
    category: Category;
    post: Post;
} & BaseProps;

export type PostCreateProps = {
    categories: string[];
} & BaseProps;

export type CategoryShowProps = {
    category: Category;
    posts: InertiaScroll<Post>;
} & BaseProps;

export type CategoryListProps = {
    categories: InertiaScroll<Category>;
} & BaseProps;

export type DataForScroll = Post | Category;

export type InertiaScroll<T> = {
    current_page: number;
    data: Array<T>;
    first_page_url: string;
    from: number;
    last_page: number;
    last_page_url: string;
    links: Array<object>;
    next_page_url: string | null;
    path: string;
    per_page: number;
    prev_page_url: string | null;
    to: number;
    total: number;
};

export type PostEditProps = {
    post: Post;
    category: Category;
};
