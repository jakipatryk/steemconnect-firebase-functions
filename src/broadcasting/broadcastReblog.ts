import { createBroadcastableCustomJson } from '../shared/helpers/createBroadcastable';
import { AccessTokenResponse } from './../shared/interfaces/AccessTokenResponse';
import { BroadcastResult } from './interfaces/BroadcastResult';
import { Reblog } from './interfaces/Reblog';

export const broadcastReblog = ({
  username,
  postAuthor,
  postPermlink
}: Reblog) => ({
  access_token
}: AccessTokenResponse): Promise<BroadcastResult> =>
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
