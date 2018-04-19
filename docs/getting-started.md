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
npm i steemconnect-firebase-functions@next
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
