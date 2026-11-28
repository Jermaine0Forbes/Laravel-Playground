import { render, RenderResult, screen, within, act, cleanup, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, beforeEach, test, vi, beforeAll, afterEach, afterAll } from 'vitest';
import { setupServer } from 'msw/node';
import { http, HttpResponse, delay } from 'msw';
import { Theme } from '@radix-ui/themes';


// Mock the imported module: import { route } from 'ziggy-js'
vi.mock('ziggy-js', () => ({
    route: vi.fn((name: string, params?: any) => `/posts/${params}`),
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
        router: { ...actual.router, reload: vi.fn(), delete: vi.fn() },
        Link: ({ href, children, ...rest }: any) => (
            <a href={href} {...rest}>
                {children}
            </a>
        ),
    };
});

vi.mock('sonner', async () => {
    const actual = await vi.importActual<typeof import('sonner')>('sonner');
    return {
        ...actual,
        toast: { success: vi.fn(), error: vi.fn() },
    };
});

// Replace with the real implementation if you prefer; this keeps the test isolated.
vi.mock('@/lib/utils', () => ({
    isAuthor: (user: unknown) => typeof user === 'object' && user !== null,
    canDeletePost: (post: unknown, user: unknown) => true
}));


import { Head, InfiniteScroll, router, useHttp } from '@inertiajs/react';
import Index from './index';
import { toast } from 'sonner';
import { PostIndexProps } from '@/types/global';

const baseData = {
    auth: {
        user: {
            id: 1,
            name: "Test User",
            banned: null,
            created_at: '',
            updated_at: '',
            email: 'testuser@example.com',
            role: ['user'],
            roles: ['user'],
            email_verified_at: null,
            two_factor_confirmed_at: null,
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

const getFirstPost = (data: PostIndexProps) => data.posts.data[0];
const getFirstRow = (node: RenderResult) => node.getAllByRole('row')[1];

export const restHandlers = [
    http.delete('/posts/313', async () => { 
        await delay(100)
        return HttpResponse.json({}, { status: 200 }) 
    })
];

const server = setupServer(...restHandlers);
const renderPage = () =>
    render(
        <Theme>
            <Index {...data} />
        </Theme>,
    );

describe('Post Index page', () => {

    beforeEach(() => {

        vi.clearAllMocks();
        vi.spyOn(console, 'log').mockImplementation(() => { }); // component has a console.log(posts)

    });

    beforeAll(() => server.listen({ onUnhandledFrame: 'error' }))
    afterEach(() => {
        server.resetHandlers();
        cleanup();
    })
    afterAll(() => server.close())

    test('should show the title of the page', async () => {
        const comp = render(<Index {...data} />);
        console.log(screen.debug());

        expect(comp.getByRole('heading', { name: /posts/i })).toBeInTheDocument();
    });


    test('wraps the table in <InfiniteScroll> using the "posts" prop', () => {
        const comp = render(<Index {...data} />);
        expect(screen.getByTestId('infinite-scroll')).toBeInTheDocument();
        expect(vi.mocked(InfiniteScroll).mock.calls[0][0]).toMatchObject({ data: 'posts' });
        console.log(comp.getByTestId('posts-index-section'));
        console.log('bar')
    });

    test('should see title from the first post in the table', async () => {
        const comp = render(<Index {...data} />);
        const firstPost = getFirstPost(data);
        const row = getFirstRow(comp);
        const cell = within(row).getAllByRole('cell')[0];
        expect(row).toHaveTextContent(firstPost['title']);


    });

    test('should see category from the first post in the table', async () => {
        const comp = render(<Index {...data} />);
        const firstPost = getFirstPost(data);
        const row = getFirstRow(comp);
        const cell = within(row).getAllByRole('cell')[0];
        expect(row).toHaveTextContent(firstPost.category.name);


    });

    test('should see author name from the first post in the table', async () => {
        const comp = render(<Index {...data} />);
        const firstPost = getFirstPost(data);
        const row = getFirstRow(comp);
        const cell = within(row).getAllByRole('cell')[0];
        expect(row).toHaveTextContent(firstPost.user.name);


    });

    test('should see action links in the table', async () => {
        const comp = render(<Index {...data} />);
        const row = getFirstRow(comp);
        const cell = within(row).getAllByRole('cell')[3];
        expect(within(cell).getByRole('link', { name: /edit/i })).toBeInTheDocument();
        expect(within(cell).getByRole('button', { name: /delete/i })).toBeInTheDocument();


    });

    test('should see dialog when I click the delete button', async () => {
        const comp = render(<Index {...data} />);
        const user = userEvent.setup();
        const row = getFirstRow(comp);
        const cell = within(row).getAllByRole('cell')[3];
        const deleteBtn = within(cell).getByRole('button', { name: /delete/i });
        expect(deleteBtn).toBeInTheDocument();
        await user.click(deleteBtn);
        const dialog = comp.getByRole('dialog')
        expect(dialog).toBeInTheDocument();
        expect(dialog).toHaveTextContent(/delete post/i);



    });

    test('should delete post when I confirm deletion in dialog', async () => {

        const comp = renderPage();
        const user = userEvent.setup();
        const row = getFirstRow(comp);
        const cell = within(row).getAllByRole('cell')[3];
        let deleteBtn = within(cell).getByRole('button', { name: /delete/i });
        expect(deleteBtn).toBeInTheDocument();
        await user.click(deleteBtn);
        const dialog = comp.getByRole('dialog')
        expect(dialog).toBeInTheDocument();
        expect(dialog).toHaveTextContent(/delete post/i);
        deleteBtn = within(dialog).getByRole('button', { name: /delete it/i });

        await user.click(deleteBtn);

        await waitFor(() => expect(deleteBtn).toBeDisabled());

        await waitFor(() =>
            expect(toast.success).toHaveBeenCalledWith(
                'post: 313 has been destroyed',
                { toasterId: 'notify' },
            ),
        );
        expect(router.reload).toHaveBeenCalledTimes(1);
        await waitFor(() =>
            expect(screen.queryByRole('dialog')).not.toBeInTheDocument(),
        );



    });





});