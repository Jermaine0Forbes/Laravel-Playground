# Web App 1

Created with laravel, react, mysql, phpunit, and some other stuff

## Goal
Posty: is an app that allows users to signup, create posts, and categories. And allows admin to monitor user history, and perform actions on their account


## Tasks

- ~~create link to profile page on the posts page~~
- ~~create all react user pages~~
- ~~create a basic ui for user profile page~~ 
- ~~change title based on page~~
- ~~create other react pages for post~~
- ~~implement roles~~
- ~~add middleware for roles~~
- ~~add login/registration logic~~
    - ~~figure out how to modify `passwordRules`~~
    - ~~figure out how to add a role to a registered to user~~
    - ~~verify if login works~~
    - ~~verify if logout works~~
- ~~update the homepage~~
- ~~refactor/organize code~~
- implement create post logic
    - ~~add middleware to verify if the person is logged in~~
    - ~~add category field~~
    - ~~update migrations to add slugs fields for categories and posts~~
    - ~~refresh migrations~~
    - ~~fetch all the categories in the create post page~~
    - ~~when saving post, create a new category based on post, and create slug~~
    - ~~when saved, should redirect to new post in specific category page~~
    - ~~add form validation~~
    - create posts with new categories and add categories listing page
    - create autofill, that will suggest existing categories based on what you type
    - autoupdate category if name exists or create a category if it doesn't
- refactor/organize code
- test code
- implement create category logic
- implement update post logic
- implement delete post logic
- add ratelimits in login forms
- create visit/history model
- refactor/organize code
- add broadcasts or events to track user visits
- add oauth and mfa
- add breadcrumbs to layout


## What I've learned
- In radix, they don't have an autocomplete component like MUI does. So if you want to create a search engine with prepopulated terms or categories, then you have to create it yourself. Also, radix has only a certain amount of accent colors to choose from. However, if you want to add a color to a css selector you have to look for the `--accent-0` instead of looking for the variable that might have the color's name
-  There are two ways to use inertia's form to process data. One way is to use the `Form` component and the other is to use the `useForm` hook. Looking at the code is self explanatory so I will just provide it below

### With useForm Hook
```jsx
import { useForm } from '@inertiajs/react';

export default function CreateUser() {
  const { data, setData, post, errors, processing } = useForm({
    name: '',
    email: '',
  });

  function handleSubmit(e) {
    e.preventDefault();
    post('/users');
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name</label>
        <input type="text" value={data.name} onChange={e => setData('name', e.target.value)} />
        {errors.name && <div class="error">{errors.name}</div>}
      </div>

      <div>
        <label>Email</label>
        <input type="email" value={data.email} onChange={e => setData('email', e.target.value)} />
        {errors.email && <div class="error">{errors.email}</div>}
      </div>

      <button type="submit" disabled={processing}>Submit</button>
    </form>
  );
}
```

### With Form component

```jsx
import { Form } from '@inertiajs/react';

export default function CreateUser() {
  return (
    /* 
      1. Define the server route and HTTP method directly on the component.
      2. Pass a function as children to access the form's real-time state.
    */
    <Form action="/users" method="post">
      {({ errors, processing }) => (
        <>
          {/* Name Field */}
          <div>
            <label htmlFor="name">Name</label>
            {/* Just provide a 'name' attribute; Inertia reads the value automatically */}
            <input id="name" type="text" name="name" />
            
            {/* Display validation errors dynamically forwarded by the server */}
            {errors.name && <div className="error">{errors.name}</div>}
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor="email">Email</label>
            <input id="email" type="email" name="email" />
            {errors.email && <div className="error">{errors.email}</div>}
          </div>

          {/* Disable button automatically during active backend validation */}
          <button type="submit" disabled={processing}>
            {processing ? 'Saving...' : 'Submit'}
          </button>
        </>
      )}
    </Form>
  );
}
```
- In order to include relationships with a particular model. You first need to include them by connecting the relationship in your model with one of the many relationship methods from the `HasRelationships` trait like `hasOne, hasMany, belongsTo`. Then when you're making a query request you need to include the name of the table, the id, then other columns that you wish to pull from. And lastly, if you're using the `select` command you need to include the foreign_id within the selection or you will receive a `null` result. Here is an example
```php
class Post extends Model
{
    /** @use HasFactory<\Database\Factories\PostFactory> */
    use HasFactory;

    protected $fillable = ['title', 'body', 'views', 'likes', 'slug', 'category_id', 'user_id'];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function category():BelongsTo
    {
        return $this->belongsTo(Category::class);
    }
    ...

```

