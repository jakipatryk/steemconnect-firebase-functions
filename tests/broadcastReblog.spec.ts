import { broadcastReblog } from '../src/broadcastReblog';
import * as broadcaster from '../src/broadcastOperations';

import { expect } from 'chai';
import * as sinon from 'sinon';

describe('broadcastReblog', function() {
  const accessToken = 'fdsgfdew';
  const username = 'jakipatryk-dev';
  const postAuthor = 'jakipatryk';
  const postPermlink = 'i-am-jakipatryk';

  beforeEach(function() {
    this.broadcastOperations = sinon.stub(broadcaster, 'broadcastOperations');
  });

  it('should call broadcastOperations with correct data of the post to reblog', async function() {
    const operations = [
      [
        'custom_json',
        {
          required_auths: [],
          required_posting_auths: [username],
          id: 'follow',
          json: JSON.stringify([
            'reblog',
            {
              account: username,
              author: postAuthor,
              permlink: postPermlink
            }
          ])
        }
      ]
    ];

    await broadcastReblog(accessToken, username, postAuthor, postPermlink);

    expect(this.broadcastOperations.calledWith(accessToken, operations)).to.be
      .true;
  });

  afterEach(function() {
    this.broadcastOperations.restore();
  });
});
