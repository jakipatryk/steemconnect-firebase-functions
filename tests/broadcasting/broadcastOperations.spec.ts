import { broadcastOperations } from '../../src/broadcasting/broadcastOperations';
import { Operations } from '../../src/shared/interfaces/Operation';

import { expect } from 'chai';
import * as nock from 'nock';

describe('broadcastOperations', () => {
  const accessToken = {
    access_token: '435tfgfdgdfg.434342',
    expires_in: 3243234,
    username: 'jakipatryk-dev'
  };
  const operations: Operations = [
    [
      'vote',
      {
        voter: 'adammalysz',
        author: 'kamilstoch',
        permlink: 'i-am-kamil-stoch',
        weight: 10000
      }
    ]
  ];

  it('should broadcast given operations and return result data if succeeded', async () => {
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

    const result = await broadcastOperations(operations)(accessToken);

    expect(result).to.exist.and.have.property('result');
  });

  it('should throw an error if anything went wrong', () => {
    nock('https://steemconnect.com')
      .post('/api/broadcast')
      .replyWithError({
        error: 'invalid_grant',
        error_description: 'The token has invalid role'
      });
    return broadcastOperations(operations)(accessToken).catch(err => {
      expect(err).to.exist.and.have.property('error');
    });
  });
});
