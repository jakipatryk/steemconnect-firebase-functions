import { broadcastComment } from '../../src/broadcasting/broadcastComment';
import * as broadcaster from '../../src/broadcasting/broadcastOperations';

import { expect } from 'chai';
import * as sinon from 'sinon';

describe('broadcastComment', function() {
  const accessToken = 'fdsgfdew';
  const parentAuthor = 'whoever';
  const parentPermlink = 'some-permlink';
  const commentAuthor = 'jakiaptryk-dev';
  const commentPermlink = '';
  const commentBody = 'some comment';

  beforeEach(function() {
    this.broadcastOperations = sinon.stub(broadcaster, 'broadcastOperations');
  });

  it('should call broadcastOperations with correct data of the comment to broadcast if jsonMetadata provided', async function() {
    const jsonMetadata = {
      anything: 'blabla'
    };
    const operations = [
      [
        'comment',
        {
          parent_author: parentAuthor,
          parent_permlink: parentPermlink,
          author: commentAuthor,
          permlink: commentPermlink,
          title: '',
          body: commentBody,
          json_metadata: JSON.stringify(jsonMetadata)
        }
      ]
    ];

    await broadcastComment(
      accessToken,
      parentAuthor,
      parentPermlink,
      commentAuthor,
      commentPermlink,
      commentBody,
      jsonMetadata
    );

    expect(this.broadcastOperations.calledWith(accessToken, operations)).to.be
      .true;
  });

  it('should call broadcastOperations with correct data of the comment to broadcast if jsonMetadata NOT provided', async function() {
    const operations = [
      [
        'comment',
        {
          parent_author: parentAuthor,
          parent_permlink: parentPermlink,
          author: commentAuthor,
          permlink: commentPermlink,
          title: '',
          body: commentBody,
          json_metadata: ''
        }
      ]
    ];

    await broadcastComment(
      accessToken,
      parentAuthor,
      parentPermlink,
      commentAuthor,
      commentPermlink,
      commentBody
    );

    expect(this.broadcastOperations.calledWith(accessToken, operations)).to.be
      .true;
  });

  afterEach(function() {
    this.broadcastOperations.restore();
  });
});
