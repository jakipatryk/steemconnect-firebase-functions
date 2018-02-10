import { getUserData } from '../src/getUserData';

import { expect } from 'chai';
import * as nock from 'nock';

describe('getUserData', () => {
  it('should return data of the user who requested that', async () => {
    nock('https://steemconnect.com')
      .get('/api/me')
      .reply(200, {
        user: 'jakipatryk-dev',
        scope: ['vote', 'comment']
      });

    const accessToken = 'gfdgergfdvcx.fdsfdsds';
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

    const accessToken = 'gfdgfsdfsfsdfsd';
    return getUserData(accessToken).catch(err => {
      expect(err).to.exist;
    });
  });
});
