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
- update the homepage
- refactor/organize code
- implement create post logic
- implement update post logic
- implement delete post logic
- refactor/organize code
- add ratelimits in login forms
- create visit/history model
- refactor/organize code
- add broadcasts or events to track user visits
- add breadcrumbs to layout


## What I've learned
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