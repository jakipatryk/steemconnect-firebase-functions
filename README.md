# steemconnect-firebase-functions
A library to use SteemConnect in Firebase Functions.

[![Build Status](https://travis-ci.org/jakipatryk/steemconnect-firebase-functions.svg?branch=master)](https://travis-ci.org/jakipatryk/steemconnect-firebase-functions)

___

## What is steemconnect-firebase-functions?

It is a library designed to help developers who want to create apps based on SteemConnect and Firebase. The library makes it easy to:
- implement **OAuth2 Authorization Code Grant** (enables user to log in to your app using SteemConnect)
- mint **Firebase Custom Token** (used to authenticate user within your app)
- broadcast operations to Steem blockchain (post, comment, upvote, etc.)

## How to install?

```
npm install steemconnect-firebase-functions --save
```


## Example use

Function that redirects to SteemConnect (first step in OAuth2 Authorization Code Grant):
```typescript
import * as functions from 'firebase-functions';
import { getAuthorizationUrl } from 'steemconnect-firebase-functions';

const redirectUri = 'http://localhost:4200/redirect';
const clientId = functions.config().steemconnect.id;

export const redirect = functions.https.onRequest((req, res) => {
  const endpoint = getAuthorizationUrl(clientId, redirectUri, ['vote, comment']);
  res.redirect(endpoint);
});
```

## Tutorials

- [How to authenticate users via SteemConnect on the Firebase?](https://utopian.io/utopian-io/@jakipatryk/how-to-authenticate-users-via-steemconnect-on-the-firebase)

## Docs

| Function | Parameters | Description |
| --- | --- | --- |
| `broadcastOperations` | accessToken, operations | broadcasts given operations to Steem blockchain and returns result data if succeeded |
| `getAccessToken` | clientId, clientSecret, redirectUri, code | exchanges code for access token and returns it |
| `getAccessTokenFromFirestore` | admin, uid | returns access token for given uid from Firestore if exists |
| `getAuthorizationUrl` | clientId, redirectUri, scope | returns a URL to SteemConnect with app credentials that enables users to log in to their account |
| `getUserData` | accessToken | returns requested user details from SteemConnect |
| `mintFirebaseToken` | admin, uid | creates and returns Firebase Custom Auth Token |
| `saveAccessToken` | admin, uid, accessToken | saves access token in the Firestore `steemconnectToken/uid` document |
