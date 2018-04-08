import { createBroadcastableCustomJson } from '../shared/helpers/createBroadcastable';
import { Follow } from './interfaces/Follow';
import { AccessTokenResponse } from './../shared/interfaces/AccessTokenResponse';
import { BroadcastResult } from './interfaces/BroadcastResult';

export const broadcastFollow = ({ username, userToFollow }: Follow) => ({
  access_token
}: AccessTokenResponse): BroadcastResult =>
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