```php
// inside post controller
    public function index()
    {
        return Inertia::render(
            "posts/index",
            [
                "posts" =>
                Inertia::scroll(fn() => 
                // It's important to include the id with the table name or you will get a null result
                Post::with(["user:id,name", "category:id,slug"])
                // It's also important to include the foreign keys like user_id , category_id or you will receive a null result
                ->select(['id', 'title', 'slug', 'user_id', 'category_id'])->latest()->paginate(10))
            ]
        );
    }
```

- In order to set a column before the model creates the attribute, you can go inside the model class and add logic in a method called `booted`. Within that method, you can call method called `creating` that will allow you to assign a value to a column with values that might have already been set by the model like so 
```php

class Category extends Model
{
    /** @use HasFactory<CategoryFactory> */
    use HasFactory;
    //
    protected $fillable = ['name', 'slug', 'user_id' ];

    protected static function booted(): void
    {
        static::creating(function (Category $category) {
            $category->slug = str($category->name)->lower()->slug('-');
        });
    }
}
```

- If you want to assign roles to a newly created user, you should not hard code the logic in the `fortify` vendor directory. Instead, you should go to `webapp1\app\Actions\Fortify\CreateNewUser.php` in order to make sure you `assignRole` with the spatie package
- In order to enable database transaction so that you can rollback changes if an error occurs, you have to create it this manner
```php
use Illuminate\Support\Facades\DB;
use App\Models\User;

DB::beginTransaction();

try {
    $user = User::create(['name' => 'Jane Doe']);
    
    // Perform other database operations...

    DB::commit();
} catch (\Throwable $e) {
    DB::rollBack();
    throw $e;
}

```
- In order to make xdebug work with laravel when running `composer run dev`, you need to start the development server in a terminal like so `php -S localhost:8000 -t webapp1/public`. Then, you need to run your vite in another terminal with `npm run dev` in order to get the hmr to work. And lastly, you turn on the xdebug in vscode in order for the breakpoints to actually work

