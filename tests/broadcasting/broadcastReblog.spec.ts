import { broadcastReblog } from '../../src/broadcasting/broadcastReblog';

import { expect } from 'chai';
import * as nock from 'nock';

describe('broadcastReblog', function() {
  const accessToken = {
    access_token: 'fdsgfdew',
    expires_in: 34234,
    username: 'jakipatryk'
  };

  const reblog = {
    postAuthor: 'ned',
    postPermlink: 'i-am-ned'
  };

  it('should broadcast reblog and return result', async function() {
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

    const result = await broadcastReblog(reblog)(accessToken);

    const operations = [
      [
        'custom_json',
        {
          required_auths: [],
          required_posting_auths: ['jakipatryk'],
          id: 'follow',
          json: JSON.stringify([
            'reblog',
            {
              account: 'jakipatryk',
              author: 'ned',
              permlink: 'i-am-ned'
            }
          ])
        }
      ]
    ];
    expect(result.result.operations).to.deep.equal(operations);
  });
});
