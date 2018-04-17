import { createBroadcastableDeleteComment } from '../shared/helpers/createBroadcastable';
import { Deletion } from './interfaces/Deletion';
import { BroadcastResult } from './interfaces/BroadcastResult';
import { AccessTokenResponse } from './../shared/interfaces/AccessTokenResponse';

export const broadcastDeletion = ({ author, permlink }: Deletion) => ({
  access_token
}: AccessTokenResponse) =>
  createBroadcastableDeleteComment({
    author,
    permlink
  })({ access_token });
