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
