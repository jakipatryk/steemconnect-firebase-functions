## What is this module for?

This module contains functions called **operation creators**. Their name is self-descriptive - they create [operations](shared.md#operation).

Created operations can be then broadcasted to the Steem network using the [`broadcastOperations`](broadcasting.md#broadcastoperations) function from [_broadcasting_](broadcasting.md) module.

Most likely you will use this module for creating operations that aren't implemented yet in the [_broadcasting_](broadcasting.md) module.

## How to use it?

To use any of the functions below, you have to import it. You can either import it directly from this module:

```typescript
import { createOperation } from 'steemconnect-firebase-functions/operation-creators';
```

or from the library's main module:

```typescript
import { createOperation } from 'steemconnect-firebase-functions';
```

---

## API reference

### Functions

#### createOperation

```typescript
export declare const createOperation: (
  type: string,
  {
    ...parameters
  }: {
    [x: string]: any;
  }
) => Operation;
```

##### Definition

Creates operation based on given type and parameters.

##### Parameters

* `type` (_string_): type of the operation
* `parameters` (_object_): the operation parameters

##### Returns

* [`Operation`](shared.md#operation): operation created with given data

##### Example Usage

```typescript
import { createOperation } from 'steemconnect-firebase-functions/operation-creators';
import { Operation } from 'steemconnect-firebase-functions/shared';

const voteOperation: Operation = createOperation('vote', {
  voter: 'jakipatryk',
  author: 'ned',
  permlink: 'i-am-ned',
  weight: 2000
});
```

##### Implementation

The implementation is available on [Github](https://github.com/jakipatryk/steemconnect-firebase-functions/blob/master/src/operation-creators/createOperation.ts).

---

#### createComment

```typescript
export declare const createComment: (
  {
    parent_permlink,
    author,
    permlink,
    body,
    parent_author,
    title,
    json_metadata
  }: CommentConfig
) => Operation;
```

##### Definition

Creates `comment` operation.

##### Parameters

* `commentConfig` ([_CommentConfig_](shared.md#commentconfig)): the configuration object for a `comment` operation

##### Returns

* [`Operation`](shared.md#operation): `comment` operation

##### Example Usage

```typescript
import { createComment } from 'steemconnect-firebase-functions/operation-creators';
import { Operation } from 'steemconnect-firebase-functions/shared';

const commentOperation: Operation = createComment({
  parent_author: 'ned',
  parent_permlink: 'parentPermlinkOrMainTag',
  author: 'jakipatryk',
  permlink: 'i-am-jakipatryk-from-polska',
  body: 'Hello! Whats up ppl?'
});
```

##### Implementation

The implementation is available on [Github](https://github.com/jakipatryk/steemconnect-firebase-functions/blob/master/src/operation-creators/createComment.ts).

---

#### createCommentOptions

```typescript
export declare const createCommentOptions: (
  {
    author,
    permlink,
    max_accepted_payout,
    percent_steem_dollars,
    allow_votes,
    allow_curation_rewards,
    extensions: [...restExtensions]
  }: CommentOptionsConfig
) => Operation;
```

##### Definition

Creates `comment_options` operation.

##### Parameters

* `commentOptionsConfig` ([_CommentOptionsConfig_](shared.md#commentoptionsconfig)): the configuration object for a `comment_options` operation

##### Returns

* [`Operation`](shared.md#operation): `comment_options` operation

##### Example Usage

```typescript
import { createCommentOptions } from 'steemconnect-firebase-functions/operation-creators';
import { Operation } from 'steemconnect-firebase-functions/shared';

const commentOptionsOperation: Operation = createComment({
  author: 'jakipatryk',
  permlink: 'i-am-jakipatryk-from-polska',
  max_accepted_payout: '10.000 SBD'
  extensions: [
    [
      0,
      {
        beneficiaries: [
          {
            account: 'utopian.pay',
            weight: 2500
          }
        ]
      }
    ]
  ]
});
```

##### Implementation

The implementation is available on [Github](https://github.com/jakipatryk/steemconnect-firebase-functions/blob/master/src/operation-creators/createCommentOptions.ts).

---

#### createCustomJson

```typescript
export declare const createCustomJson: (
  {
    required_posting_auths: [...postingAuths],
    id,
    json,
    required_auths: [...auths]
  }: CustomJsonConfig
) => Operation;
```

##### Definition

Creates `custom_json` operation.

##### Parameters

* `customJsonConfig` ([_CustomJsonConfig_](shared.md#customjsonconfig)): the configuration object for a `custom_json` operation

##### Returns

* [`Operation`](shared.md#operation): `custom_json` operation

##### Example Usage

```typescript
import { createCustomJson } from 'steemconnect-firebase-functions/operation-creators';
import { Operation } from 'steemconnect-firebase-functions/shared';

const customJsonOperation: Operation = createCustomJson({
  requiredPostingAuths: ['jakipatryk'],
  id: 'follow',
  customJson: JSON.stringify([
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

The implementation is available on [Github](https://github.com/jakipatryk/steemconnect-firebase-functions/blob/master/src/operation-creators/createCustomJson.ts).

---

#### createDeleteComment

```typescript
export declare const createDeleteComment: (
  { author, permlink }: DeleteCommentConfig
) => Operation;
```

##### Definition

Creates `delete_comment` operation.

##### Parameters

* `deleteCommentConfig` ([_DeleteCommentConfig_](shared.md#deletecommentconfig)): the configuration object for a `delete_comment` operation

##### Returns

* [`Operation`](shared.md#operation): `delete_comment` operation

##### Example Usage

```typescript
import { createDeleteComment } from 'steemconnect-firebase-functions/operation-creators';
import { Operation } from 'steemconnect-firebase-functions/shared';

const deleteCommentOperation: Operation = createDeleteComment({
  author: 'jakipatryk',
  permlink: 'i-am-jakipatryk-from-polska'
});
```

##### Implementation

The implementation is available on [Github](https://github.com/jakipatryk/steemconnect-firebase-functions/blob/master/src/operation-creators/createDeleteComment.ts).

---

#### createVote

```typescript
export declare const createVote: (
  { voter, author, permlink, weight }: VoteConfig
) => Operation;
```

##### Definition

Creates `vote` operation.

##### Parameters

* `voteConfig` ([_VoteConfig_](shared.md#voteconfig)): the configuration object for a `vote` operation

##### Returns

* [`Operation`](shared.md#operation): `vote` operation

##### Example Usage

```typescript
import { createVote } from 'steemconnect-firebase-functions/operation-creators';
import { Operation } from 'steemconnect-firebase-functions/shared';

const voteOperation: Operation = createVote({
  voter: 'jakipatryk',
  author: 'ned',
  permlink: 'i-am-ned',
  weight: 300
});
```

##### Implementation

The implementation is available on [Github](https://github.com/jakipatryk/steemconnect-firebase-functions/blob/master/src/operation-creators/createVote.ts).
