import { broadcastUpvote } from '../../src/broadcasting/broadcastUpvote';
import * as broadcaster from '../../src/broadcasting/broadcastOperations';

import { expect } from 'chai';
import * as sinon from 'sinon';

describe('broadcastUpvote', function() {
  beforeEach(function() {
    this.broadcastOperations = sinon.stub(broadcaster, 'broadcastOperations');
  });

  it('should call broadcastOperations with correct data', async function() {
    const accessToken = 'fdsgfdew';
    const voter = 'jakipatrikko';
    const author = 'whoever';
    const permlink = 'some-permlink';
    const weight = 10000;
    const operations = [
      [
        'vote',
        {
          voter,
          author,
          permlink,
          weight
        }
      ]
    ];

    await broadcastUpvote(accessToken, voter, author, permlink, weight);

    expect(this.broadcastOperations.calledWith(accessToken, operations)).to.be
      .true;
  });

  afterEach(function() {
    this.broadcastOperations.restore();
  });
});
