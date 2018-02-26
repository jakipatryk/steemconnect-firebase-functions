import { refreshAccessToken } from '../src/refreshAccessToken';

import { expect } from 'chai';
import * as nock from 'nock';

describe('refreshAccessToken', () => {
  const clientId = 'test.app';
  const clientSecret = 'fdsfew32fsd329fg';

  it('should exchange refresh token for an access token (along with username etc.) with SteemConnect and return it if refresh token is valid', async () => {
    nock('https://steemconnect.com')
      .post('/api/oauth2/token')
      .reply(200, {
        access_token: 'ey.eyJy4MDI5NjU3fQ.lqX2bTkW7R',
        expires_in: 604800,
        username: 'dev',
        refresh_token: 'gfd4t.432rrdf43.gfdger'
      });
    const refreshToken = 'valid.refresh.token';

    const newAccessToken = await refreshAccessToken(
      clientId,
      clientSecret,
      refreshToken
    );

    expect(newAccessToken).to.exist.and.have.property('access_token');
  });

  it('should throw an error if refresh token is invalid', () => {
    nock('https://steemconnect.com')
      .post('/api/oauth2/token')
      .replyWithError({
        error: 'invalid_grant',
        error_description: 'The token has invalid role'
      });
    const refreshToken = 'invalid.refresh.token';

    return refreshAccessToken(clientId, clientSecret, refreshToken).catch(err =>
      expect(err).to.exist.and.have.property('error_description')
    );
  });
});
