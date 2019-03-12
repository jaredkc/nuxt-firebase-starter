# nuxt-firebase-starter

> Starter Nuxt project for Firebase (Auth, Functions, Firestore, Hosting)

## Firebase Setup

Enable Email/Password and Google sign-in methods for Authentication, or make modifications as needed.

Create `.env` with the following config options needed to initialize Firebase app.

```
API_KEY=
AUTH_DOMAIN=
DATABASE_URL=
PROJECT_ID=
STORAGE_BUCKET=
MESSAGING_SENDER_ID=
```

## Build Setup

``` bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn run dev

# build for production and launch server
$ yarn run build
$ yarn start

# generate static project
$ yarn run generate
```

For detailed explanation on how things work, checkout [Nuxt.js docs](https://nuxtjs.org).
