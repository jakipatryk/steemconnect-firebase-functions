import { setUserMetadata } from '../../src/oauth2/setUserMetadata';

import { expect } from 'chai';
import * as nock from 'nock';

describe('setUserMetadata', () => {
  const accessToken = {
    access_token: 'fdsf23f23',
    username: 'jakipatryk',
    expires_in: 64000
  };
  const metadata = {
    someValue: 'value'
  };

  it('should set user metadata and return updated data of this user', async () => {
    nock('https://steemconnect.com')
      .put('/api/me')
      .reply(200, {
        user: 'jakipatryk-dev',
        _id: 'jakipatryk-dev',
        name: 'jakipatryk-dev',
        account: {},
        scope: ['vote', 'comment'],
        user_metadata: metadata
      });
    const userData = await setUserMetadata({ ...accessToken, metadata });

    expect(userData).to.exist.and.deep.include({
      user_metadata: { someValue: 'value' }
    });
  });

  it('should throw an error if something went wrong', () => {
    nock('https://steemconnect.com')
      .put('/api/me')
      .replyWithError({
        error: 'invalid_grant',
        error_description: 'The token has invalid role'
      });

    return setUserMetadata({ ...accessToken, metadata }).catch(err => {
      expect(err).to.exist;
    });
  });
});
