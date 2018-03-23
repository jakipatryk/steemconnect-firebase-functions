import { createComment } from '../../src/operation-creators/createComment';

import { expect } from 'chai';

describe('createComment', () => {
  const parentAuthor = 'ned';
  const parentPermlink = 'parentPermlinkOrMainTag';
  const author = 'jakipatryk';
  const permlink = 'i-am-jakipatryk-from-polska';
  const title = 'I am jakipatryk from Polska';
  const body = 'Hello! Whats up ppl?';
  const jsonMetadata = {
    app: 'strimi',
    community: 'strimi'
  };

  it('should create comment operation if only required parameters are provided', () => {
    const expectedOperation = [
      'comment',
      {
        parent_author: '',
        parent_permlink: 'parentPermlinkOrMainTag',
        author: 'jakipatryk',
        permlink: 'i-am-jakipatryk-from-polska',
        title: '',
        body: 'Hello! Whats up ppl?',
        json_metadata: ''
      }
    ];

    const operation = createComment(parentPermlink, author, permlink, body);

    expect(operation).to.deep.equal(expectedOperation);
  });

  it('should create comment operation if first optional argument (parentAuthor) is provided', () => {
    const expectedOperation = [
      'comment',
      {
        parent_author: 'ned',
        parent_permlink: 'parentPermlinkOrMainTag',
        author: 'jakipatryk',
        permlink: 'i-am-jakipatryk-from-polska',
        title: '',
        body: 'Hello! Whats up ppl?',
        json_metadata: ''
      }
    ];

    const operation = createComment(
      parentPermlink,
      author,
      permlink,
      body,
      parentAuthor
    );

    expect(operation).to.deep.equal(expectedOperation);
  });

  it('should create comment operation if jsonMetadata is null', () => {
    const expectedOperation = [
      'comment',
      {
        parent_author: 'ned',
        parent_permlink: 'parentPermlinkOrMainTag',
        author: 'jakipatryk',
        permlink: 'i-am-jakipatryk-from-polska',
        title: '',
        body: 'Hello! Whats up ppl?',
        json_metadata: ''
      }
    ];

    const operation = createComment(
      parentPermlink,
      author,
      permlink,
      body,
      parentAuthor,
      null,
      null
    );

    expect(operation).to.deep.equal(expectedOperation);
  });

  it('should create comment operation if first optional argument is null, but next optional arguments (jsonMetadata and title) are provided', () => {
    const expectedOperation = [
      'comment',
      {
        parent_author: '',
        parent_permlink: 'parentPermlinkOrMainTag',
        author: 'jakipatryk',
        permlink: 'i-am-jakipatryk-from-polska',
        title: 'I am jakipatryk from Polska',
        body: 'Hello! Whats up ppl?',
        json_metadata: JSON.stringify(jsonMetadata)
      }
    ];

    const operation = createComment(
      parentPermlink,
      author,
      permlink,
      body,
      null,
      title,
      jsonMetadata
    );

    expect(operation).to.deep.equal(expectedOperation);
  });
});