- if you want to fill a column before you save to a model you can add in logic in a `static::creating` method like so 
```php
class Post extends Model
{
    protected static function booted(): void
    {
        static::creating(function (Post $post) {
            // Automatically set the slug before creation
            $post->slug = Str::slug($post->title);
            
            // Or set a unique API token
            $post->api_token = Str::random(60);
        });
    }
}
```
- If you want to create a slug for a post or category can use the `Str` facade to add separators to your string with `slug` and make the words lowercase with `lower` like so `Str::of($title)->lower()->slug('-')`
- Using `withoutMiddlewareFor($methods, $middleware)` is ideal if you need to remove middleware for certain controller methods
- Adding `withoutMiddleware()` method to a route can remove certain routes from dealing with certain middleware ... in theory. Here's a [link](https://www.google.com/search?q=in+laravel+how+do+you+make+sure+the+some+methods+in+the+controller+are+in+middleware+and+the+other+are+not&oq=in+laravel+how+do+you+make+sure+the+some+methods+in+the+controller+are+in+middleware+and+the+other+are+not&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIHCAEQIRiPAjIHCAIQIRiPAtIBCTQxMzc1ajBqN6gCALACAA&sourceid=chrome&source=chrome.ob&ie=UTF-8)
- In order to create a controller with an existing model, you have to write in the terminal `php artisan make:controller CategoryController --model=Category`
- In order to use the `Pick` utility in typescript, the basic example is like this 
```ts
export type Post = {
    id: number,
    title: string,
    body: string,
    views: number,
    votes: number,
    user: string | Author
}

// in order to add multiple values you have to add the pipe symbol to separate the values
export interface IProfile {
    posts: Pick<Post, "id" | "title">[] | null,
    user: User,
    history?: object
}
```
- To create a model and a migration file, you just run this command `php artisan make:model ModelName -m`
- In Tailwind, in order to create an ellipis with content that might expand an element that makes the width too long. You should first put a max width on the parent element, and then maybe add the class `truncate` or `overflow-hidden` on the element that might have too text or information
- In radix UI, the badge has a `color` property that only holds so many colors. So it would be impossible if you have an idea where you can want create custome colors for this badge.
- In radix UI, there is a Avatar component that can hold an image, but if an image doesn't exist you can use the property called `fallback` and give it a letter so that it can be shown in the UI as a default image. Also, the size property goes up by 9, and by default it will be 3
- change certain themes in radix ui, you need to modify class `radix-themes` like this
```css
body div.radix-themes{
    background-color: red;
}
```
- With radix ui you can change the grid layout  with the `columns` property. Let's say you want the mobile to only show one layout, but once the breakpoint hits `md` you want to show two different columns you can easily do `<Grid columns={{ initial: "1fr", md:"3fr 1fr"}} gap="5">`. This creates two columns once the window hits the `md` breakpoint and has a gap of 5. [more info](https://www.google.com/search?q=with+radix+ui+how+do+you+make+the+grid+component+have+two+columns+but+one+column+with+is+supposed+to+be+bigger+than+the+other&sca_esv=81be1d65d23458ac&biw=1378&bih=891&sxsrf=APpeQns9gYc9hqqRQiC3PKoaALXJGPfvDA%3A1790431992413&ei=Pc63auK-IIu7qtsP36272AY&uact=5&sclient=gws-wiz-serp&fbs=ABfTbFVyMZGZf1hfvX9uKjN_-G8cxpBkeIeqYwoCbfNVc4vKE9OqRMKGD2T9lFDfEKBBAAmW5ocR386QO4cT2Z22CGZR-lG_dnZTBDkDAZZ-sV6vXVq8lWenx01Be5VWhhOPqR1Untj6x7mDqp2PrNNE1lh7yAMRS19W3wbAZQ1I3WsQPw7UGDRkw2-CGQVEOrF0kItzTLwsULoz9pGPi-UBSsrvkha-2A&aep=10&ntc=1&mstk=AUtExfB6n_wq5AJiYdz2hiQMZFp8SsEyDiV0qTf5HBVbp68coIB6zHPzC0fR9PcdyxepifkSsPt_KLV2ZaBt3OFW2117M9W-3uq5rc2HKzUMlGXnyGETqiLl-qvKmo6IPeBtcEyvMUBoOdXyftp40iVGYSjVRQe-MUrle9RIqoYxMASapsDsW08QwHPzPv_tF6DaWXbP1-xaqGf4LqMP8n6i3N_wfPKC-QYZQNlCjTFTqUvooSgJrl8dHeVSbL52wKAS9vPRwhCpTfWZTHVS4a6W14J4u70V3BQUxAFnww7MqZRDMXyZ5AS7ZhU7k0SU1gnuPU8jTV0SbMYcqBA7lObqq9xOubSRj8XAeLqfgOG0nRvaghZjRGzNpSXK8QPWJxRqFxDmj8QwWUaJztLmrP2TuPCWN8tSLGJfEG8rDQobnNrAMVFJWSfDDJ9BatWVn9uyvuba8FIRBdQ&aioh=3&csuir=1&cs=0&udm=50&mtid=YNO3aojROJKHwbkP95enoQc)
- In order to add make a border to only one side in tailwind, you have to add the classes `border-b-2 border-b-black`
- When needing to assign a role to a user, just use the `$user->assignRole("user")`, it will connect the user with the roles **that you created** and the permissions that are assigned to them.
- If you want modify `Fortify's` registration of users, you should go to `.\vendor\laravel\fortify\src\Http\Controllers\RegisteredUserController.php`. And look for the store method
- If you want to modify anything authentication pages,(including passed down properties) in react that's connected **Fortify**, you should go to `app/Providers/FortifyServiceProvider.php`.
- If you want to change the `passwordRules` property in the register page for react. You need to go to the `FortifyServiceProvider` and modify the `registerView` method to change the password rules
- If you want to customize your passwordRules, you can call the `Password` facade, and chain
multiple methods together. But you first have to call the `min` method first in order to start chaining additional methods like `numbers, mixedCase, letters, symbols, uncompromised`
- In order to change the `passwordRules`, you need to go to `.\app\Concerns\PasswordValidationRules.php` and add additional items in the array of `passwordRules`

## Errors
- if you ever get `Illuminate\Encryption\MissingAppKeyException`, the fix is to run the `php artisan key:generate`