import { broadcastUnfollow } from '../src/broadcastUnfollow';
import * as broadcaster from '../src/broadcastOperations';

import { expect } from 'chai';
import * as sinon from 'sinon';

describe('broadcastUnfollow', function() {
  const accessToken = 'fdsgfdew';
  const username = 'jakipatryk-dev';
  const userToUnfollow = 'jakipatryk';

  beforeEach(function() {
    this.broadcastOperations = sinon.stub(broadcaster, 'broadcastOperations');
  });

  it('should call broadcastOperations with correct data of the user and user to unfollow', async function() {
    const operations = [
      [
        'custom_json',
        {
          required_auths: [],
          required_posting_auths: [username],
          id: 'follow',
          json: JSON.stringify([
            'follow',
            {
              follower: username,
              following: userToUnfollow,
              what: []
            }
          ])
        }
      ]
    ];

    await broadcastUnfollow(accessToken, username, userToUnfollow);

    expect(this.broadcastOperations.calledWith(accessToken, operations)).to.be
      .true;
  });

  afterEach(function() {
    this.broadcastOperations.restore();
  });
});
