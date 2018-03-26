import { createOperation } from './../../src/operation-creators/createOperation';

import { expect } from 'chai';

describe('createOperation', () => {
  const type = 'vote';
  const config = {
    voter: 'jakipatryk',
    author: 'ned',
    permlink: 'i-am-ned-i-like-smts',
    weight: 10000
  };
  it('should create operation if both type and config provided', () => {
    const expectedOperation = [
      'vote',
      {
        voter: 'jakipatryk',
        author: 'ned',
        permlink: 'i-am-ned-i-like-smts',
        weight: 10000
      }
    ];
    const actualOperation = createOperation(type, config);

    expect(actualOperation).to.deep.equal(expectedOperation);
  });
});
