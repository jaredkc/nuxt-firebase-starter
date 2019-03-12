# nuxt-firebase-starter

> Nuxt/Firebase starter project with Vuetify

## Overview

- Initial Nuxt applications using: SPA mode, PWA module, Axios module.
  - Learn more about [getting started with Nuxt](https://nuxtjs.org/guide/installation).
- Firebase integrations using: Hosting, Firestore DB, Cloud Functions and Storage.
  - Learn more about [getting started with Firebase](https://firebase.google.com/docs/cli/).
- [Vuetify](https://vuetifyjs.com/en/) integration for quick application development with Material Design.
- See the [demo application](https://nuxtfirebasestarter.firebaseapp.com)

## Firebase Setup

In the Firebase console:

1. Setup your Firebase project
2. Enable Email/Password and Google sign-in methods for Authentication.
3. Add cloud Firestore database to project.

Firebase CLI generated files and directory

- `functions/` Typescript setup for cloud functions
- `.firebaserc` shows related Firebase project(s)
- `firebase.json` configuration for Firebase project
- `firestore.indexes.json` for firestore indexes
- `firestore.rules` permissions for Firestore DB
- `storage.rules` permissions for cloud storage
- `fireinit.js` includes config, initializeApp, and imports for auth, firestore, functions

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

### Nuxt

``` bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start

# generate static project
$ npm run generate
```

### Firebase

``` bash
# install firebase-tools
$ npm install -g firebase-tools

# to initialize a new Firebase project
$ firebase init

# serve functions only for testing before deploy
$ firebase serve --only functions

# to deploy a Firebase project, be sure to npm run build first
$ firebase deploy

# example to deploy specific service or feature
$ firebase deploy --only hosting

# generate static project
$ npm run generate
```
