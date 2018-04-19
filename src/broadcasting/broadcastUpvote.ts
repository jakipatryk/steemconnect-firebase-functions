import { createBroadcastableVote } from '../shared/helpers/createBroadcastable';
import { AccessTokenResponse } from './../shared/interfaces/AccessTokenResponse';
import { BroadcastResult } from './interfaces/BroadcastResult';
import { Vote } from './interfaces/Vote';

export const broadcastUpvote = ({ voter, author, permlink, weight }: Vote) => ({
  access_token
}: AccessTokenResponse): Promise<BroadcastResult> =>
  createBroadcastableVote({
    voter,
    author,
    permlink,
    weight
  })({ access_token });
