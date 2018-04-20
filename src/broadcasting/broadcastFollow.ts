import { createBroadcastableCustomJson } from '../shared/helpers/createBroadcastable';
import { AccessTokenResponse } from './../shared/interfaces/AccessTokenResponse';
import { BroadcastResult } from './interfaces/BroadcastResult';
import { Follow } from './interfaces/Follow';

export const broadcastFollow = ({ userToFollow }: Follow) => ({
  access_token,
  username
}: AccessTokenResponse): Promise<BroadcastResult> =>
  createBroadcastableCustomJson({
    required_posting_auths: [username],
    id: 'follow',
    json: JSON.stringify([
      'follow',
      {
        follower: username,
        following: userToFollow,
        what: ['blog']
      }
    ])
  })({ access_token });
