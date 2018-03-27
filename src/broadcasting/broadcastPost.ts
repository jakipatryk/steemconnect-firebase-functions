import * as broadcaster from './broadcastOperations';
import { createComment } from '../operation-creators/createComment';

import { Operation } from '../interfaces/Operation';
import { BroadcastResult } from './../interfaces/BroadcastResult';

/**
 * Broadcasts a post to the Steem blockchain and returns the result of the operation.
 * @param {string} accessToken The access_token of the user.
 * @param {string} mainTag The main tag of the post (not possible to change it later).
 * @param {string} postAuthor The username of the user who wants to add a post.
 * @param {string} postPermlink The permlink of the post.
 * @param {string} postTitle The title of the post.
 * @param {string} postBody The content of the post.
 * @param {Object} [jsonMetadata] Optional additional metadata (ex. the name of the app or additional tags).
 * @returns {Promise} Promise object that resolves into the result of the operation.
 */
export function broadcastPost(
  accessToken: string,
  mainTag: string,
  postAuthor: string,
  postPermlink: string,
  postTitle: string,
  postBody: string,
  jsonMetadata?: object
): Promise<BroadcastResult> {
  const json = JSON.stringify(jsonMetadata) || '';
  const operation: Operation = createComment({
    parent_permlink: mainTag,
    author: postAuthor,
    permlink: postPermlink,
    body: postBody,
    title: postTitle,
    json_metadata: json
  });

  return broadcaster.broadcastOperations(accessToken, [operation]);
}
