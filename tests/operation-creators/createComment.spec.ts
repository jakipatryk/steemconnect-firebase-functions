import { createComment } from '../../src/operation-creators/createComment';

import { expect } from 'chai';

describe('createComment', () => {
  const parent_author = 'ned';
  const parent_permlink = 'parentPermlinkOrMainTag';
  const author = 'jakipatryk';
  const permlink = 'i-am-jakipatryk-from-polska';
  const title = 'I am jakipatryk from Polska';
  const body = 'Hello! Whats up ppl?';
  const json_metadata = JSON.stringify({
    app: 'strimi',
    community: 'strimi'
  });

  it('should create comment operation if only required config properties are provided', () => {
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

    const actualOperation = createComment({
      parent_permlink,
      author,
      permlink,
      body
    });

    expect(actualOperation).to.deep.equal(expectedOperation);
  });

  it('should create comment operation if optional config property (parentAuthor) is provided', () => {
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

    const actualOperation = createComment({
      parent_permlink,
      author,
      permlink,
      body,
      parent_author
    });

    expect(actualOperation).to.deep.equal(expectedOperation);
  });
});
