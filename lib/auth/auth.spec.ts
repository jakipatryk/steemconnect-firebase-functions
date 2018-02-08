import 'mocha';
import { expect } from 'chai';
import * as nock from 'nock';
import * as sinon from 'sinon';

import {
  getAuthorizationUrl,
  getAccessToken,
  mintFirebaseToken,
  saveAccessToken,
  getAccessTokenFromFirestore
} from './auth';

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

  it('should throw an error if code is invalid', async () => {
    nock('https://steemconnect.com')
      .post('/api/oauth2/token')
      .replyWithError({
        error: 'invalid_grant',
        error_description: 'The token has invalid role'
      });

    return getAccessToken(clientId, clientSecret, redirectUri, code).catch(
      err => {
        expect(err).to.exist.and.have.property('error');
      }
    );
  });
});

describe('mintFirebaseToken', () => {
  it('should mint and return a Firebase token', async () => {
    const Admin = function() {
      this.auth = () => this;
      this.createCustomToken = async uid => 'fdsfer3432.fsdgre3.trefds';
    };
    const admin = new Admin();
    const uid = 'steemconnect:adammalysz';

    const result = await mintFirebaseToken(admin, uid);

    expect(result).to.equal('fdsfer3432.fsdgre3.trefds');
  });
});

describe('saveAccessToken', () => {
  it('should save access token in the Firestore', async () => {
    const Admin = function() {
      this.firestore = () => this;
      this.doc = path => this;
      this.set = sinon.spy();
    };
    const admin = new Admin();
    const uid = 'steemconnect:spaghetti';
    const accessToken = {
      access_token: 'ey.eyJy4MDI5NjU3fQ.lqX2bTkW7R',
      expires_in: 604800,
      username: 'spaghetti'
    };

    await saveAccessToken(admin, uid, accessToken);
    expect(admin.set.called).to.be.true;
    expect(
      admin.set.calledWith({
        access_token: 'ey.eyJy4MDI5NjU3fQ.lqX2bTkW7R',
        expires_in: 604800,
        username: 'spaghetti'
      })
    ).to.be.true;
  });
});

describe('getAccessTokenFromFirestore', () => {
  it('should return access token if exists', async () => {
    const Admin = function() {
      this.firestore = () => this;
      this.doc = path => this;
      this.get = async () => {
        return {
          exists: true,
          data: () => {
            return {
              access_token: 'fdsdfrerefv342.5435fd',
              expires_in: 604800,
              username: 'gg'
            };
          }
        };
      };
    };
    const admin = new Admin();
    const uid = 'steemconnect:gg';

    const accessToken = await getAccessTokenFromFirestore(admin, uid);

    expect(accessToken).to.exist.and.include({
      access_token: 'fdsdfrerefv342.5435fd'
    });
  });

  it('should throw an error if token does not exist', () => {
    const Admin = function() {
      this.firestore = () => this;
      this.doc = path => this;
      this.get = async () => {
        return {
          exists: false
        };
      };
    };
    const admin = new Admin();
    const uid = 'steemconnect:gg';

    return getAccessTokenFromFirestore(admin, uid).catch(err => {
      expect(err).to.exist;
    });
  });
});
