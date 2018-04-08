import { broadcastPost } from '../../src/broadcasting/broadcastPost';

import { expect } from 'chai';
import * as nock from 'nock';

describe('broadcastPost', function() {
  const accessToken = {
    access_token: 'fdsgfdew',
    expires_in: 34234,
    username: 'ned'
  };

  const post = {
    mainTag: 'test-tag',
    author: 'whoever',
    permlink: 'some-permlink',
    title: 'title',
    body: 'some post'
  };
  const metadata = {
    anything: 'blabla'
  };

  it('should broadcast post and return result if comment metadata provided', async function() {
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
    const postWithMetadata = Object.assign({}, post, { metadata });

    const result = await broadcastPost(postWithMetadata)(accessToken);

    const operations = [
      [
        'comment',
        {
          parent_author: '',
          parent_permlink: 'test-tag',
          author: 'whoever',
          permlink: 'some-permlink',
          title: 'title',
          body: 'some post',
          json_metadata: JSON.stringify(metadata)
        }
      ]
    ];
    expect(result.result.operations).to.deep.equal(operations);
  });

  it('should broadcast post and return result if comment metadata NOT provided', async function() {
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

    const result = await broadcastPost(post)(accessToken);

    const operations = [
      [
        'comment',
        {
          parent_author: '',
          parent_permlink: 'test-tag',
          author: 'whoever',
          permlink: 'some-permlink',
          title: 'title',
          body: 'some post',
          json_metadata: ''
        }
      ]
    ];
    expect(result.result.operations).to.deep.equal(operations);
  });
});
