import { createBroadcastableVote } from '../shared/helpers/createBroadcastable';
import { Vote } from './interfaces/Vote';
import { BroadcastResult } from './interfaces/BroadcastResult';
import { AccessTokenResponse } from './../shared/interfaces/AccessTokenResponse';

export const broadcastUpvote = ({ voter, author, permlink, weight }: Vote) => ({
  access_token
}: AccessTokenResponse) =>
  createBroadcastableVote({
    voter,
    author,
    permlink,
    weight
  })({ access_token });
