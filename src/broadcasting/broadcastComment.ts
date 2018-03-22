import * as broadcaster from './broadcastOperations';

import { Operation } from '../interfaces/Operation';
import { BroadcastResult } from './../interfaces/BroadcastResult';

/**
 * Broadcasts a comment to the Steem blockchain and returns the result of the operation.
 * @param {string} accessToken The access_token of the user.
 * @param {string} parentAuthor The username of the author of either a post or a parent comment that user wants to add a comment to.
 * @param {string} parentPermlink The permlink of either a post or a parent comment that user wants to add a comment to.
 * @param {string} commentAuthor The username of the user who wants to add a comment.
 * @param {string} commentPermlink The permlink of the comment.
 * @param {string} commentBody The content of the comment.
 * @param {Object} [jsonMetadata] Optional additional metadata (ex. the name of the app).
 * @returns {Promise} Promise object that resolves into the result of the operation.
 */
export function broadcastComment(
  accessToken: string,
  parentAuthor: string,
  parentPermlink: string,
  commentAuthor: string,
  commentPermlink: string,
  commentBody: string,
  jsonMetadata?: object
): Promise<BroadcastResult> {
  const operation: Operation = [
    'comment',
    {
      parent_author: parentAuthor,
      parent_permlink: parentPermlink,
      author: commentAuthor,
      permlink: commentPermlink,
      title: '',
      body: commentBody,
      json_metadata: JSON.stringify(jsonMetadata) || ''
    }
  ];

  return broadcaster.broadcastOperations(accessToken, [operation]);
}
