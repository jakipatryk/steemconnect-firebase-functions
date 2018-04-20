import { createBroadcastableDeleteComment } from '../shared/helpers/createBroadcastable';
import { AccessTokenResponse } from './../shared/interfaces/AccessTokenResponse';
import { BroadcastResult } from './interfaces/BroadcastResult';
import { Deletion } from './interfaces/Deletion';

export const broadcastDeletion = ({ permlink }: Deletion) => ({
  access_token,
  username
}: AccessTokenResponse): Promise<BroadcastResult> =>
  createBroadcastableDeleteComment({
    author: username,
    permlink
  })({ access_token });
