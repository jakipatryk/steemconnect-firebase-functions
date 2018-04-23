## What is this module for?

This module is a helper in the process of implementing the **OAuth2 Authorization Code Grant** flow with **SteemConnect**.

Functions available here make it easy to generate URL to SteemConnect with correct scope and other details, get tokens from SteemConnect, refresh and revoke an access token, and set and get user metadata.

## How to use it?

To use any of the functions from this module, you have to import it. Your can import directly from this module:

```typescript
import { getAccessToken } from 'steemconnect-firebase-functions/oauth2';
```

or from library's main module:

```typescript
import { getAccessToken } from 'steemconnect-firebase-functions';
```

---

## API reference

### Functions

#### getAuthorizationUrl

```typescript
export declare function getAuthorizationUrl({
  clientId,
  redirectUri,
  scope,
  state
}: ClientCredentials & {
  redirectUri: string;
  scope: Array<Scope>;
  state?: string;
}): string;
```

##### Definition

Generates authorization URL to SteemConnect service.

##### Parameters

* `config` ([_ClientCredentials_](#clientcredentials) +  
   `redirectUri` (_string_): the URI you want your user to be redirected to after logging in to SteemConnect  
   `scope` (_Array<[Scope](#scope)>_): the array of scopes you want to get access for your user to  
   `state?` (_string_): optional state variable):  
   configuration object for the app

##### Returns

* (_string_): the authorization URL

##### Example Usage

```typescript
import {
  getAuthorizationUrl,
  Scope
} from 'steemconnect-firebase-functions/oauth2';

const clientId: string = 'strimi.app';
const redirectUri: string = 'https://strimi.pl/redirect';
const scope: Array<Scope> = ['vote'];
const state: string = 'state342343243242';

const authorizationUrl = getAuthorizationUrl({
  clientId,
  redirectUri,
  scope,
  state
});
// 'https://steemconnect.com/oauth2/authorize?client_id=strimi.app&response_type=code&redirect_uri=https%3A%2F%2Fstrimi.pl%2Fredirect&scope=vote&state=state342343243242'
```

##### Implementation

The implementation is available on [Github](https://github.com/jakipatryk/steemconnect-firebase-functions/blob/master/src/oauth2/getAuthorizationUrl.ts).

---

#### getAccessToken

```typescript
export declare function getAccessToken({
  clientId,
  clientSecret,
  redirectUri,
  code
}: ClientCredentials & {
  redirectUri: string;
  code: string;
}): Promise<AccessTokenResponse>;
```

##### Definition

Gets access token for a user (`access_token`, `expires_in`, `username`, and optionally `refresh_token`) from SteemConnect.

##### Parameters

* `config` (_Required<[ClientCredentials](#clientcredentials)>_ +  
  `redirectUri` (_string_): the redirect URI used earlier in the `getAuthorizationUrl`  
  `code` (_string_): the code retrived from the SteemConnect):  
   the configruation object

##### Returns

* (_Promise<[AccessTokenResponse](shared.md#accesstokenresponse)>_): the `Promise` object which resolves with tokens details

##### Example Usage

```typescript
import { getAccessToken, ClientCredentials } from 'steemconnect-firebase-functions/oauth2';

const clientCredentials: ClientCredentials = {
    clientId: 'strimi.app',
    clientSecret: 'gfd65464fdsfsoi3o'
};
const redirectUri = 'https://strimi.pl/redirect';
const code = '435435435afsdfdsfsd.3rkdmsfklmdlf';

getAccessToken({
  ...clientCredentials
  redirectUri,
  code
}).then(tokens => console.log(tokens));

//  {
//      access_token: '...',
//      expires_in: 640000,
//      username '...'
//      refresh_token: '...' // if scope included `offline`
//  }
```

##### Implementation

The implementation is available on [Github](https://github.com/jakipatryk/steemconnect-firebase-functions/blob/master/src/oauth2/getAccessToken.ts).

---

#### refreshAccessToken

```typescript
export declare function refreshAccessToken({
  clientId,
  clientSecret,
  refresh_token
}: Required<ClientCredentials> & Required<AccessTokenResponse>): Promise<
  AccessTokenResponse
>;
```

##### Definition

Uses `refresh_token` to get new `AccessTokenResponse` object.

##### Parameters

* `config` (_Required<[ClientCredentials](#clientcredentials)>_ & _Required<[AccessTokenResponse](shared.md#accesstokenresponse)>_): the configuration object for refreshing access token

##### Returns

* (_Promise<[AccessTokenResponse](shared.md#accesstokenresponse)>_): the `Promise` object which resolves with tokens details

##### Example Usage

```typescript
import {
  refreshAccessToken,
  ClientCredentials
} from 'steemconnect-firebase-functions/oauth2';
import { AccessTokenResponse } from 'steemconnect-firebase-functions/shared';

const clientCredentials: ClientCredentials = {
  clientId: 'strimi.app',
  clientSecret: 'gfd65464fdsfsoi3o'
};
const accessToken: AccessTokenResponse = {
  access_token: '432432423r43roinmeofrekgkfgfd',
  expires_in: 640000,
  username: 'jakipatryk',
  refresh_token: 'sdfiodoifroei434.3fds'
};

refreshAccessToken({ ...clientCredentials, ...accessToken }).then(newTokens =>
  console.log('newTokens')
);
//  {
//      access_token: '...',
//      expires_in: 640000,
//      username 'jakipatryk'
//      refresh_token: '...'
//  }
```

##### Implementation

The implementation is available on [Github](https://github.com/jakipatryk/steemconnect-firebase-functions/blob/master/src/oauth2/refreshAccessToken.ts).

---

#### getUserData

```typescript
export declare function getUserData({
  access_token
}: AccessTokenResponse): Promise<UserData>;
```

##### Definition

Gets user data from a SteemConnect.

##### Parameters

* accessToken ([_AccessTokenResponse_](shared.md#accesstokenresponse)): the access token object

##### Returns

* (_Promise<[UserData](#userdata)>_): the `Promise` object which resolves with user data

##### Example Usage

```typescript
import { getUserData } from 'steemconnect-firebase-functions/oauth2';
import { AccessTokenResponse } from 'steemconnect-firebase-functions/shared';

const accessToken: AccessTokenResponse = {
  access_token: 'fdskfe.4324234',
  expires_in: 64000,
  username: 'jakipatryk'
};

getUserData(accessToken).then(userData => console.log(userData));
```

##### Implementation

The implementation is available on [Github](https://github.com/jakipatryk/steemconnect-firebase-functions/blob/master/src/oauth2/getUserData.ts).

---

#### setUserData

```typescript
export declare function setUserMetadata({
  access_token,
  metadata
}: AccessTokenResponse & {
  metadata: object;
}): Promise<UserData>;
```

##### Definition

Sets user metadata in a SteemConnect.

##### Parameters

* `config` ([_AccessTokenResponse_](shared.md#accesstokenresponse) & _metadata_ (`object`)): the configuration object with access token and new metadata

##### Returns

* (_Promise<[UserData](#userdata)>_): the `Promise` object which resolves with updated user data

##### Example Usage

```typescript
import { setUserMetadata } from 'steemconnect-firebase-functions/oauth2';
import { AccessTokenResponse } from 'steemconnect-firebase-functions/shared';

const accessToken: AccessTokenResponse = {
  access_token: 'smt432fdsokdswpw.432jieod',
  expires_in: 64000,
  username: 'jakipatryk'
};
const metadata = {
  isBanned: true
};

setUserMetadata({ ...accessToken, metadata }).then(updatedUserData =>
  console.log(updatedUserData)
);
```

##### Implementation

The implementation is available on [Github](https://github.com/jakipatryk/steemconnect-firebase-functions/blob/master/src/oauth2/setUserMetadata.ts).

---

#### revokeAccessToken

```typescript
export declare function revokeAccessToken({
  access_token
}: AccessTokenResponse): Promise<any>;
```

##### Definition

Revokes access token.

##### Parameters

* `accessToken` ([_AccessTokenResponse_](shared.md#accesstokenresponse)): the `AccessTokenResponse` object containing `access_token` to revoke

##### Returns

* (_Promise_): a `Promise` object

##### Example Usage

```typescript
import { revokeAccessToken } from 'steemconnect-firebase-functions/oauth2';
import { AccessTokenResponse } from 'steemconnect-firebase-functions/shared';

const accessToken: AccessTokenResponse = {
  access_token: 'smt432fdsokdswpw.432jieod',
  expires_in: 64000,
  username: 'jakipatryk'
};

revokeAccessToken(accessToken).then(() =>
  console.log('Successfully revoked access token!')
);
```

##### Implementation

The implementation is available on [Github](https://github.com/jakipatryk/steemconnect-firebase-functions/blob/master/src/oauth2/revokeAccessToken.ts).

---

### Interfaces and types

#### ClientCredentials

##### Definition

Defines an object with client credentials.

##### Implementation

```typescript
export interface ClientCredentials {
  clientId: string;
  clientSecret?: string;
}
```

---

#### Scope

##### Definition

A type containing all available scopes on SteemConnect.

##### Implementation

```typescript
export type Scope =
  | 'login'
  | 'offline'
  | 'vote'
  | 'comment'
  | 'comment_options'
  | 'custom_json'
  | 'delete_comment'
  | 'claim_reward_balance';
```
