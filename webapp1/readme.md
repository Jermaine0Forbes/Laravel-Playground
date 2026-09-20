# Web App 1

Created with laravel, react, mysql, phpunit, and some other stuff

## Goal
Create an app that allows users to signup, create posts, and categories. And allow admin to monitor user history, and perform actions on their account


## Tasks

- ~~create link to profile page on the posts page~~
- ~~create all react user pages~~
- ~~create a basic ui for user profile page~~ 
- ~~change title based on page~~
- ~~create other react pages for post~~
- ~~implement roles~~
- ~~add middleware for roles~~
- add login/registration logic
    - figure out how to modify `passwordRules`
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
- If you want to customize your passwordRules, you can call the `Password` facade, and chain
multiple methods together. But you first have to call the `min` method first in order to start chaining additional methods like `numbers, mixedCase, letters, symbols, uncompromised`
- In order to change the `passwordRules`, you need to go to `.\app\Concerns\PasswordValidationRules.php` and add additional items in the array of `passwordRules`

## Errors