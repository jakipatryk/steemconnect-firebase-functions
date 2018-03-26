import * as broadcaster from './broadcastOperations';
import { createComment } from '../operation-creators/createComment';

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
  const json = JSON.stringify(jsonMetadata);
  const operation: Operation = createComment({
    parent_permlink: parentPermlink,
    author: commentAuthor,
    permlink: commentPermlink,
    body: commentBody,
    parent_author: parentAuthor,
    json_metadata: json
  });

  return broadcaster.broadcastOperations(accessToken, [operation]);
}
