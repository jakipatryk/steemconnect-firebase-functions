import { getUserData } from '../../src/oauth2/getUserData';

import { expect } from 'chai';
import * as nock from 'nock';

describe('getUserData', () => {
  const accessToken = {
    access_token: 'fdsf23f23',
    username: 'jakipatryk',
    expires_in: 64000
  };

  it('should return data of the user who requested that', async () => {
    nock('https://steemconnect.com')
      .get('/api/me')
      .reply(200, {
        user: 'jakipatryk-dev',
        _id: 'jakipatryk-dev',
        name: 'jakipatryk-dev',
        account: {},
        scope: ['vote', 'comment'],
        user_metadata: {}
      });

    const userData = await getUserData(accessToken);

    expect(userData).to.exist.and.include({ user: 'jakipatryk-dev' });
  });

  it('should throw an error if something went wrong', () => {
    nock('https://steemconnect.com')
      .get('/api/me')
      .replyWithError({
        error: 'invalid_grant',
        error_description: 'The token has invalid role'
      });

    return getUserData(accessToken).catch(err => {
      expect(err).to.exist;
    });
  });
});
