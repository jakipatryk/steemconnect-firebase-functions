import { AccessTokenResponse } from './../shared/interfaces/AccessTokenResponse';
import { BroadcastResult } from './interfaces/BroadcastResult';
import { Vote } from './interfaces/Vote';
export declare const broadcastDownvote: ({ author, permlink, weight }: Vote) => ({ access_token, username }: AccessTokenResponse) => Promise<BroadcastResult>;
