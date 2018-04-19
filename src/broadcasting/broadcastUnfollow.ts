import { createBroadcastableCustomJson } from '../shared/helpers/createBroadcastable';
import { AccessTokenResponse } from './../shared/interfaces/AccessTokenResponse';
import { BroadcastResult } from './interfaces/BroadcastResult';
import { Unfollow } from './interfaces/Unfollow';

export const broadcastUnfollow = ({ username, userToUnfollow }: Unfollow) => ({
  access_token
}: AccessTokenResponse): Promise<BroadcastResult> =>
  createBroadcastableCustomJson({
    required_posting_auths: [username],
    id: 'follow',
    json: JSON.stringify([
      'follow',
      {
        follower: username,
        following: userToUnfollow,
        what: []
      }
    ])
  })({ access_token });
