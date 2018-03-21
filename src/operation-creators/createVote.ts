import { Operation } from '../interfaces/Operation';

/**
 * Creates and returns the vote operation.
 * @param {string} voter The username of the voter.
 * @param {string} author The username of the author of a comment/post that you want to create a vote operation on.
 * @param {string} permlink The permlink of a comment/post that you want to create a vote operation on.
 * @param {number} weight The weight of the vote (ex. 10000 is going to create a 100% upvote operation and -1000 is going to create a 10% downvote operation).
 * @returns {Array} A single vote operation in the form of an array.
 */
export function createVote(
  voter: string,
  author: string,
  permlink: string,
  weight: number
): Operation {
  const voteOperation: Operation = [
    'vote',
    {
      voter,
      author,
      permlink,
      weight
    }
  ];

  return voteOperation;
}
