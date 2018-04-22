## What is this module for?

Broadcasting module was created for **handling** broadcasting operations to the Steem blockchain using **SteemConnect's tokens**.

There is one **general** function ([`broadcastOperations`](#broadcastoperations)), several **operation-specific** functions (for example, [`broadcastPost`](#broadcastpost)), and one **wrapper** function for handling access token refreshing if the provided one had expired ([`rely`](#rely)).

## How to use it?

To use any of the functions, you have to import it. There are two main ways to do it, you can either import it directly from the broadcasting module:

```typescript
import { broadcastOperations } from 'steemconnect-firebase-functions/broadcasting';
```

or from the main module:

```typescript
import { broadcastOperations } from 'steemconnect-firebase-functions';
```

---

## API reference

### Functions

#### broadcastOperations

```typescript
export declare function broadcastOperations([...operations]: Operations): (
  { access_token }: AccessTokenResponse
) => Promise<BroadcastResult>;
```

##### Definition

Broadcasts given operations to the Steem blockchain.

##### Parameters

**Step one** (for the outer function):

* `operations` ([_Operations_](shared.md#operations)): an array of operations to broadcast

**Step two** (for the inner function):

* `accessToken` ([_AccessTokenResponse_](shared.md#accesstokenresponse)): an object with token details of the user for whom broadcast is requested for

##### Returns

**Step one** (from the outer function):

* (_[broadcastable](getting-started.md#broadcastable)_): an inner function

**Step two** (from the inner function):

* (_Promise<[BroadcastResult](#broadcastresult)>_): a `Promise` object which resolves with the result of the broadcast

##### Example Usage

```typescript
import { broadcastOperations } from 'steemconnect-firebase-functions/broadcasting';
import {
  AccessTokenResponse,
  Operations
} from 'steemconnect-firebase-functions/shared';

const accessToken: AccessTokenResponse = {
  access_token: '435tfgfdgdfg.434342',
  expires_in: 3243234,
  username: 'jakipatryk-dev'
};

const operations: Operations = [
  [
    'vote',
    {
      voter: 'jakipatryk-dev',
      author: 'ned',
      permlink: 'i-am-ned',
      weight: 10000
    }
  ]
];

broadcastOperations(operations)(accessToken).then(result =>
  console.log(result)
);
```

##### Implementation

The implementation is available on [Github](https://github.com/jakipatryk/steemconnect-firebase-functions/blob/master/src/broadcasting/broadcastOperations.ts).

---

#### rely

```typescript
export declare const rely: (
  { clientId, clientSecret }: ClientCredenctials
) => (
  { access_token, refresh_token, username }: Required<AccessTokenResponse>
) => (
  broadcastable: Function
) => Promise<BroadcastResult & Partial<AccessTokenResponse>>;
```

##### Definition

A wrapper function for [_broadcastables_](getting-started.md#broadcastable) which ensures that broadcast is successful if `refresh_token` is correct.

##### Parameters

**Step one** (for the outer function):

* `clientCredentials` ([_ClientCredentails_](oauth2.md#clientcredentials)): object with client credentials

**Step two** (for the middle function):

* `accessToken` ([_AccessTokenResponse_](shared.md#accesstokenresponse)): an object with token details (`refresh_token` is required there) of the user for whom broadcast is requested for

**Step three** (for the inner function)

* [`broadcastable`](getting-started.md#broadcastable): the broadcastable function

##### Returns

**Step one** (from the outer function):

* middle function with `clientCredentials` in a closure

**Step two** (from the middle function):

* inner function with `clientCredentials` and `accessToken` in a closue

**Step three** (from the inner function):

* (_Promise<[BroadcastResult](#broadcastresult) & Partial<[AccessTokenResponse](shared.md#accesstokenresponse)>>_): a `Promise` object which resolves with the result of the broadcast and new tokens if refreshed

##### Example Usage

```typescript
import { rely } from 'steemconnect-firebase-functions/broadcasting';
import { ClientCredentials } from 'steemconnect-firebase-functions/oauth2';
import {
  AccessTokenResponse,
  Operations
} from 'steemconnect-firebase-functions/shared';

const clientCredentials: ClientCredentials = {
  clientId: 'strimi.app',
  clientSecret: '432rnj3nr23nkvfdvdf'
};
const accessToken: AccessTokenResponse = {
  access_token: 'fdsfertre',
  expires_in: 4323432,
  username: 'jakipatryk',
  refresh_token: '3rk3m2krl3'
};
const voteOperation: Operations = [
  [
    'vote',
    {
      voter: 'jakipatryk',
      author: 'whoever',
      permlink: 'some-permlink',
      weight: 10000
    }
  ]
];

const broadcastableVote = broadcastOperations(voteOperations);

rely(clientCredentials)(accessToken)(broadcastableVote).then(response =>
  console.log(response)
);
//  {
//    result: { ... }
//    access_token: 'new access token if refreshed, otherwise undefined`
//    refresh_token: 'new refresh token if refreshed, otherwise undefined'
//    username: ...
//    expires: ...
//  }
```

##### Implementation

The implementation is available on [Github](https://github.com/jakipatryk/steemconnect-firebase-functions/blob/master/src/broadcasting/rely.ts).

---

#### broadcastComment

```typescript
export declare const broadcastComment: (
  {
    parentAuthor,
    parentPermlink,
    commentPermlink,
    commentBody,
    commentTitle,
    commentMetadata
  }: Comment
) => (
  { access_token, username }: AccessTokenResponse
) => Promise<BroadcastResult>;
```

##### Definition

Broadcasts comment for a given user to the Steem blockchain.

##### Parameters

**Step one** (for the outer functions):

* `commentConfig` (_[Comment](#comment)_): the config object for the comment

**Step two** (for the inner functions):

* `accessToken` (_[AccessTokenResponse](shared.md#accesstokenresponse)_): an object with token details of the user for whom broadcast is requested for

##### Returns

**Step one** (from the outer function):

* (_[broadcastable](getting-started.md#broadcastable)_): an inner function

**Step two** (from the inner function):

* (_Promise<[BroadcastResult](#broadcastresult)>_): a `Promise` object which resolves with the result of the broadcast

##### Example Usage

```typescript
import {
  broadcastComment,
  Comment
} from 'steemconnect-firebase-functions/broadcasting';
import { AccessTokenResponse } from 'steemconnect-firebase-functions/shared';

const commentConfig: Comment = {
  parentAuthor: 'ned',
  parentPermlink: 'i-am-ned',
  commentPermlink: 'permlink-to-comment',
  commentBody: 'Wow! Such an amazing post!',
  commentMetadata: {
    app: 'strimi/1.0.0',
    community: 'strimi'
  }
};
const accessToken: AccessTokenResponse = {
  access_token: 'etfso443nnf3.3423hhf',
  expires_in: 640000,
  username: 'jakipatryk'
};

broadcastComment(commentConfig)(accessToken).then(response =>
  console.log(response)
);
//  {
//    result: { ... }
//  }
```

##### Implementation

The implementation is available on [Github](https://github.com/jakipatryk/steemconnect-firebase-functions/blob/master/src/broadcasting/broadcastComment.ts).

---

#### broadcastDeletion

```typescript
export declare const broadcastDeletion: (
  { permlink }: Deletion
) => (
  { access_token, username }: AccessTokenResponse
) => Promise<BroadcastResult>;
```

##### Definition

Broadcasts deletion of either comment or post to the Steem blockchain.

##### Parameters

* `deletionConfig` (_[Deletion](#deletion)_): the config object for the deletion

**Step two** (for the inner functions):

* `accessToken` (_[AccessTokenResponse](shared.md#accesstokenresponse)_): an object with token details of the user for whom broadcast is requested for

##### Returns

**Step one** (from the outer function):

* (_[broadcastable](getting-started.md#broadcastable)_): an inner function

**Step two** (from the inner function):

* (_Promise<[BroadcastResult](#broadcastresult)>_): a `Promise` object which resolves with the result of the broadcast

##### Example Usage

```typescript
import {
  broadcastDeletion,
  Deletion
} from 'steemconnect-firebase-functions/broadcasting';
import { AccessTokenResponse } from 'steemconnect-firebase-functions/shared';

const deletionConfig: Deletion = {
  permlink: 'my-bad-post'
};
const accessToken: AccessTokenResponse = {
  access_token: 'kj3n4jn2342.432p4k2p',
  expires_in: 640000,
  username: 'ned'
};

broadcastDeletion(deletionConfig)(accessToken).then(response =>
  console.log(response)
);
//  {
//    result: { ... }
//  }
```

##### Implementation

The implementation is available on [Github](https://github.com/jakipatryk/steemconnect-firebase-functions/blob/master/src/broadcasting/broadcastDeletion.ts).

---

#### broadcastDownvote

```typescript
export declare const broadcastDownvote: (
  { author, permlink, weight }: Vote
) => (
  { access_token, username }: AccessTokenResponse
) => Promise<BroadcastResult>;
```

##### Definition

Broadcasts downvote to the Steem blockchain.

##### Parameters

* `downvoteConfig` (_[Vote](#vote)_): the config object for the vote (even though you want to broadcast downvote, pass a positive number in the weight)

**Step two** (for the inner functions):

* `accessToken` (_[AccessTokenResponse](shared.md#accesstokenresponse)_): an object with token details of the user for whom broadcast is requested for

##### Returns

**Step one** (from the outer function):

* (_[broadcastable](getting-started.md#broadcastable)_): an inner function

**Step two** (from the inner function):

* (_Promise<[BroadcastResult](#broadcastresult)>_): a `Promise` object which resolves with the result of the broadcast

##### Example Usage

```typescript
import {
  broadcastDownvote,
  Vote
} from 'steemconnect-firebase-functions/broadcasting';
import { AccessTokenResponse } from 'steemconnect-firebase-functions/shared';

const downvoteConfig: Vote = {
  author: 'ned',
  permlink: 'i-am-ned',
  weight: 10000 // 100% downvote
};
const accessToken: AccessTokenResponse = {
  access_token: 'kj3n4jn2342.432p4k2p',
  expires_in: 640000,
  username: 'jakipatryk'
};

broadcastDownvote(downvoteConfig)(accessToken).then(response =>
  console.log(response)
);
//  {
//    result: { ... }
//  }
```

##### Implementation

The implementation is available on [Github](https://github.com/jakipatryk/steemconnect-firebase-functions/blob/master/src/broadcasting/broadcastDownvote.ts).

---

#### broadcastFollow

```typescript
export declare const broadcastFollow: (
  { userToFollow }: Follow
) => (
  { access_token, username }: AccessTokenResponse
) => Promise<BroadcastResult>;
```

##### Definition

Broadcasts follow to the Steem blockchain.

##### Parameters

* `followConfig` (_[Follow](#follow)_): the config object for the follow

**Step two** (for the inner functions):

* `accessToken` (_[AccessTokenResponse](shared.md#accesstokenresponse)_): an object with token details of the user for whom broadcast is requested for

##### Returns

**Step one** (from the outer function):

* (_[broadcastable](getting-started.md#broadcastable)_): an inner function

**Step two** (from the inner function):

* (_Promise<[BroadcastResult](#broadcastresult)>_): a `Promise` object which resolves with the result of the broadcast

##### Example Usage

```typescript
import {
  broadcastFollow,
  Follow
} from 'steemconnect-firebase-functions/broadcasting';
import { AccessTokenResponse } from 'steemconnect-firebase-functions/shared';

const followConfig: Follow = {
  userToFollow: 'jakipatryk'
};
const accessToken: AccessTokenResponse = {
  access_token: 'kj3n4jn2342.432p4k2p',
  expires_in: 640000,
  username: 'ned'
};

broadcastFollow(followConfig)(accessToken).then(response =>
  console.log(response)
);
//  {
//    result: { ... }
//  }
```

##### Implementation

The implementation is available on [Github](https://github.com/jakipatryk/steemconnect-firebase-functions/blob/master/src/broadcasting/broadcastDownvote.ts).

---

#### broadcastPost

```typescript
export declare const broadcastPost: (
  { mainTag, permlink, title, body, metadata }: Post
) => (
  { access_token, username }: AccessTokenResponse
) => Promise<BroadcastResult>;
```

##### Definition

Broadcasts post to the Steem blockchain.

##### Parameters

* `postConfig` (_[Post](#post)_): the config object for the post

**Step two** (for the inner functions):

* `accessToken` (_[AccessTokenResponse](shared.md#accesstokenresponse)_): an object with token details of the user for whom broadcast is requested for

##### Returns

**Step one** (from the outer function):

* (_[broadcastable](getting-started.md#broadcastable)_): an inner function

**Step two** (from the inner function):

* (_Promise<[BroadcastResult](#broadcastresult)>_): a `Promise` object which resolves with the result of the broadcast

##### Example Usage

```typescript
import {
  broadcastPost,
  Post
} from 'steemconnect-firebase-functions/broadcasting';
import { AccessTokenResponse } from 'steemconnect-firebase-functions/shared';

const postConfig: Post = {
  mainTag: 'life',
  permlink: 'permlink-for-the-post',
  title: 'Its my life!',
  body: 'Its my life sheck this out',
  metadata: {
    app: 'strimi/1.0.0',
    community: 'strimi',
    tags: ['life', 'steemit']
  }
};
const accessToken: AccessTokenResponse = {
  access_token: 'kj3n4jn2342.432p4k2p',
  expires_in: 640000,
  username: 'ned'
};

broadcastPost(postConfig)(accessToken).then(response => console.log(response));
//  {
//    result: { ... }
//  }
```

##### Implementation

The implementation is available on [Github](https://github.com/jakipatryk/steemconnect-firebase-functions/blob/master/src/broadcasting/broadcastDownvote.ts).

---

#### broadcastPostWithBeneficiaries

```typescript
export declare const broadcastPostWithBeneficiaries: (
  {
    mainTag,
    permlink,
    title,
    body,
    beneficiariesAccount,
    beneficiariesWeight,
    metadata
  }: PostWithBeneficiaries
) => (
  { access_token, username }: AccessTokenResponse
) => Promise<BroadcastResult>;
```

##### Definition

Broadcasts post along with beneficiaries config to the Steem blockchain.

##### Parameters

* `postWithBeneficiariesConfig` (_[PostWithBeneficiaires](#postwithbeneficiaires)_): the config object for the post with beneficiaries

**Step two** (for the inner functions):

* `accessToken` (_[AccessTokenResponse](shared.md#accesstokenresponse)_): an object with token details of the user for whom broadcast is requested for

##### Returns

**Step one** (from the outer function):

* (_[broadcastable](getting-started.md#broadcastable)_): an inner function

**Step two** (from the inner function):

* (_Promise<[BroadcastResult](#broadcastresult)>_): a `Promise` object which resolves with the result of the broadcast

##### Example Usage

```typescript
import {
  broadcastPostWithBeneficiaries,
  PostWithBeneficiaries
} from 'steemconnect-firebase-functions/broadcasting';
import { AccessTokenResponse } from 'steemconnect-firebase-functions/shared';

const postWithBeneficiariesConfig: PostWithBeneficiaries = {
  mainTag: 'life',
  permlink: 'permlink-for-the-post',
  title: 'Its my life!',
  body: 'Its my life sheck this out',
  beneficiariesAccount: 'strimi',
  beneficiariesWeight: 1000, // 10%
  metadata: {
    app: 'strimi/1.0.0',
    community: 'strimi',
    tags: ['life', 'steemit']
  }
};
const accessToken: AccessTokenResponse = {
  access_token: 'kj3n4jn2342.432p4k2p',
  expires_in: 640000,
  username: 'ned'
};

broadcastPostWithBeneficiaries(postWithBeneficiariesConfig)(accessToken).then(
  response => console.log(response)
);
//  {
//    result: { ... }
//  }
```

##### Implementation

The implementation is available on [Github](https://github.com/jakipatryk/steemconnect-firebase-functions/blob/master/src/broadcasting/broadcastDownvote.ts).

---

#### broadcastReblog

```typescript
export declare const broadcastReblog: (
  { postAuthor, postPermlink }: Reblog
) => (
  { access_token, username }: AccessTokenResponse
) => Promise<BroadcastResult>;
```

##### Definition

Broadcasts reblog to the Steem blockchain.

##### Parameters

* `reblogConfig` (_[Reblog](#reblog)_): the config object for the reblog

**Step two** (for the inner functions):

* `accessToken` (_[AccessTokenResponse](shared.md#accesstokenresponse)_): an object with token details of the user for whom broadcast is requested for

##### Returns

**Step one** (from the outer function):

* (_[broadcastable](getting-started.md#broadcastable)_): an inner function

**Step two** (from the inner function):

* (_Promise<[BroadcastResult](#broadcastresult)>_): a `Promise` object which resolves with the result of the broadcast

##### Example Usage

```typescript
import {
  broadcastReblog,
  Reblog
} from 'steemconnect-firebase-functions/broadcasting';
import { AccessTokenResponse } from 'steemconnect-firebase-functions/shared';

const reblogConfig: Vote = {
  postAuthor: 'ned',
  postPermlink: 'i-am-ned'
};
const accessToken: AccessTokenResponse = {
  access_token: 'kj3n4jn2342.432p4k2p',
  expires_in: 640000,
  username: 'jakipatryk'
};

broadcastReblog(reblogConfig)(accessToken).then(response =>
  console.log(response)
);
//  {
//    result: { ... }
//  }
```

##### Implementation

The implementation is available on [Github](https://github.com/jakipatryk/steemconnect-firebase-functions/blob/master/src/broadcasting/broadcastReblog.ts).

---

#### broadcastUnfollow

```typescript
export declare const broadcastUnfollow: (
  { userToUnfollow }: Unfollow
) => (
  { access_token, username }: AccessTokenResponse
) => Promise<BroadcastResult>;
```

##### Definition

Broadcasts unfollow to the Steem blockchain.

##### Parameters

* `unfollowConfig` (_[Unfollow](#unfollow)_): the config object for the unfollow

**Step two** (for the inner functions):

* `accessToken` (_[AccessTokenResponse](shared.md#accesstokenresponse)_): an object with token details of the user for whom broadcast is requested for

##### Returns

**Step one** (from the outer function):

* (_[broadcastable](getting-started.md#broadcastable)_): an inner function

**Step two** (from the inner function):

* (_Promise<[BroadcastResult](#broadcastresult)>_): a `Promise` object which resolves with the result of the broadcast

##### Example Usage

```typescript
import {
  broadcastUnfollow,
  Unfollow
} from 'steemconnect-firebase-functions/broadcasting';
import { AccessTokenResponse } from 'steemconnect-firebase-functions/shared';

const unfollowConfig: Unfollow = {
  userToUnfollow: 'ned'
};
const accessToken: AccessTokenResponse = {
  access_token: 'kj3n4jn2342.432p4k2p',
  expires_in: 640000,
  username: 'jakipatryk'
};

broadcastUnfollow(unfollowConfig)(accessToken).then(response =>
  console.log(response)
);
//  {
//    result: { ... }
//  }
```

##### Implementation

The implementation is available on [Github](https://github.com/jakipatryk/steemconnect-firebase-functions/blob/master/src/broadcasting/broadcastUnfollow.ts).

---

#### broadcastUpvote

```typescript
export declare const broadcastUpvote: (
  { author, permlink, weight }: Vote
) => (
  { access_token, username }: AccessTokenResponse
) => Promise<BroadcastResult>;
```

##### Definition

Broadcasts upvote to the Steem blockchain.

##### Parameters

* `upvoteConfig` (_[Vote](#vote)_): the config object for the upvote

**Step two** (for the inner functions):

* `accessToken` (_[AccessTokenResponse](shared.md#accesstokenresponse)_): an object with token details of the user for whom broadcast is requested for

##### Returns

**Step one** (from the outer function):

* (_[broadcastable](getting-started.md#broadcastable)_): an inner function

**Step two** (from the inner function):

* (_Promise<[BroadcastResult](#broadcastresult)>_): a `Promise` object which resolves with the result of the broadcast

##### Example Usage

```typescript
import {
  broadcastUpvote,
  Vote
} from 'steemconnect-firebase-functions/broadcasting';
import { AccessTokenResponse } from 'steemconnect-firebase-functions/shared';

const downvoteConfig: Vote = {
  author: 'ned',
  permlink: 'i-am-ned',
  weight: 10000 // 100% upvote
};
const accessToken: AccessTokenResponse = {
  access_token: 'kj3n4jn2342.432p4k2p',
  expires_in: 640000,
  username: 'ned'
};

broadcastUpvote(downvoteConfig)(accessToken).then(response =>
  console.log(response)
);
//  {
//    result: { ... }
//  }
```

##### Implementation

The implementation is available on [Github](https://github.com/jakipatryk/steemconnect-firebase-functions/blob/master/src/broadcasting/broadcastUpvote.ts).

---

### Interfaces

#### BroadcastResult

##### Definition

Defines an object which is a response to the successful broadcast.

##### Implementation

```typescript
export interface BroadcastResult {
  result: Result;
}

export interface Result {
  id: string;
  block_num: number;
  trx_num: number;
  expired: boolean;
  ref_block_num: number;
  ref_block_prefix: number;
  expiration: string;
  operations: Operations;
  extensions: Array<any>;
  signatures: Array<string>;
}
```

##### References

* [`Operations`](shared.md#operations)

---

#### Comment

##### Definition

In the broadcasting module, it defines a configuration object for a comment.

##### Implementation

```typescript
export interface Comment {
  parentAuthor?: string;
  parentPermlink: string;
  commentPermlink: string;
  commentBody: string;
  commentTitle?: string;
  commentMetadata?: object;
}
```

---

#### Deletion

##### Definition

In the broadcasting module, it defines a configuration object for a deletion of either comment or post.

##### Implementation

```typescript
export interface Deletion {
  permlink: string;
}
```

---

#### Follow

##### Definition

In the broadcasting module, it defines a configuration object for a follow.

##### Implementation

```typescript
export interface Follow {
  userToFollow: string;
}
```

---

#### Post

##### Definition

In the broadcasting module, it defines a configuration object for a post.

##### Implementation

```typescript
export interface Post {
  mainTag: string;
  permlink: string;
  title: string;
  body: string;
  metadata?: object;
}
```

---

#### PostWithBeneficiaries

##### Definition

In the broadcasting module, it defines a configuration object for a post with beneficiaries.

##### Implementation

```typescript
export interface PostWithBeneficiaries {
  mainTag: string;
  permlink: string;
  title: string;
  body: string;
  beneficiariesAccount: string;
  beneficiariesWeight: number;
  metadata?: object;
}
```

---

#### Reblog

##### Definition

In the broadcasting module, it defines a configuration object for a reblog.

##### Implementation

```typescript
export interface Reblog {
  postAuthor: string;
  postPermlink: string;
}
```

---

#### Unfollow

##### Definition

In the broadcasting module, it defines a configuration object for an unfollow.

##### Implementation

```typescript
export interface Unfollow {
  userToUnfollow: string;
}
```

---

#### Vote

##### Definition

In the broadcasting module, it defines a configuration object for either an upvote or a downvote.

##### Implementation

```typescript
export interface Vote {
  author: string;
  permlink: string;
  weight: number;
}
```
