import { createBroadcastableDeleteComment } from '../shared/helpers/createBroadcastable';
import { AccessTokenResponse } from './../shared/interfaces/AccessTokenResponse';
import { BroadcastResult } from './interfaces/BroadcastResult';
import { Deletion } from './interfaces/Deletion';

export const broadcastDeletion = ({ author, permlink }: Deletion) => ({
  access_token
}: AccessTokenResponse): Promise<BroadcastResult> =>
  createBroadcastableDeleteComment({
    author,
    permlink
  })({ access_token });
