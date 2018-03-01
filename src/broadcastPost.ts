import * as broadcaster from './broadcastOperations';

import { Operation } from './interfaces/Operation';

export function broadcastPost(
  accessToken: string,
  mainTag: string,
  postAuthor: string,
  postPermlink: string,
  postTitle: string,
  postBody: string,
  jsonMetadata?: object
): Promise<any> {
  const operation: Operation = [
    'comment',
    {
      parent_author: '',
      parent_permlink: mainTag,
      author: postAuthor,
      permlink: postPermlink,
      title: postTitle,
      body: postBody,
      json_metadata: JSON.stringify(jsonMetadata) || ''
    }
  ];

  return broadcaster.broadcastOperations(accessToken, [operation]);
}
