import { createBroadcastableVote } from '../shared/helpers/createBroadcastable';
import { AccessTokenResponse } from './../shared/interfaces/AccessTokenResponse';
import { BroadcastResult } from './interfaces/BroadcastResult';
import { Vote } from './interfaces/Vote';

export const broadcastDownvote = ({ author, permlink, weight }: Vote) => ({
  access_token,
  username
}: AccessTokenResponse): Promise<BroadcastResult> =>
  createBroadcastableVote({
    voter: username,
    author,
    permlink,
    weight: -weight
  })({ access_token });
