import { broadcastDownvote } from '../src/broadcastDownvote';
import * as broadcaster from '../src/broadcastOperations';

import { expect } from 'chai';
import * as sinon from 'sinon';

describe('broadcastDownvote', function() {
  beforeEach(function() {
    this.broadcastOperations = sinon.stub(broadcaster, 'broadcastOperations');
  });

  it('should call broadcastOperations with correct data', async function() {
    const accessToken = 'fdsgfdew';
    const voter = 'jakipatrikko';
    const author = 'whoever';
    const permlink = 'some-permlink';
    const weight = 500;
    const operations = [
      [
        'vote',
        {
          voter: 'jakipatrikko',
          author: 'whoever',
          permlink: 'some-permlink',
          weight: -500
        }
      ]
    ];

    await broadcastDownvote(accessToken, voter, author, permlink, weight);

    expect(this.broadcastOperations.calledWith(accessToken, operations)).to.be
      .true;
  });

  afterEach(function() {
    this.broadcastOperations.restore();
  });
});
