## Glossary

### admin

All functions from this module require `admin` dependency. What is this `admin` anyway?

The word `admin` actually refers to `firebase-admin` NPM package, aka. **Firebase Admin Node SDK**. The `admin` object has to be already configurated.

* **Setup guide**: [Firebase docs](https://firebase.google.com/docs/admin/setup)

## What is this module for?

This module is for helping developers who want to use **Firebase** with **SteemConnect**.

It contains functions for **minting** custom auth tokens, **saving** access token in the Firestore, **getting** access token from Firestore, and **creating** or **updating** user auth account.

## API reference

### Functions

#### createFirebaseAccount

```typescript
export declare function createFirebaseAccount(
  admin: any,
  {
    uid,
    username,
    photoURL,
    email,
    emailVerified,
    phoneNumber,
    disabled
  }: FirebaseAccount
): Promise<any>;
```

##### Definition

Creates or updates Firebase auth user account.

##### Parameters

* [`admin`](#admin)
* `firebaseAccountConfig` ([_FirebaseAccount_](#firebaseaccount)): the configuration object for an account

##### Returns

* (_Promise_): the `Promise` object

##### Example Usage

```typescript
import {
  createFirebaseAccount,
  FirebaseAccount
} from 'steemconnect-firebase-functions';
import * as admin from 'firebase-admin';

const serviceAccount = require('../serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const firebaseAccountConfig: FirebaseAccount = {
  uid: 'steemconnect:jakipatryk',
  username: 'jakipatryk',
  photoURL: 'https://some-uri.com/avatar.jpg'
};

createFirebaseAccount(admin, firebaseAccountConfig).then(() => {
  console.log(5 * 20 + 11);
});
```

##### Implementation

The implementation is available on [Github](https://github.com/jakipatryk/steemconnect-firebase-functions/blob/master/src/firebase/createFirebaseAccount.ts).

---

#### mintFirebaseToken

```typescript
export declare function mintFirebaseToken(
  admin: any,
  uid: string
): Promise<string>;
```

##### Definition

Creates and returns Firebase custom auth token.

##### Parameters

* [`admin`](#admin)
* `uid` (_string_): the uid of the user you want to mint custom Firebase auth token for

##### Returns

(_Promise<string>_): the `Promise` object which resolves with Firebase custom auth token

##### Example Usage

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

##### Implementation

The implementation is available on [Github](https://github.com/jakipatryk/steemconnect-firebase-functions/blob/master/src/firebase/mintFirebaseToken.ts).

---

#### saveAccessToken

```typescript
export declare function saveAccessToken(
  admin: any,
  uid: string,
  accessToken: AccessTokenResponse
): Promise<any>;
```

##### Definition

Saves access token and its details in the Firestore.

##### Parameters

* [`admin`](#admin)
* `uid` (_string_): the uid of the user
* `accessToken` ([_AccessTokenResponse_](shared.md#accesstokenresponse)): the access token + its details object

##### Returns

* (_Promise_): the `Promise` object

##### Example Usage

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

##### Implementation

The implementation is available on [Github](https://github.com/jakipatryk/steemconnect-firebase-functions/blob/master/src/firebase/saveAccessToken.ts).

---

#### getAccessTokenFromFirestore

```typescript
export declare function getAccessTokenFromFirestore(
  admin: any,
  uid: string
): Promise<AccessTokenResponse>;
```

##### Definition

Gets and returns the access token + details object from the Firestore.

##### Parameters

* [`admin`](#admin)
* `uid` (_string_): the uid of the user you want to get access token for

##### Returns

* (_Promise<[AccessTokenResponse](shared.md#accesstokenresponse)>_): the `Promise` object which resolves with the `AccessTokenResponse` object

##### Example Usage

```typescript
import { getAccessTokenFromFirestore } from 'steemconnect-firebase-functions';
import * as admin from 'firebase-admin';

const serviceAccount = require('../serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const uid = 'steemconnect:jakipatryk';

getAccessTokenFromFirestore(admin, uid).then(tokens => console.log(tokens));
```

##### Implementation

The implementation is available on [Github](https://github.com/jakipatryk/steemconnect-firebase-functions/blob/master/src/firebase/getAccessTokenFromFirestore.ts).

---

### Interfaces

#### FirebaseAccount

##### Definition

Defines Firebase account object.

##### Implementation

```typescript
export interface FirebaseAccount {
  uid: string;
  username: string;
  photoURL?: string;
  email?: string;
  emailVerified?: boolean;
  phoneNumber?: string;
  disabled?: boolean;
}
```
