import { broadcastPost } from '../../src/broadcasting/broadcastPost';
import * as broadcaster from '../../src/broadcasting/broadcastOperations';

import { expect } from 'chai';
import * as sinon from 'sinon';

describe('broadcastComment', function() {
  const accessToken = 'fdsgfdew';
  const mainTag = 'maintag';
  const postAuthor = 'jakiaptryk-dev';
  const postPermlink = 'ftyfyytvgyb67';
  const postTitle = 'nice-title';
  const postBody = 'post content';

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
          parent_author: '',
          parent_permlink: mainTag,
          author: postAuthor,
          permlink: postPermlink,
          title: postTitle,
          body: postBody,
          json_metadata: JSON.stringify(jsonMetadata)
        }
      ]
    ];

    await broadcastPost(
      accessToken,
      mainTag,
      postAuthor,
      postPermlink,
      postTitle,
      postBody,
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
          parent_author: '',
          parent_permlink: mainTag,
          author: postAuthor,
          permlink: postPermlink,
          title: postTitle,
          body: postBody,
          json_metadata: ''
        }
      ]
    ];

    await broadcastPost(
      accessToken,
      mainTag,
      postAuthor,
      postPermlink,
      postTitle,
      postBody
    );

    expect(this.broadcastOperations.calledWith(accessToken, operations)).to.be
      .true;
  });

  afterEach(function() {
    this.broadcastOperations.restore();
  });
});
