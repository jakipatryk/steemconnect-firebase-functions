import { getAccessToken } from '../src/getAccessToken';

import { expect } from 'chai';
import * as nock from 'nock';

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
