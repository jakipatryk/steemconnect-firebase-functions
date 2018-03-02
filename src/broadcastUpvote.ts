import * as broadcaster from './broadcastOperations';

import { Operation } from './interfaces/Operation';

export function broadcastUpvote(
  accessToken: string,
  voter: string,
  author: string,
  permlink: string,
  weight: number
): Promise<any> {
  const operation: Operation = [
    'vote',
    {
      voter,
      author,
      permlink,
      weight
    }
  ];

  return broadcaster.broadcastOperations(accessToken, [operation]);
}
