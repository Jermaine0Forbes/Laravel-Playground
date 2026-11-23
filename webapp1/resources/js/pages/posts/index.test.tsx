import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, beforeEach, test, vi } from 'vitest';


// Mock the imported module: import { route } from 'ziggy-js'
vi.mock('ziggy-js', () => ({
    route: vi.fn((name: string, params?: any) => `/${name}`),
    useRoute: () => vi.fn((name: string, params?: any) => `/${name}`),
}));

vi.mock('@inertiajs/react', async () => {
    const actual = await vi.importActual<typeof import('@inertiajs/react')>('@inertiajs/react');
    return {
        ...actual,
        Head: ({ title, children }: { title?: string; children?: React.ReactNode }) => (
            <>
                {title && <title>{title}</title>}
                {children}
            </>
        ),
        usePage: () => ({
            props: {
                auth: { user: { id: 1, name: 'Test User' } },
                // Add any other shared props your component reads
            },
            url: '/dashboard',
        }),
        InfiniteScroll: vi.fn(({ children }: any) => <div data-testid="infinite-scroll">{children}</div>),
        router: { delete: vi.fn() },
        Link: ({ href, children, ...rest }: any) => (
            <a href={href} {...rest}>
                {children}
            </a>
        ),
    };
});

// Replace with the real implementation if you prefer; this keeps the test isolated.
vi.mock('@/lib/utils', () => ({
    isAuthor: (user: unknown) => typeof user === 'object' && user !== null,
}));


import { Head, InfiniteScroll, router } from '@inertiajs/react';
import Index from './index';





const baseData = {
    auth: {
        user: {
            id: 1,
            name: "Test User"
        }
    },
    name: "Webapp1",
    errors: {},
    sideBarOpen: false,
};

const posts = {
    "current_page": 1,
    "data": [
        {
            "id": 313,
            "title": "bobble octave dampen pfft",
            "slug": "bobble-octave-dampen-pfft",
            "user_id": 55,
            "category_id": 12,
            "user": {
                "id": 55,
                "name": "user5"
            },
            "category": {
                "id": 12,
                "name": "snacks",
                "slug": "snacks"
            }
        },
        {
            "id": 312,
            "title": "gazebo square dispose throughout",
            "slug": "gazebo-square-dispose-throughout",
            "user_id": 55,
            "category_id": 5,
            "user": {
                "id": 55,
                "name": "user5"
            },
            "category": {
                "id": 5,
                "name": "food",
                "slug": "food"
            }
        },
        {
            "id": 311,
            "title": "swat fixed twine unbearably gadzooks muted",
            "slug": "swat-fixed-twine-unbearably-gadzooks-muted",
            "user_id": 54,
            "category_id": 5,
            "user": {
                "id": 54,
                "name": "user4"
            },
            "category": {
                "id": 5,
                "name": "food",
                "slug": "food"
            }
        },

    ],
    "first_page_url": "http://localhost:8000/posts?page=1",
    "from": 1,
    "last_page": 32,
    "last_page_url": "http://localhost:8000/posts?page=32",
    "links": [
        {
            "url": null,
            "label": "&laquo; Previous",
            "page": null,
            "active": false
        },
        {
            "url": "http://localhost:8000/posts?page=1",
            "label": "1",
            "page": 1,
            "active": true
        },
        {
            "url": "http://localhost:8000/posts?page=2",
            "label": "2",
            "page": 2,
            "active": false
        },
        {
            "url": "http://localhost:8000/posts?page=3",
            "label": "3",
            "page": 3,
            "active": false
        },
    ],
    "next_page_url": "http://localhost:8000/posts?page=2",
    "path": "http://localhost:8000/posts",
    "per_page": 10,
    "prev_page_url": null,
    "to": 10,
    "total": 313
};

const data = { ...baseData, posts };

describe('Post Index page', () => {

    beforeEach(() => {

        vi.clearAllMocks();
        vi.spyOn(console, 'log').mockImplementation(() => { }); // component has a console.log(posts)

    });

    test('should show the title of the page', async () => {
        const comp =  render(<Index {...data} />);
        console.log(screen.debug());

        expect(comp.getByRole('heading', { name: /posts/i })).toBeInTheDocument();
    });


        test('wraps the table in <InfiniteScroll> using the "posts" prop', () => {
             const comp =  render(<Index {...data} />);
        screen.debug(comp.getByTestId('posts-index-section'));
        expect(screen.getByTestId('infinite-scroll')).toBeInTheDocument();
        expect(vi.mocked(InfiniteScroll).mock.calls[0][0]).toMatchObject({ data: 'posts' });
    });

});