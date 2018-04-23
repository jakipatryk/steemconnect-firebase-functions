import { refreshAccessToken } from '../../src/oauth2/refreshAccessToken';

import { expect } from 'chai';
import * as nock from 'nock';

describe('refreshAccessToken', () => {
  const clientId = 'test.app';
  const clientSecret = 'fdsfew32fsd329fg';
  const accessToken = {
    access_token: 'fdsf23f23',
    username: 'jakipatryk',
    expires_in: 64000,
    refresh_token: '32rk3m23'
  };

  it('should exchange refresh token for an access token (along with username etc.) with SteemConnect and return it if refresh token is valid', async () => {
    nock('https://steemconnect.com')
      .post('/api/oauth2/token')
      .reply(200, {
        access_token: 'ey.eyJy4MDI5NjU3fQ.lqX2bTkW7R',
        expires_in: 604800,
        username: 'dev',
        refresh_token: 'gfd4t.432rrdf43.gfdger'
      });

    const newAccessToken = await refreshAccessToken({
      clientId,
      clientSecret,
      ...accessToken
    });

    expect(newAccessToken).to.exist.and.have.property('access_token');
  });

  it('should throw an error if refresh token is invalid', () => {
    nock('https://steemconnect.com')
      .post('/api/oauth2/token')
      .replyWithError({
        error: 'invalid_grant',
        error_description: 'The token has invalid role'
      });

    return refreshAccessToken({ clientId, clientSecret, ...accessToken }).catch(
      err => expect(err).to.exist.and.have.property('error_description')
    );
  });
});
