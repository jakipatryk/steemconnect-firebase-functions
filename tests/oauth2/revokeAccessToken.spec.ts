import { revokeAccessToken } from '../../src/oauth2/revokeAccessToken';
import {
  ACCESS_TOKEN_REVOKED,
  ACCESS_TOKEN_INVALID
} from './../../src/shared/errors/constants';

import { expect } from 'chai';
import * as nock from 'nock';

describe('revokeAccessToken', () => {
  const accessToken = 'e432fderefe.3454233rfdsgfhtjyui';

  it('should revoke an access token if access token is correct', async () => {
    nock('https://steemconnect.com')
      .post('/api/oauth2/token/revoke')
      .reply(200, {
        success: true
      });

    const result = await revokeAccessToken(accessToken);

    expect(result).to.exist.and.deep.equal({
      success: true
    });
  });

  it('should throw if access token is incorrect', () => {
    nock('https://steemconnect.com')
      .post('/api/oauth2/token/revoke')
      .replyWithError(ACCESS_TOKEN_INVALID);

    return revokeAccessToken(accessToken).catch(error =>
      expect(error).to.exist.and.deep.equal({
        error: 'invalid_grant',
        error_description: 'The token has invalid role'
      })
    );
  });

  it('should throw if access token has already been revoked', () => {
    nock('https://steemconnect.com')
      .post('/api/oauth2/token/revoke')
      .replyWithError(ACCESS_TOKEN_REVOKED);

    return revokeAccessToken(accessToken).catch(error =>
      expect(error).to.exist.and.deep.equal({
        error: 'invalid_grant',
        error_description: 'The access_token has been revoked'
      })
    );
  });
});
