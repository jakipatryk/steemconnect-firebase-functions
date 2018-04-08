import { broadcastComment } from '../../src/broadcasting/broadcastComment';

import { expect } from 'chai';
import * as nock from 'nock';

describe('broadcastComment', function() {
  const accessToken = {
    access_token: 'fdsgfdew',
    expires_in: 34234,
    username: 'ned'
  };

  const comment = {
    parentAuthor: 'whoever',
    parentPermlink: 'some-permlink',
    commentPermlink: 'comment-permlink',
    commentAuthor: 'jakiaptryk-dev',
    commentBody: 'some comment'
  };
  const commentMetadata = {
    anything: 'blabla'
  };

  it('should broadcast comment and return result if comment metadata provided', async function() {
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
    const commentWithMetadata = Object.assign({}, comment, { commentMetadata });

    const result = await broadcastComment(commentWithMetadata)(accessToken);

    const operations = [
      [
        'comment',
        {
          parent_author: 'whoever',
          parent_permlink: 'some-permlink',
          author: 'jakiaptryk-dev',
          permlink: 'comment-permlink',
          title: '',
          body: 'some comment',
          json_metadata: JSON.stringify(commentMetadata)
        }
      ]
    ];
    expect(result.result.operations).to.deep.equal(operations);
  });

  it('should broadcast comment and return result if comment metadata NOT provided', async function() {
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

    const result = await broadcastComment(comment)(accessToken);

    const operations = [
      [
        'comment',
        {
          parent_author: 'whoever',
          parent_permlink: 'some-permlink',
          author: 'jakiaptryk-dev',
          permlink: 'comment-permlink',
          title: '',
          body: 'some comment',
          json_metadata: ''
        }
      ]
    ];
    expect(result.result.operations).to.deep.equal(operations);
  });
});
