## What is this module for?

This module stores these tools that didn't fit other modules or are used by multiple modules.

You'll find here two **utility functions**, a bunch of **helper functions**, **error constants**, and a lot of **interfaces** (+ one **type**).

## API reference

### Utilities

#### pipe

##### Definition

Generic function used to compose functions.

##### Implementation

```typescript
export const pipe = <T>(...fns: Array<Function>) => (x: T) =>
  fns.reduce((v, f) => f(v), x);
```

##### Example Usage

```typescript
export const createBroadcastableVote = pipe<VoteConfig>(
  createVote,
  Array.of,
  broadcastOperations
);
```

###### References

* [`VoteConfig`](#voteconfig)
* [`createVote`](operation=creators.md#createvote)
* [`broadcastOperations`](broadcasting.md#broadcastoperations)

---

#### combine

##### Definition

Generic function used to combine multiple operation creators into one with a single configuration object.

##### Implementation

```typescript
export const combine = <T, U>(...fns: Array<Function>) => (
  ...args: Array<T>
): Array<U> =>
  fns.reduce(
    (arr, f) => {
      arr.push(f(...args));
      return arr;
    },
    [] as Array<U>
  );
```

##### Example Usage

```typescript
export const combineCommentWithOptions = combine<
  CommentConfig & CommentOptionsConfig,
  Operation
>(createComment, createCommentOptions);
```

###### References

* [`CommentConfig`](#commentconfig)
* [`CommentOptionsConfig`](#commentoptionsconfig)
* [`Operation`](#operation)
* [`createComment`](operation-creators.md#createcomment)
* [`createCommentOptions`](operation-creators.md#createcommentoptions)

---

### Functions

#### combineCommentWithOptions

```typescript
export declare const combineCommentWithOptions: (
  configuration: CommentConfig & CommentOptionsConfig
) => Operation[];
```

##### Definition

Combines `createComment` with `createCommentOptions`, so you can create these two operations with a single configuration object.

##### Parameters

* `configuration` ([`CommentConfig`](#commentconfig) & [`CommentOptionsConfig`](#commentoptionsconfig)): combined configuration object

##### Returns

* [`Operations`](#operations): two operations - `comment` and `comment_options` - in an array

##### Example Usage

```typescript
import { combineCommentWithOptions } from 'steemconnect-firebase-functions';

const combinedCommentWithOptions = combineCommentWithOptions({
  parent_permlink: 'i-am-ned',
  author: 'jakipatryk',
  permlink: 'hello-ned-sup',
  body: 'Hello Ned! Whats up?',
  parent_author: 'ned',
  title: '',
  extensions: [
    [
      0,
      {
        beneficiaries: [
          {
            account: 'strimi',
            weight: 1000
          }
        ]
      }
    ]
  ]
});

//  [
//    [
//      'comment', {
//        parent_permlink: 'i-am-ned',
//        author: 'jakipatryk',
//        permlink: 'hello-ned-sup',
//        body: 'Hello Ned! Whats up?',
//        parent_author: 'ned',
//        title: '',
//        json_metadata: ''
//       }
//    ],
//    [
//      'comment_options', {
//        author: 'jakipatryk',
//        permlink: 'hello-ned-sup',
//        max_accepted_payout: '1000000.000 SBD',
//        percent_steem_dollars: 10000,
//        allow_votes: true,
//        allow_curation_rewards: true,
//        extensions: [
//            [
//              0,
//              {
//                beneficiaries: [
//                  {
//                    account: 'strimi',
//                    weight: 1000
//                  }
//                ]
//              }
//            ]
//        ]
//      ]
//    ]
```

---

#### createBroadcastableVote

```typescript
export declare const createBroadcastableVote: (
  voteConfig: VoteConfig
) => Function;
```

##### Definition

Creates [_broadcastable_](getting-started.md#broadcastable) for a `vote` operation.

##### Parameters

* `voteConfig` ([`VoteConfig`](#voteconfig)): the configuration object for a vote

##### Returns

* [`broadcastable`](getting-started.md#broadcastable): the broadcastable function for a `vote` operation

##### Example Usage

```typescript
import { createBroadcastableVote } from 'steemconnect-firebase-functions';

const broadcastableVote = createBroadcastableVote({
  voter: 'jakipatryk',
  author: 'ned',
  permlink: 'i-am-ned',
  weight: 10000
});
```

##### Implementation

The implementation is available on [Github](https://github.com/jakipatryk/steemconnect-firebase-functions/blob/master/src/shared/helpers/createBroadcastable.ts).

---

#### createBroadcastableComment

```typescript
export declare const createBroadcastableComment: (
  commentConfig: CommentConfig
) => Function;
```

##### Definition

Creates [_broadcastable_](getting-started.md#broadcastable) for a `comment` operation.

##### Parameters

* `commentConfig` ([`CommentConfig`](#commentconfig)): the configuration object for a comment

##### Returns

* [`broadcastable`](getting-started.md#broadcastable): the broadcastable function for a `comment` operation

##### Example Usage

```typescript
import { createBroadcastableComment } from 'steemconnect-firebase-functions';

const broadcastableComment = createBroadcastableComment({
  parent_author: 'ned',
  parent_permlink: 'i-am-ned',
  author: 'jakipatryk',
  permlink: 'i-am-jakipatryk-from-polska',
  body: 'Hello! Whats up Ned?'
});
```

##### Implementation

The implementation is available on [Github](https://github.com/jakipatryk/steemconnect-firebase-functions/blob/master/src/shared/helpers/createBroadcastable.ts).

---

#### createBroadcastableCommentOptions

```typescript
export declare const createBroadcastableCommentOptions: (
  commentOptionsConfig: CommentOptionsConfig
) => Function;
```

##### Definition

Creates [_broadcastable_](getting-started.md#broadcastable) for a `comment_options` operation.

##### Parameters

* `commentOptionsConfig` ([`CommentOptionsConfig`](#commentoptionsconfig)): the configuration object for a comment options

##### Returns

* [`broadcastable`](getting-started.md#broadcastable): the broadcastable function for a `comment_options` operation

##### Example Usage

```typescript
import { createBroadcastableCommentOptions } from 'steemconnect-firebase-functions';

const broadcastableCommentOptions = createBroadcastableCommentOptions({
  author: 'jakipatryk',
  permlink: 'i-am-jakipatryk-from-polska',
  percent_steem_dollars: 0
});
```

##### Implementation

The implementation is available on [Github](https://github.com/jakipatryk/steemconnect-firebase-functions/blob/master/src/shared/helpers/createBroadcastable.ts).

---

#### createBroadcastableCustomJson

```typescript
export declare const createBroadcastableCustomJson: (
  customJsonConfig: CustomJsonConfig
) => Function;
```

##### Definition

Creates [_broadcastable_](getting-started.md#broadcastable) for a `custom_json` operation.

##### Parameters

* `customJsonConfig` ([`CustomJsonConfig`](#customjsonconfig)): the configuration object for a custom json

##### Returns

* [`broadcastable`](getting-started.md#broadcastable): the broadcastable function for a `custom_json` operation

##### Example Usage

```typescript
import { createBroadcastableCustomJson } from 'steemconnect-firebase-functions';

const broadcastableCustomJson = createBroadcastableCustomJson({
  required_posting_auths: ['jakipatryk'],
  id: 'follow',
  json: JSON.stringify([
    'reblog',
    {
      account: 'jakipatryk',
      author: 'ned',
      permlink: 'i-am-ned'
    }
  ])
});
```

##### Implementation

The implementation is available on [Github](https://github.com/jakipatryk/steemconnect-firebase-functions/blob/master/src/shared/helpers/createBroadcastable.ts).

---

#### checkOAuth2Error

```typescript
export declare const checkOAuth2Error: (
  { error, error_description }: OAuth2Error,
  errorToCheckAgainst: OAuth2Error
) => boolean;
```

##### Definition

Checks if provided error object is equal the error object to check against.

##### Parameters

* `actualError` ([`OAuth2Error`](#oauth2error)): the error object to be checked

- `errorToCheckAgainst` ([`OAuth2Error`](#oauth2error)): the error object to check `actualError` against

##### Returns

* `boolean`: true if errors are equal, false otherwise

##### Example Usage

```typescript
import { checkOAuth2Error, AccessTokenResponse, ACCESS_TOKEN_EXPIRED, broadcastUpvote, Vote } from 'steemconnect-firebase-functions';

const accessToken: AccessTokenResponse = {
  access_token: 'smtnjknfjfnsk342.sddvdskgs',
  expires_in: 640000
  username: 'jakipatryk'
}
const upvote: Vote = {
  author: 'ned',
  permlink: 'i-am-ned'
  weight: 2000
}

broadcastUpvote(upvote)(accessToken)
  .then(response => console.log(response))
  .catch(err => checkOAuth2Error(err, ACCESS_TOKEN_EXPIRED)
    ? console.error('Your access token has expired, please get a new one!')
    : console.log('Oups, something went wrong'));
```

##### Implementation

The implementation is available on [Github](https://github.com/jakipatryk/steemconnect-firebase-functions/blob/master/src/shared/errors/checkOAuth2Error.ts).

---

#### isAccessTokenExpiredError

```typescript
export declare const isAccessTokenExpiredError: (
  { error, error_description }: OAuth2Error
) => boolean;
```

##### Definition

Checks if provided error object is equal to the error caused by expired access token.

##### Parameters

* `error` ([`OAuth2Error`](#oauth2error)): the error object to be checked

##### Returns

* `boolean`: true if errors is equal to error caused by expired access token, false otherwise

##### Example Usage

```typescript
import { isAccessTokenExpiredError, AccessTokenResponse, broadcastUpvote, Vote } from 'steemconnect-firebase-functions';

const accessToken: AccessTokenResponse = {
  access_token: 'smtnjknfjfnsk342.sddvdskgs',
  expires_in: 640000
  username: 'jakipatryk'
}
const upvote: Vote = {
  author: 'ned',
  permlink: 'i-am-ned'
  weight: 2000
}

broadcastUpvote(upvote)(accessToken)
  .then(response => console.log(response))
  .catch(err => isAccessTokenExpiredError(err)
    ? console.error('Your access token has expired, please get a new one!')
    : console.log('Oups, something went wrong'));
```

##### Implementation

The implementation is available on [Github](https://github.com/jakipatryk/steemconnect-firebase-functions/blob/master/src/shared/errors/isAccessTokenExpiredError.ts).

---

#### isAccessTokenInvalidError

```typescript
export declare const isAccessTokenInvalidError: (
  { error, error_description }: OAuth2Error
) => boolean;
```

##### Definition

Checks if provided error object is equal to the error caused by invalid access token.

##### Parameters

* `error` ([`OAuth2Error`](#oauth2error)): the error object to be checked

##### Returns

* `boolean`: true if errors is equal to error caused by invalid access token, false otherwise

##### Example Usage

```typescript
import { isAccessTokenInvalidError, AccessTokenResponse, broadcastUpvote, Vote } from 'steemconnect-firebase-functions';

const accessToken: AccessTokenResponse = {
  access_token: 'smtnjknfjfnsk342.sddvdskgs',
  expires_in: 640000
  username: 'jakipatryk'
}
const upvote: Vote = {
  author: 'ned',
  permlink: 'i-am-ned'
  weight: 2000
}

broadcastUpvote(upvote)(accessToken)
  .then(response => console.log(response))
  .catch(err => isAccessTokenInvalidError(err)
    ? console.error('Your access token is invalid!')
    : console.log('Oups, something went wrong'));
```

##### Implementation

The implementation is available on [Github](https://github.com/jakipatryk/steemconnect-firebase-functions/blob/master/src/shared/errors/isAccessTokenInvalidError.ts).

---

#### isAccessTokenRevokedError

```typescript
export declare const isAccessTokenRevokedError: (
  { error, error_description }: OAuth2Error
) => boolean;
```

##### Definition

Checks if provided error object is equal to the error caused by revoked access token.

##### Parameters

* `error` ([`OAuth2Error`](#oauth2error)): the error object to be checked

##### Returns

* `boolean`: true if errors is equal to error caused by revoked access token, false otherwise

##### Example Usage

```typescript
import { isAccessTokenRevokedError, AccessTokenResponse, broadcastUpvote, Vote } from 'steemconnect-firebase-functions';

const accessToken: AccessTokenResponse = {
  access_token: 'smtnjknfjfnsk342.sddvdskgs',
  expires_in: 640000
  username: 'jakipatryk'
}
const upvote: Vote = {
  author: 'ned',
  permlink: 'i-am-ned'
  weight: 2000
}

broadcastUpvote(upvote)(accessToken)
  .then(response => console.log(response))
  .catch(err => isAccessTokenRevokedError(err)
    ? console.error('Your access token has been revoked, please get a new one!')
    : console.log('Oups, something went wrong'));
```

##### Implementation

The implementation is available on [Github](https://github.com/jakipatryk/steemconnect-firebase-functions/blob/master/src/shared/errors/isAccessTokenRevokedError.ts).

---

#### isAccessTokenError

```typescript
export declare const isAccessTokenError: (
  { error, error_description }: OAuth2Error
) => boolean;
```

##### Definition

Checks if provided error object is equal to any of errors caused by access token.

##### Parameters

* `error` ([`OAuth2Error`](#oauth2error)): the error object to be checked

##### Returns

* `boolean`: true if errors is equal to error caused by access token, false otherwise

##### Example Usage

```typescript
import { isAccessTokenError, AccessTokenResponse, broadcastUpvote, Vote } from 'steemconnect-firebase-functions';

const accessToken: AccessTokenResponse = {
  access_token: 'smtnjknfjfnsk342.sddvdskgs',
  expires_in: 640000
  username: 'jakipatryk'
}
const upvote: Vote = {
  author: 'ned',
  permlink: 'i-am-ned'
  weight: 2000
}

broadcastUpvote(upvote)(accessToken)
  .then(response => console.log(response))
  .catch(
    err => isAccessTokenError(err)
      ? console.error('Something is wrong with your access token, please get a new one!')
      : console.error('Oups, something went wrong')
  );
```

##### Implementation

The implementation is available on [Github](https://github.com/jakipatryk/steemconnect-firebase-functions/blob/master/src/shared/errors/isAccessTokenError.ts).

---

#### isRefreshTokenError

```typescript
export declare const isRefreshTokenError: (
  { error, error_description }: OAuth2Error
) => boolean;
```

##### Definition

Checks if provided error object is caused by refresh token.

##### Parameters

* `error` ([`OAuth2Error`](#oauth2error)): the error object to be checked

##### Returns

* `boolean`: true if errors is equal to error caused by refresh token, false otherwise

##### Example Usage

```typescript
import {
  isRefreshTokenError,
  refreshAccessToken,
  ClientCredentials
} from 'steemconnect-firebase-functions';

const clientCredentials: ClientCredentials = {
  clientId: 'strimi.app',
  clientSecret: '4324mknknrk3nkjnkvfgd.434nrjk53'
};
const refreshToken: string = 'smtfhdbgsnjr3nr34.34n5nk3';

refreshAccessToken({ ...clientCredentials, refreshToken })
  .then(newTokens => console.log(newTokens))
  .catch(
    err =>
      isRefreshTokenError(err)
        ? console.error('Your refresh token is wrong!')
        : console.error('Oups, someting went wrong')
  );
```

##### Implementation

The implementation is available on [Github](https://github.com/jakipatryk/steemconnect-firebase-functions/blob/master/src/shared/errors/isRefreshTokenError.ts).

---

#### isCodeError

```typescript
export declare const isCodeError: (
  { error, error_description }: OAuth2Error
) => boolean;
```

##### Definition

Checks if provided error object is caused by wrong code.

##### Parameters

* `error` ([`OAuth2Error`](#oauth2error)): the error object to be checked

##### Returns

* `boolean`: true if errors is equal to error caused by code, false otherwise

##### Example Usage

```typescript
import {
  isCodeError,
  getAccessToken,
  ClientCredentials
} from 'steemconnect-firebase-functions';

const clientCredentials: ClientCredentials = {
  clientId: 'strimi.app',
  clientSecret: '4324mknknrk3nkjnkvfgd.434nrjk53'
};
const redirectUri: string = 'https://strimi.pl/redirect';
const code: string = 'msdofwef.34jkfnmsdkjfnsdkfksd';

getAccessToken({ ...clientCredentials, redirectUri, code })
  .then(tokens => console.log(tokens))
  .catch(
    err =>
      isCodeError(err)
        ? console.error('Your code is wrong!')
        : console.error('Oups, someting went wrong')
  );
```

##### Implementation

The implementation is available on [Github](https://github.com/jakipatryk/steemconnect-firebase-functions/blob/master/src/shared/errors/isCodeError.ts).

---

#### createBroadcastableDeleteComment

```typescript
export declare const createBroadcastableDeleteComment: (
  deleteCommentConfig: DeleteCommentConfig
) => Function;
```

##### Definition

Creates [_broadcastable_](getting-started.md#broadcastable) for a `delete_comment` operation.

##### Parameters

* `deleteCommentConfig` ([`DeleteCommentConfig`](#deletecommentconfig)): the configuration object for a comment deletion

##### Returns

* [`broadcastable`](getting-started.md#broadcastable): the broadcastable function for a `delete_comment` operation

##### Example Usage

```typescript
import { createBroadcastableDeleteComment } from 'steemconnect-firebase-functions';

const broadcastableDeleteComment = createBroadcastableDeleteComment({
  author: 'jakipatryk',
  permlink: 'i-am-jakipatryk'
});
```

##### Implementation

The implementation is available on [Github](https://github.com/jakipatryk/steemconnect-firebase-functions/blob/master/src/shared/helpers/createBroadcastable.ts).

---

### Interfaces and Types

#### AccessTokenResponse

##### Definition

Defines an object containing OAuth2 tokens details.

##### Implementation

```typescript
export interface AccessTokenResponse {
  access_token: string;
  expires_in: number;
  username: string;
  refresh_token?: string;
}
```

---

#### CommentConfig

##### Definition

Defines a configuration object for `comment` operation.

###### Implementation

```typescript
export interface CommentConfig {
  parent_permlink: string;
  author: string;
  permlink: string;
  body: string;
  parent_author?: string;
  title?: string;
  json_metadata?: string;
}
```

---

#### CommentOptionsConfig

##### Definition

Defines a configuration object for `comment_options` operation.

###### Implementation

```typescript
export interface CommentOptionsConfig {
  author: string;
  permlink: string;
  extensions?: Array<any>;
  max_accepted_payout?: string;
  percent_steem_dollars?: number;
  allow_votes?: boolean;
  allow_curation_rewards?: boolean;
}
```

---

#### CustomJsonConfig

##### Definition

Defines a configuration object for `custom_json` operation.

###### Implementation

```typescript
export interface CustomJsonConfig {
  required_posting_auths: Array<string>;
  id: string;
  json: string;
  required_auths?: Array<string>;
}
```

---

#### DeleteCommentConfig

##### Definition

Defines a configuration object for `delete_comment` operation.

###### Implementation

```typescript
export interface DeleteCommentConfig {
  author: string;
  permlink: string;
}
```

---

#### VoteConfig

##### Definition

Defines a configuration object for `vote` operation.

###### Implementation

```typescript
export interface VoteConfig {
  voter: string;
  author: string;
  permlink: string;
  weight: number;
}
```

---

#### UserData

##### Definition

Defines an object containing user data from SteemConnect.

##### Implementation

```typescript
export interface UserData {
  user: string;
  _id: string;
  name: string;
  account: object;
  scope: Array<string>;
  user_metadata: object;
}
```

---

#### OAuth2Error

##### Definition

Defines an OAuth2 error object.

##### Implementation

```typescript
export interface OAuth2Error {
  error: string;
  error_description: string;
}
```

---

#### Operation

##### Defniniton

Defines an operation object (array).

##### Implementation

```typescript
export interface Operation extends Array<string | object> {
  // type of operation
  0: string;

  // operation details
  1: object;
}
```

#### Operations

##### Definition

A type which defines an array of operations.

##### Implementation

```typescript
export type Operations = Array<Operation>;
```

##### References

* [`Operation`](#operation)

---

### Constants

#### ACCESS_TOKEN_EXPIRED

##### Definition

Error message caused by expired `access_token`.

##### Implementation

```typescript
export const ACCESS_TOKEN_EXPIRED: OAuth2Error = Object.freeze({
  error: 'invalid_grant',
  error_description: 'The token has invalid role'
});
```

##### References

* [`OAuth2Error`](#oauth2error)

---

#### ACCESS_TOKEN_INVALID

##### Definition

Error message caused by invalid `access_token`.

##### Implementation

```typescript
export const ACCESS_TOKEN_INVALID: OAuth2Error = Object.freeze({
  error: 'invalid_grant',
  error_description: 'The token has invalid role'
});
```

##### References

* [`OAuth2Error`](#oauth2error)

---

#### ACCESS_TOKEN_REVOKED

##### Definition

Error message caused by revoked `access_token`.

##### Implementation

```typescript
export const ACCESS_TOKEN_REVOKED: OAuth2Error = Object.freeze({
  error: 'invalid_grant',
  error_description: 'The access_token has been revoked'
});
```

##### References

* [`OAuth2Error`](#oauth2error)

---

#### CODE_INVALID

##### Definition

Error message caused by invalid `code`.

##### Implementation

```typescript
export const CODE_INVALID: OAuth2Error = Object.freeze({
  error: 'invalid_grant',
  error_description: 'The token has invalid role'
});
```

##### References

* [`OAuth2Error`](#oauth2error)

---

#### REFRESH_TOKEN_INVALID

##### Definition

Error message caused by invalid `refresh_token`.

##### Implementation

```typescript
export const REFRESH_TOKEN_INVALID: OAuth2Error = Object.freeze({
  error: 'invalid_grant',
  error_description: 'The token has invalid role'
});
```

##### References

* [`OAuth2Error`](#oauth2error)

---
