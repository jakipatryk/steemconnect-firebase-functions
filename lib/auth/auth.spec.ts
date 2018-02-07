import 'mocha';
import { expect } from 'chai';
import * as nock from 'nock';

import { getAuthorizationUrl, getAccessToken } from './auth';

import * as rp from 'request-promise';

describe('getAuthorizationUrl', () => {
  it('should return a correct url when scope has one element', () => {
    const clientId = 'test.app';
    const redirectUri = 'https://wykop.pl/redirect';
    const scope = ['vote'];

    const authorizationUrl = getAuthorizationUrl(clientId, redirectUri, scope);

    expect(authorizationUrl).to.equal(
      'https://steemconnect.com/oauth2/authorize?client_id=test.app&response_type=code&redirect_uri=https%3A%2F%2Fwykop.pl%2Fredirect&scope=vote'
    );
  });

  it('should return a correct url when scope has more than one element', () => {
    const clientId = 'test.app';
    const redirectUri = 'https://adam.malysz/redirect';
    const scope = ['vote', 'comment'];

    const authorizationUrl = getAuthorizationUrl(clientId, redirectUri, scope);

    expect(authorizationUrl).to.equal(
      'https://steemconnect.com/oauth2/authorize?client_id=test.app&response_type=code&redirect_uri=https%3A%2F%2Fadam.malysz%2Fredirect&scope=vote%2Ccomment'
    );
  });
});

describe('getAccessToken', () => {
  const clientId = 'steemconnecttest.app';
  const clientSecret = 'gfd65464';
  const redirectUri = 'https://adam.malysz/redirect';
  const code = '435435435afsd';

  it('should return an access token if code is valid', async () => {
    nock('https://steemconnect.com')
      .post('/api/oauth2/token')
      .reply(200, {
        username: 'dev',
        access_token: {
          access_token: 'ey.eyJy4MDI5NjU3fQ.lqX2bTkW7R',
          expires_in: 604800,
          username: 'dev'
        }
      });

    const result = await getAccessToken(
      clientId,
      clientSecret,
      redirectUri,
      code
    );

    expect(result.username).to.equal('dev');
    expect(result.access_token.access_token).to.equal(
      'ey.eyJy4MDI5NjU3fQ.lqX2bTkW7R'
    );
  });

  it('should return an error message if code is invalid', async () => {
    nock('https://steemconnect.com')
      .post('/api/oauth2/token')
      .reply(401, {
        error: 'invalid_grant',
        error_description: 'The token has invalid role'
      });

    const result = await getAccessToken(
      clientId,
      clientSecret,
      redirectUri,
      code
    );

    expect(result.error).to.equal('invalid_grant');
  });
});

describe('mintFirebaseToken', () => {
  it('should mint a Firebase token based on given code');
});

describe('saveUserDataInFirestore', () => {
  it('should save user data in the Firestore Document');
});
