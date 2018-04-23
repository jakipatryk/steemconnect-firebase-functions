## Not only on the Firebase?

steemconnect-firebase-functions was designed specifically to work on the **Firebase Cloud Functions** environment.

However, **4** of **5** modules are platform agnostic, so you can use them in any NodeJS application. Only the _Firebase_ module is platform specific.

## TypeScript or JavaScript?

The library was written in **TypeScript** and compiled down to **ES2015** for production.

In some cases, it doesn't matter which language you choose, but in case you use _steemconnect-firebase-functions_ on Firebase Cloud Functions environment, I highly recommend using **TypeScript**.

Firebase Cloud Functions run on **Node v6.11.5**, so without TypeScript compiler (or Babel) you won't be able to use **ES7** and **ES8** features such as `async/await` in your functions. Using them can improve readability of your code.

Also, if you choose TypeScript you will be able to use a bunch of interfaces and types I created for this library. Believe me, it increases _developer experience_ a lot!

## Installation

Before installing library itself, make sure you have **NodeJS** and **NPM** installed:

```
node --version
# v8.5.0
npm --version
# 5.7.1
```

Once ensured, you can install the library with a single command:

```
npm i steemconnect-firebase-functions@beta
```

## Example usage

```typescript
import { getAuthorizationUrl, Scope } from 'steemconnect-firebase-functions';

const clientId: string = 'strimi.app';
const redirectUri: string = 'https://strimi.it/redirect';
const scope: Array<Scope> = ['vote', 'comment'];
const state: string = 'state342343243242';

const authorizationUrl = getAuthorizationUrl({
  clientId,
  redirectUri,
  scope,
  state
});
// 'https://steemconnect.com/oauth2/authorize?client_id=strimi.app&response_type=code&redirect_uri=https%3A%2F%2Fstrimi.it%2Fredirect&scope=vote&state=state342343243242'
```

## Glossary

Here are a few terms widely used in this documentation that might be confusing at first:

#### _broadcast_

> Event where signed transaction is broadcasted to the network, so that witnesses could validate and include in block.

**Source**: [Steem Developer Portal](https://developers.steem.io/glossary/#transactions)

---

#### _broadcastable_

A **function** which takes `AccessTokenResponse` object as a parameter and broadcasts any type of operations to the Steem blockchain.

Always returns `Promise` which resolves with the `BroadcastResult` object or rejects with the `OAuth2Error` object.

Typically used as an **inner function** for other functions.

---

#### _operation_

An object (to be more precise, an array) which holds information about **data** we want to include in a transaction.
