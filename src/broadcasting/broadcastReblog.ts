import * as broadcaster from './broadcastOperations';
import { createCustomJson } from '../operation-creators/createCustomJson';

import { Operation } from '../interfaces/Operation';
import { BroadcastResult } from './../interfaces/BroadcastResult';

/**
 * Broadcasts a comment to the Steem blockchain and returns the result of the operation.
 * @param {string} accessToken The access_token of the user.
 * @param {string} username The username of the user who wants to reblog something.
 * @param {string} postAuthor The username of the author of the post to reblog.
 * @param {string} postPermlink The permlink of the post to reblog.
 * @returns {Promise} Promise object that resolves into the result of the operation.
 */
export function broadcastReblog(
  accessToken: string,
  username: string,
  postAuthor: string,
  postPermlink: string
): Promise<BroadcastResult> {
  const customJson = [
    'reblog',
    {
      account: username,
      author: postAuthor,
      permlink: postPermlink
    }
  ];

  const operation: Operation = createCustomJson(
    [username],
    'follow',
    customJson
  );

  return broadcaster.broadcastOperations(accessToken, [operation]);
}
