import { AccessTokenResponse } from './../shared/interfaces/AccessTokenResponse';
import { BroadcastResult } from './interfaces/BroadcastResult';
import { Vote } from './interfaces/Vote';
export declare const broadcastUpvote: ({ voter, author, permlink, weight }: Vote) => ({ access_token }: AccessTokenResponse) => Promise<BroadcastResult>;
