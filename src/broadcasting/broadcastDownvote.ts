import * as broadcaster from './broadcastOperations';
import { createVote } from '../operation-creators/createVote';

import { Operation } from '../interfaces/Operation';
import { BroadcastResult } from './../interfaces/BroadcastResult';

/**
 * Broadcasts a downvote to the Steem blockchain and returns the result of the operation.
 * @param {string} accessToken The access_token of the user.
 * @param {string} voter The username of the voter.
 * @param {string} author The username of the author of a comment/post that user wants to downvote.
 * @param {string} permlink The permlink of a comment/post that user wants to downvote.
 * @param {number} weight The weight of the vote (ex. 5000 is going to broadcast a 50% downvote).
 * @returns {Promise} Promise object that resolves into the result of the operation.
 */
export function broadcastDownvote(
  accessToken: string,
  voter: string,
  author: string,
  permlink: string,
  weight: number
): Promise<BroadcastResult> {
  const operation: Operation = createVote({
    voter,
    author,
    permlink,
    weight: -weight
  });

  return broadcaster.broadcastOperations(accessToken, [operation]);
}
