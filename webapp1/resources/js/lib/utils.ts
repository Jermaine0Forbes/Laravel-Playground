import type { InertiaLinkProps } from '@inertiajs/react';
import { clsx } from 'clsx';
import type { ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import type { Author, Post, AuthUser } from '@/types/global';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function toUrl(url: NonNullable<InertiaLinkProps['href']>): string {
    return typeof url === 'string' ? url : url.url;
}

export function isAuthor(val: any): val is Author {
    return 'id' in val && typeof val != 'string';
}

export function canDeletePost(post: Post, user: AuthUser): boolean {

    // if(user === null || post === null || post?.id === undefined) return false;
    if ( user?.id === post?.user_id ||  (user?.role && Array.isArray(user?.role) && user?.role.includes('admin')) ) return true;

    return false;



}
