# steemconnect-firebase-functions

A library to use SteemConnect in Firebase Functions.

[![Build Status](https://travis-ci.org/jakipatryk/steemconnect-firebase-functions.svg?branch=master)](https://travis-ci.org/jakipatryk/steemconnect-firebase-functions)

---

## What is steemconnect-firebase-functions?

It is a library designed to help developers who want to create apps based on SteemConnect and Firebase. The library makes it easy to:

* implement **OAuth2 Authorization Code Grant** (enables user to log in to your app using SteemConnect)
* mint **Firebase Custom Token** (used to authenticate user within your app)
* broadcast operations to Steem blockchain (post, comment, upvote, etc.)

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
const scope = ['vote', 'comment'];

export const redirect = functions.https.onRequest((req, res) => {
  const endpoint = getAuthorizationUrl(clientId, redirectUri, scope);
  res.redirect(endpoint);
});
```

## Tutorials

* [How to authenticate users via SteemConnect on the Firebase?](https://utopian.io/utopian-io/@jakipatryk/how-to-authenticate-users-via-steemconnect-on-the-firebase)

---

## Documentation

This library has been mainly designed to use with Firebase Cloud Functions, but a lot of its features can be used in any NodeJS environment.

### Any NodeJS environment functions

These functions can be used in any NodeJS environment:

#### broadcastComment

Broadcasts a comment to the Steem blockchain and returns the result of the operation.

##### Parameters

| Name              | Type   | Description                                                                                         | Required |
| ----------------- | ------ | --------------------------------------------------------------------------------------------------- | -------- |
| `accessToken`     | string | the `access_token` of the user                                                                      | +        |
| `parentAuthor`    | string | the username of the author of either a post or a parent comment that user wants to add a comment to | +        |
| `parentPermlink`  | string | the permlink of either a post or a parent comment that user wants to add a comment to               | +        |
| `commentAuthor`   | string | the username of the user who wants to add a comment                                                 | +        |
| `commentPermlink` | string | the permlink of the comment                                                                         | +        |
| `commentBody`     | string | the content of the comment                                                                          | +        |
| `jsonMetadata`    | object | optional additional metadata (ex. the name of the app)                                              | -        |

##### What does it return?

This function returns a **Promise** object that resolves into the result of the operation.

##### Example usage

```typescript
import { broadcastComment } from 'steemconnect-firebase-functions';

const accessToken = 'access-token';
const parentAuthor = 'ned';
const parentPermlink = 'steemfest2-closing-dinner';
const commentAuthor = 'jakipatryk';
const commentPermlink = 'f34fre5';
const commentBody = 'This is a test comment';

broadcastComment(
  accessToken,
  parentAuthor,
  parentPermlink,
  commentAuthor,
  commentPermlink,
  commentBody
).then(result => {
  console.log(result);
});
```

---

#### broadcastDownvote

Broadcasts a downvote to the Steem blockchain and returns the result of the operation.

##### Parameters

| Name          | Type   | Description                                                              | Required |
| ------------- | ------ | ------------------------------------------------------------------------ | -------- |
| `accessToken` | string | the `access_token` of the user                                           | +        |
| `voter`       | string | the username of the voter                                                | +        |
| `author`      | string | the username of the author of a comment/post that user wants to downvote | +        |
| `permlink`    | string | the permlink of a comment/post that user wants to downvote               | +        |
| `weight`      | number | the weight of the vote (ex. 5000 is going to broadcast a 50% downvote)   | +        |

##### What does it return?

This function returns a **Promise** object that resolves into the result of the operation.

##### Example usage

```typescript
import { broadcastDownvote } from 'steemconnect-firebase-functions';

const accessToken = 'access-token';
const voter = 'jakipatryk';
const author = 'ned';
const permlink = 'steemfest2-closing-dinner';
const weight = 10000; // 100% downvote

broadcastDownvote(accessToken, voter, author, permlink, weight).then(result => {
  console.log(result);
});
```

---

#### broadcastFollow

Broadcasts a follow to the Steem blockchain and returns the result of the operation.

##### Parameters

| Name           | Type   | Description                                            | Required |
| -------------- | ------ | ------------------------------------------------------ | -------- |
| `accessToken`  | string | the `access_token` of the user                         | +        |
| `username`     | string | the username of the user that wants to follow somebody | +        |
| `userToFollow` | string | the username of the user to follow                     | +        |

##### What does it return?

This function returns a **Promise** object that resolves into the result of the operation.

##### Example usage

```typescript
import { broadcastFollow } from 'steemconnect-firebase-functions';

const accessToken = 'access-token';
const username = 'jakipatryk';
const userToFollow = 'ned';

broadcastFollow(accessToken, username, userToFollow).then(result => {
  console.log(result);
});
```

---

#### broadcastOperations

Broadcasts operations to the Steem blockchain.

##### Parameters

| Name          | Type   | Description                          | Required |
| ------------- | ------ | ------------------------------------ | -------- |
| `accessToken` | string | the `access_token` of the user       | +        |
| `operations`  | array  | an array of operations to broadcast. | +        |

##### What does it return?

This function returns a **Promise** object that resolves into the result of the operations.

##### Example usage

```typescript
import { broadcastOperations } from 'steemconnect-firebase-functions';

const accessToken = 'access-token';
const operations = [
  [
    'vote',
    {
      voter: 'jakipatryk',
      author: 'ned',
      permlink: 'steemfest2-closing-dinner',
      weight: 5000 // 50%
    }
  ]
];

broadcastOperations(accessToken, operations).then(result => {
  console.log(result);
});
```

---

#### broadcastPost

Broadcasts a post to the Steem blockchain and returns the result of the operation.

##### Parameters

| Name           | Type   | Description                                                               | Required |
| -------------- | ------ | ------------------------------------------------------------------------- | -------- |
| `accessToken`  | string | the `access_token` of the user                                            | +        |
| `mainTag`      | string | the main tag of the post (not possible to change it later)                | +        |
| `postAuthor`   | string | the username of the user who wants to add a post                          | +        |
| `postPermlink` | string | the permlink of the post                                                  | +        |
| `postTitle`    | string | the title of the post                                                     | +        |
| `postBody`     | string | the content of the post                                                   | +        |
| `jsonMetadata` | object | optional additional metadata (ex. the name of the app or additional tags) | -        |

##### What does it return?

This function returns a **Promise** object that resolves into the result of the operation.

##### Example usage

```typescript
import { broadcastPost } from 'steemconnect-firebase-functions';

const accessToken = 'access-token';
const mainTag = 'test-tag';
const postAuthor = 'jakipatryk';
const postPermlink = 'test-post-432rhbb23';
const postTitle = 'Test post';
const postBody = 'This is a test post content';

broadcastPost(
  accessToken,
  mainTag,
  postAuthor,
  postPermlink,
  postTitle,
  postBody
).then(result => {
  console.log(result);
});
```

---

#### broadcastPostWithBeneficiaries

Broadcasts a post with beneficiaries details to the Steem blockchain and returns the result of the operation.

##### Parameters

| Name                   | Type   | Description                                                                                        | Required |
| ---------------------- | ------ | -------------------------------------------------------------------------------------------------- | -------- |
| `accessToken`          | string | the `access_token` of the user                                                                     | +        |
| `mainTag`              | string | the main tag of the post (not possible to change it later)                                         | +        |
| `postAuthor`           | string | the username of the user who wants to add a post                                                   | +        |
| `postPermlink`         | string | the permlink of the post                                                                           | +        |
| `postTitle`            | string | the title of the post                                                                              | +        |
| `postBody`             | string | the content of the post                                                                            | +        |
| `beneficiariesAccount` | string | the username of the beneficiaries account                                                          | +        |
| `beneficiariesWeight`  | number | the weight of the beneficiaries (ex. 2500 is equal the 25% rewards going to beneficiaries account) | +        |
| `jsonMetadata`         | object | optional additional metadata (ex. the name of the app or additional tags)                          | -        |

##### What does it return?

This function returns a **Promise** object that resolves into the result of the operation.

##### Example usage

```typescript
import { broadcastPostWithBeneficiaries } from 'steemconnect-firebase-functions';

const accessToken = 'access-token';
const mainTag = 'test-tag';
const postAuthor = 'jakipatryk';
const postPermlink = 'test-post-432rhbb23';
const postTitle = 'Test post';
const postBody = 'This is a test post content';
const beneficiariesAccount = 'utopian.pay';
const beneficiariesWeight = 2500; // 25%

broadcastPostWithBeneficiaries(
  accessToken,
  mainTag,
  postAuthor,
  postPermlink,
  postTitle,
  postBody,
  beneficiariesAccount,
  beneficiariesWeight
).then(result => {
  console.log(result);
});
```

---

#### broadcastReblog

Broadcasts a reblog to the Steem blockchain and returns the result of the operation.

##### Parameters

| Name           | Type   | Description                                             | Required |
| -------------- | ------ | ------------------------------------------------------- | -------- |
| `accessToken`  | string | the `access_token` of the user                          | +        |
| `username`     | string | the username of the user that wants to reblog something | +        |
| `postAuthor`   | string | the username of the author of the post to reblog        | +        |
| `postPermlink` | string | the permlink of the post to reblog                      | +        |

##### What does it return?

This function returns a **Promise** object that resolves into the result of the operation.

##### Example usage

```typescript
import { broadcastReblog } from 'steemconnect-firebase-functions';

const accessToken = 'access-token';
const username = 'jakipatryk-dev';
const postAuthor = 'jakipatryk';
const postPermlink =
  'steemconnect-firebase-functions-version-1-1-0-has-just-been-published';

broadcastReblog(accessToken, username, postAuthor, postPermlink).then(
  result => {
    console.log(result);
  }
);
```

---

#### broadcastUnfollow

Broadcasts an unfollow to the Steem blockchain and returns the result of the operation.

##### Parameters

| Name             | Type   | Description                                              | Required |
| ---------------- | ------ | -------------------------------------------------------- | -------- |
| `accessToken`    | string | the `access_token` of the user                           | +        |
| `username`       | string | the username of the user that wants to unfollow somebody | +        |
| `userToUnfollow` | string | the username of the user to unfollow                     | +        |

##### What does it return?

This function returns a **Promise** object that resolves into the result of the operation.

##### Example usage

```typescript
import { broadcastUnfollow } from 'steemconnect-firebase-functions';

const accessToken = 'access-token';
const username = 'jakipatryk';
const userToUnfollow = 'ned';

broadcastUnfollow(accessToken, username, userToUnfollow).then(result => {
  console.log(result);
});
```

---

#### broadcastUpvote

Broadcasts an upvote to the Steem blockchain and returns the result of the operation.

##### Parameters

| Name          | Type   | Description                                                            | Required |
| ------------- | ------ | ---------------------------------------------------------------------- | -------- |
| `accessToken` | string | the `access_token` of the user                                         | +        |
| `voter`       | string | the username of the voter                                              | +        |
| `author`      | string | the username of the author of a comment/post that user wants to upvote | +        |
| `permlink`    | string | the permlink of a comment/post that user wants to upvote               | +        |
| `weight`      | number | the weight of the vote (ex. 10000 is going to broadcast a 100% upvote) | +        |

##### What does it return?

This function returns a **Promise** object that resolves into the result of the operation.

##### Example usage

```typescript
import { broadcastUpvote } from 'steemconnect-firebase-functions';

const accessToken = 'access-token';
const voter = 'jakipatryk';
const author = 'ned';
const permlink = 'steemfest2-closing-dinner';
const weight = 10000; // 100%

broadcastUpvote(accessToken, voter, author, permlink, weight).then(result => {
  console.log(result);
});
```

---

#### createComment

Creates and returns the `comment` operation.

##### Parameters

| Name             | Type   | Description                                            | Required |
| ---------------- | ------ | ------------------------------------------------------ | -------- |
| `parentPermlink` | string | the parent permlink for comments or main tag for posts | +        |
| `author`         | string | the author of the comment/post                         | +        |
| `permlink`       | string | the permlink of the comment/post                       | +        |
| `body`           | string | the content of the comment/post                        | +        |
| `parentAuthor`   | string | the parent author of the comment                       | -        |
| `title`          | string | the title of the post                                  | -        |
| `jsonMetadata`   | object | the additional metadata of the comment/post            | -        |

##### What does it return?

This function returns a single `comment` operation in the form of an array.

##### Example usage

```typescript
import { createComment } from 'steemconnect-firebase-functions';

const parentAuthor = 'ned';
const parentPermlink = 'i-am-ned-stark';
const author = 'jakipatryk';
const permlink = 'i-am-jakipatryk-from-polska';
const body = 'Hello! Whats up ppl?';
const jsonMetadata = {
  app: 'strimi',
  community: 'strimi'
};

const commentOperation = createComment(
  parentPermlink,
  author,
  permlink,
  body,
  parentAuthor,
  null,
  jsonMetadata
);
```

---

#### createCommentOptions

Creates and returns the `comment_option` operation.

##### Parameters

| Name                   | Type    | Description                                                                                                     | Required |
| ---------------------- | ------- | --------------------------------------------------------------------------------------------------------------- | -------- |
| `author`               | string  | the author of the post/comment                                                                                  | +        |
| `permlink`             | string  | the permlink of the post/comment                                                                                | +        |
| `extensions`           | array   | optional extensions (ex. beneficiaries)                                                                         | -        |
| `maxAcceptedPayout`    | string  | optional maximum accepted payout in the form of string (ex. '300.000 SBD')                                      | -        |
| `percentSteemDolars`   | number  | optional percent of the rewards in Steem Blockchain Dolars (10000 stands for 50/50 split and it is the default) | -        |
| `allowVotes`           | boolean | optional boolean that enables/disables upvoting a post/comment                                                  | -        |
| `allowCurationRewards` | boolean | optional boolean that enables/disables the curation rewards                                                     | -        |

##### What does it return?

This function returns a single `comment_option` operation in the form of an array.

##### Example usage

```typescript
import { createCommentOptions } from 'steemconnect-firebase-functions';

const author = 'jakipatryk';
const permlink = '12-iq-overload-hendrik-lorentz';
const allowVotes = false;

const commentOptionsOperation = createCommentOptions(
  author,
  permlink,
  null,
  null,
  null,
  allowVotes
);
```

---

#### createCustomJson

Creates and returns the `custom_json` operation.

##### Parameters

| Name                   | Type   | Description                  | Required |
| ---------------------- | ------ | ---------------------------- | -------- |
| `requiredPostingAuths` | Array  | required posting auths array | +        |
| `id`                   | string | the id of the custom_json    | +        |
| `customJson`           | Array  | the custom JSON              | +        |
| `requiredAuths`        | Array  | optional required auths      | -        |

##### What does it return?

This function returns a single `custom_json` operation in the form of an array.

##### Example usage

```typescript
import { createCustomJson } from 'steemconnect-firebase-functions';

const requiredPostingAuths = ['jakipatryk'];
const id = 'follow';
const customJson = [
  'reblog',
  {
    account: 'jakipatryk',
    author: 'ned',
    permlink: 'i-am-ned'
  }
];

const customJsonOperation = createCustomJson(
  requiredPostingAuths,
  id,
  customJson
);
```

---

#### createVote

Creates and returns the `vote` operation.

##### Parameters

| Name       | Type   | Description                                                                                                                         | Required |
| ---------- | ------ | ----------------------------------------------------------------------------------------------------------------------------------- | -------- |
| `voter`    | string | the username of the voter                                                                                                           | +        |
| `author`   | string | the username of the author of a comment/post that you want to create a vote operation on                                            | +        |
| `permlink` | string | the permlink of a comment/post that you want to create a vote operation on                                                          | +        |
| `weight`   | number | the weight of the vote (ex. 10000 is going to create a 100% upvote operation and -1000 is going to create a 10% downvote operation) | +        |

##### What does it return?

This function returns a single `vote` operation in the form of an array.

##### Example usage

```typescript
import { createVote } from 'steemconnect-firebase-functions';

const voter = 'jakipatryk';
const author = 'ned';
const permlink = 'i-am-ned-and-i-like-smts';
const weight = 500; // will create a 5% upvote operation

const voteOperation = createVote(voter, author, permlink, weight);
```

---

#### getAccessToken

Exchanges the OAuth2 code for an access token and its details (username, expiration time and optionally refresh token) and returns them.

##### Parameters

| Name           | Type   | Description                                               | Required |
| -------------- | ------ | --------------------------------------------------------- | -------- |
| `clientId`     | string | the client id of the SteemConnect app                     | +        |
| `clientSecret` | string | the client secret of the SteemConnect app                 | +        |
| `redirectUri`  | string | the redirect URI used in the getAuthorizationUrl function | +        |
| `code`         | string | the OAuth2 code                                           | +        |

##### What does it return?

This function returns a **Promise** object that resolves into the access token + its details object.

##### Example usage

```typescript
import { getAccessToken } from 'steemconnect-firebase-functions';

const clientId = 'busy.app';
const clientSecret = '543hrfbhrb32ivcvs';
const redirectUri = 'https://strimi.pl/redirect';
const code = '432r432rnj45n4323f3ti456k5';

getAccessToken(clientId, clientSecret, redirectUri, code).then(credentials => {
  console.log(credentials);
});
```

---

#### getAuthorizationUrl

Creates and returns the authorization URL to SteemConnect OAuth2 service.

##### Parameters

| Name          | Type   | Description                                                          | Required |
| ------------- | ------ | -------------------------------------------------------------------- | -------- |
| `clientId`    | string | the client id of the SteemConnect app                                | +        |
| `redirectUri` | string | the URI you want the user to be redirected to after successful login | +        |
| `scope`       | array  | the array of scopes (ex. ['vote', 'comment'])                        | +        |
| `state`       | string | optional state variable                                              | -        |

##### What does it return?

This function returns a **string** - the URL of the SteemConnect OAuth2 authorization endpoint.

##### Example usage

```typescript
import { getAuthorizationUrl } from 'steemconnect-firebase-functions';

const clientId = 'busy.app';
const redirectUri = 'https://strimi.pl/redirect';
const scope = ['vote', 'offline'];

const endpoint = getAuthorizationUrl(clientId, redirectUri, scope);
```

---

#### getUserData

Gets and returns the data of the user.

##### Parameters

| Name          | Type   | Description                    | Required |
| ------------- | ------ | ------------------------------ | -------- |
| `accessToken` | string | the `access_token` of the user | +        |

##### What does it return?

This function returns a **Promise** object that resolves into user data object.

##### Example usage

```typescript
import { getUserData } from 'steemconnect-firebase-functions';

const accessToken = '432432543njn5k43b5hj23hjbhj423.543nbrj43btjhb4';

getUserData(accessToken).then(userData => {
  console.log(userData);
});
```

---

#### refreshAccessToken

Exchanges the refresh token for the new access token and its details (username, expiration time and refresh token) and returns them.

##### Parameters

| Name           | Type   | Description                                                        | Required |
| -------------- | ------ | ------------------------------------------------------------------ | -------- |
| `clientId`     | string | the client id of the SteemConnect app                              | +        |
| `clientSecret` | string | the client secret of the SteemConnect app                          | +        |
| `refreshToken` | string | the refresh_token of the user you want to get new access token for | +        |

##### What does it return?

This function returns a **Promise** object that resolves into the access token + its details object.

##### Example usage

```typescript
import { refreshAccessToken } from 'steemconnect-firebase-functions';

const clientId = 'busy.app';
const clientSecret = '543hrfbhrb32ivcvs';
const refreshToken = '432r432rnj45n4323f3ti456k5.g5rthokgd';

refreshAccessToken(clientId, clientSecret, redirectUri, code).then(
  newCredentials => {
    console.log(newCredentials);
  }
);
```

---

#### revokeAccessToken

Revokes given access token.

##### Parameters

| Name          | Type   | Description                  | Required |
| ------------- | ------ | ---------------------------- | -------- |
| `accessToken` | string | the `access_token` to revoke | +        |

##### What does it return?

This function returns a **Promise** object that resolves into the result of revoking token.

##### Example usage

```typescript
import { revokeAccessToken } from 'steemconnect-firebase-functions';

const accessToken = '432432543njn5k43b5hj23hjbhj423.543nbrj43btjhb4';

revokeAccessToken(accessToken).then(result => {
  console.log(result);
});
```

---

#### setUserMetadata

Sets user metadata and returns the data of this user.

##### Parameters

| Name          | Type   | Description                    | Required |
| ------------- | ------ | ------------------------------ | -------- |
| `accessToken` | string | the `access_token` of the user | +        |
| `metadata`    | object | the metadata to set            | +        |

##### What does it return?

This function returns a **Promise** object that resolves into user data object.

##### Example usage

```typescript
import { setUserMetadata } from 'steemconnect-firebase-functions';

const accessToken = '432432543njn5k43b5hj23hjbhj423.543nbrj43btjhb4';
const metadata = {
  testData: 'some-data'
};

setUserMetadata(accessToken, metadata).then(userData => {
  console.log(userData);
});
```

---

### Firebase specific functions

These function can be used only on the Firebase:

#### createFirebaseAccount

Creates or updates Firebase auth user account.

##### Parameters

| Name            | Type    | Description                                                  | Required |
| --------------- | ------- | ------------------------------------------------------------ | -------- |
| `admin`         | object  | the configurated `firebase-admin` object                     | +        |
| `uid`           | string  | the uid of the user                                          | +        |
| `username`      | string  | the username of the user                                     | +        |
| `photoURL`      | string  | optional user's photo URL                                    | -        |
| `email`         | string  | optional user's email                                        | -        |
| `emailVerified` | boolean | optional boolean whether or not the user's email is verified | -        |
| `phoneNumber`   | string  | optional user's phone number                                 | -        |
| `disabled`      | boolean | optional boolean whether or not the user is disabled         | -        |

##### What does it return?

This function returns a **Promise** object.

##### Example usage

```typescript
import { createFirebaseAccount } from 'steemconnect-firebase-functions';

import * as admin from 'firebase-admin';

const serviceAccount = require('../serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const uid = 'steemconnect:jakipatryk';
const username = 'jakipatryk';
const photoURL = 'https://some-uri.com/avatar.jpg';

createFirebaseAccount(admin, uid, username, photoURL).then(() => {
  console.log(5 * 20 + 11);
});
```

---

#### getAccessTokenFromFirestore

Gets and returns the access token + details object from the Firestore.

##### Parameters

| Name    | Type   | Description                                          | Required |
| ------- | ------ | ---------------------------------------------------- | -------- |
| `admin` | object | the configurated `firebase-admin` object             | +        |
| `uid`   | string | the uid of the user you want to get access token for | +        |

##### What does it return?

This function returns a **Promise** object that resolves into the access token + its details object.

##### Example usage

```typescript
import { getAccessTokenFromFirestore } from 'steemconnect-firebase-functions';

import * as admin from 'firebase-admin';

const serviceAccount = require('../serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const uid = 'steemconnect:jakipatryk';

getAccessTokenFromFirestore(admin, uid).then(credentials => {
  console.log(credentials);
});
```

---

#### mintFirebaseToken

Creates and returns Firebase custom auth token.

##### Parameters

| Name    | Type   | Description                                                         | Required |
| ------- | ------ | ------------------------------------------------------------------- | -------- |
| `admin` | object | the configurated `firebase-admin` object                            | +        |
| `uid`   | string | the uid of the user you want to mind custom Firebase auth token for | +        |

##### What does it return?

This function returns a **Promise** object that resolves into into Firebase custom auth token.

##### Example usage

```typescript
import { mintFirebaseToken } from 'steemconnect-firebase-functions';

import * as admin from 'firebase-admin';

const serviceAccount = require('../serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const uid = 'steemconnect:jakipatryk';

mintFirebaseToken(admin, uid).then(token => {
  console.log(token);
});
```

---

#### saveAccessToken

Saves access token and its details in the Firestore.

##### Parameters

| Name          | Type   | Description                                                         | Required |
| ------------- | ------ | ------------------------------------------------------------------- | -------- |
| `admin`       | object | the configurated `firebase-admin` object                            | +        |
| `uid`         | string | the uid of the user you want to mind custom Firebase auth token for | +        |
| `accessToken` | object | the access token + its details object                               | +        |

##### What does it return?

This function returns a **Promise** object.

##### Example usage

```typescript
import { saveAccessToken } from 'steemconnect-firebase-functions';

import * as admin from 'firebase-admin';

const serviceAccount = require('../serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const uid = 'steemconnect:jakipatryk';
const accessToken = {
  access_token: '423423432.fsdfewf43',
  expires_in: 4200000,
  username: 'jakipatryk',
  refresh_token: '4u5jnj4f3.543jim43i'
};

saveAccessToken(admin, uid, accessToken).then(() => {
  console.log(2 + 2 * 4);
});
```

---
