import { broadcastUpvote } from '../../src/broadcasting/broadcastUpvote';

import { expect } from 'chai';
import * as nock from 'nock';

describe('broadcastUpvote', function() {
  const voteConfig = {
    voter: 'jakipatrikko',
    author: 'whoever',
    permlink: 'some-permlink',
    weight: 10000
  };
  const accessToken = {
    access_token: 'fdsfertre',
    expires_in: 4323432,
    username: 'ned'
  };

  it('should broadcast upvote and return result', async function() {
    nock('https://steemconnect.com')
      .post('/api/broadcast')
      .reply(200, (uri, req) => ({
        result: {
          id: '43523bhbbv543hv5345',
          block_num: 6546765,
          trx_num: 1,
          expired: false,
          ref_block_num: 43223,
          ref_block_prefix: 654645645,
          expiration: '2018-02-11T01:12:42',
          operations: req.operations,
          extensions: [],
          signatures: [
            '4234bjhbhjbhjbhjbh5jb4325uiph235io45ioh3b45ug435b3hb5j3m5k23nm5j3nih5b34h5bn32on'
          ]
        }
      }));

    const operations = [
      [
        'vote',
        {
          voter: 'jakipatrikko',
          author: 'whoever',
          permlink: 'some-permlink',
          weight: 10000
        }
      ]
    ];

    const broadcastResult = await broadcastUpvote(voteConfig)(accessToken);

    expect(broadcastResult).to.have.property('result');
    expect(broadcastResult.result.operations).to.deep.equal(operations);
  });
});
