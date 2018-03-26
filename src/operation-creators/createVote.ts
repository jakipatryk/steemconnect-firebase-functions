import { createOperation } from './createOperation';
import { VoteConfig } from './../interfaces/VoteConfig';
import { Operation } from '../interfaces/Operation';

/**
 * Creates and returns the vote operation.
 * @param {Object} config The configuration object for vote operation.
 * @param {string} config.voter The username of the voter.
 * @param {string} config.author The username of the author of a comment/post that you want to create a vote operation on.
 * @param {string} config.permlink The permlink of a comment/post that you want to create a vote operation on.
 * @param {number} config.weight The weight of the vote (ex. 10000 is going to create a 100% upvote operation and -1000 is going to create a 10% downvote operation).
 * @returns {Array} A single vote operation in the form of an array.
 */
export const createVote = ({
  voter,
  author,
  permlink,
  weight
}: VoteConfig): Operation =>
  createOperation('vote', { voter, author, permlink, weight });
