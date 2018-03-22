import * as broadcaster from './broadcastOperations';

import { Operation } from '../interfaces/Operation';
import { BroadcastResult } from './../interfaces/BroadcastResult';

/**
 * Broadcasts a comment to the Steem blockchain and returns the result of the operation.
 * @param {string} accessToken The access_token of the user.
 * @param {string} username The username of the user who wants to follow somebody.
 * @param {string} userToFollow The username of the user to follow.
 * @returns {Promise} Promise object that resolves into the result of the operation.
 */
export function broadcastFollow(
  accessToken: string,
  username: string,
  userToFollow: string
): Promise<BroadcastResult> {
  const operation: Operation = [
    'custom_json',
    {
      required_auths: [],
      required_posting_auths: [username],
      id: 'follow',
      json: JSON.stringify([
        'follow',
        {
          follower: username,
          following: userToFollow,
          what: ['blog']
        }
      ])
    }
  ];

  return broadcaster.broadcastOperations(accessToken, [operation]);
}
