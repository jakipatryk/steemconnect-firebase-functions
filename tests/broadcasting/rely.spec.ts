import { rely } from '../../src/broadcasting/rely';
import { broadcastUpvote } from './../../src/broadcasting/broadcastUpvote';

import { expect } from 'chai';
import * as nock from 'nock';

describe('rely', () => {
  const clientCredentials = {
    clientId: 'strimi.app',
    clientSecret: '432rnj3nr23nkvfdvdf'
  };
  const tokens = {
    access_token: 'fdsfertre',
    expires_in: 4323432,
    username: 'ned',
    refresh_token: '3rk3m2krl3'
  };
  const voteConfig = {
    author: 'whoever',
    permlink: 'some-permlink',
    weight: 10000
  };

  it('should broadcast if access_token is valid', async () => {
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

    const result = await rely(clientCredentials)(tokens)(
      broadcastUpvote(voteConfig)
    );

    expect(result).to.exist;
    expect(result).to.have.property('result');
  });

  it('should broadcast if access_token is expired, but valid refresh_token was provided', async () => {
    nock('https://steemconnect.com')
      .post('/api/broadcast')
      .once()
      .replyWithError({
        error: 'invalid_grant',
        error_description: 'The token has invalid role'
      });

    nock('https://steemconnect.com')
      .post('/api/oauth2/token')
      .reply(200, {
        access_token: 'ey.eyJy4MDI5NjU3fQ.lqX2bTkW7R',
        expires_in: 604800,
        username: 'ned',
        refresh_token: 'gfd4t.432rrdf43.gfdger'
      });

    nock('https://steemconnect.com')
      .post('/api/broadcast')
      .once()
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

    const result = await rely(clientCredentials)(tokens)(
      broadcastUpvote(voteConfig)
    );

    expect(result).to.exist;
    expect(result).to.have.property('result');
  });

  it('should return refreshed tokens if broadcast succeed after refreshing tokens', async () => {
    nock('https://steemconnect.com')
      .post('/api/broadcast')
      .once()
      .replyWithError({
        error: 'invalid_grant',
        error_description: 'The token has invalid role'
      });

    nock('https://steemconnect.com')
      .post('/api/oauth2/token')
      .reply(200, {
        access_token: 'ey.eyJy4MDI5NjU3fQ.lqX2bTkW7R',
        expires_in: 604800,
        username: 'ned',
        refresh_token: 'gfd4t.432rrdf43.gfdger'
      });

    nock('https://steemconnect.com')
      .post('/api/broadcast')
      .once()
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

    const result = await rely(clientCredentials)(tokens)(
      broadcastUpvote(voteConfig)
    );

    expect(result).to.exist;
    expect(result).to.have.property('access_token');
  });

  it('should throw if both access_token and refresh_token are invalid', () => {
    nock('https://steemconnect.com')
      .post('/api/broadcast')
      .once()
      .replyWithError({
        error: 'invalid_grant',
        error_description: 'The token has invalid role'
      });

    nock('https://steemconnect.com')
      .post('/api/oauth2/token')
      .replyWithError({
        error: 'invalid_grant',
        error_description: 'The token has invalid role'
      });

    return rely(clientCredentials)(tokens)(broadcastUpvote(voteConfig)).catch(
      err => {
        expect(err).to.exist;
      }
    );
  });
});
