import { broadcastFollow } from '../src/broadcastFollow';
import * as broadcaster from '../src/broadcastOperations';

import { expect } from 'chai';
import * as sinon from 'sinon';

describe('broadcastComment', function() {
  const accessToken = 'fdsgfdew';
  const username = 'jakipatryk-dev';
  const userToFollow = 'jakipatryk';

  beforeEach(function() {
    this.broadcastOperations = sinon.stub(broadcaster, 'broadcastOperations');
  });

  it('should call broadcastOperations with correct data of the user and user to follow', async function() {
    const operations = [
      [
        'custom_json',
        {
          required_auths: [],
          required_posting_auths: [username],
          id: 'follow',
          json: [
            'follow',
            {
              follower: username,
              following: userToFollow,
              what: ['blog']
            }
          ]
        }
      ]
    ];

    await broadcastFollow(accessToken, username, userToFollow);

    expect(this.broadcastOperations.calledWith(accessToken, operations)).to.be
      .true;
  });

  afterEach(function() {
    this.broadcastOperations.restore();
  });
});
