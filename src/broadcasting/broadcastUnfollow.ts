import * as broadcaster from './broadcastOperations';
import { createCustomJson } from '../operation-creators/createCustomJson';

import { Operation } from '../interfaces/Operation';
import { BroadcastResult } from './../interfaces/BroadcastResult';

/**
 * Broadcasts a comment to the Steem blockchain and returns the result of the operation.
 * @param {string} accessToken The access_token of the user.
 * @param {string} username The username of the user who wants to unfollow somebody.
 * @param {string} userToUnfollow The username of the user to unfollow.
 * @returns {Promise} Promise object that resolves into the result of the operation.
 */
export function broadcastUnfollow(
  accessToken: string,
  username: string,
  userToUnfollow: string
): Promise<BroadcastResult> {
  const customJson = [
    'follow',
    {
      follower: username,
      following: userToUnfollow,
      what: []
    }
  ];

  const operation: Operation = createCustomJson(
    [username],
    'follow',
    customJson
  );

  return broadcaster.broadcastOperations(accessToken, [operation]);
}
