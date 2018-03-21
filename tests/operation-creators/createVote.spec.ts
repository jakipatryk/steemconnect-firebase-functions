import { createVote } from '../../src/operation-creators/createVote';

import { expect } from 'chai';

describe('createVote', () => {
  const voter = 'jakipatryk';
  const author = 'ned';
  const permlink = 'i-am-ned-i-like-smts';

  it('should create vote operation for upvote if weight is a positive number', () => {
    const weight = 10000;
    const expectedOperation = [
      'vote',
      {
        voter: 'jakipatryk',
        author: 'ned',
        permlink: 'i-am-ned-i-like-smts',
        weight: 10000
      }
    ];

    const operation = createVote(voter, author, permlink, weight);

    expect(operation).to.deep.equal(expectedOperation);
  });

  it('should create vote operation for downvote if weight is a negative number', () => {
    const weight = -10000;
    const expectedOperation = [
      'vote',
      {
        voter: 'jakipatryk',
        author: 'ned',
        permlink: 'i-am-ned-i-like-smts',
        weight: -10000
      }
    ];

    const operation = createVote(voter, author, permlink, weight);

    expect(operation).to.deep.equal(expectedOperation);
  });
});
