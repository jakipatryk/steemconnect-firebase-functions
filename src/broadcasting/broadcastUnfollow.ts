import { createBroadcastableCustomJson } from '../shared/helpers/createBroadcastable';
import { Unfollow } from './interfaces/Unfollow';
import { AccessTokenResponse } from './../shared/interfaces/AccessTokenResponse';
import { BroadcastResult } from './interfaces/BroadcastResult';

export const broadcastUnfollow = ({ username, userToUnfollow }: Unfollow) => ({
  access_token
}: AccessTokenResponse): BroadcastResult =>
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
