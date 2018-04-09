import { createBroadcastableCustomJson } from '../shared/helpers/createBroadcastable';
import { Reblog } from './interfaces/Reblog';
import { AccessTokenResponse } from './../shared/interfaces/AccessTokenResponse';
import { BroadcastResult } from './interfaces/BroadcastResult';

export const broadcastReblog = ({
  username,
  postAuthor,
  postPermlink
}: Reblog) => ({ access_token }: AccessTokenResponse): BroadcastResult =>
  createBroadcastableCustomJson({
    required_posting_auths: [username],
    id: 'follow',
    json: JSON.stringify([
      'reblog',
      {
        account: username,
        author: postAuthor,
        permlink: postPermlink
      }
    ])
  })({ access_token });
