import * as broadcaster from './broadcastOperations';

import { Operation } from './interfaces/Operation';

export function broadcastComment(
  accessToken: string,
  parentAuthor: string,
  parentPermlink: string,
  commentAuthor: string,
  commentPermlink: string,
  commentBody: string,
  jsonMetadata?: object
): Promise<any> {
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
