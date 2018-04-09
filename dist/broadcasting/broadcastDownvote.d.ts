import { Vote } from './interfaces/Vote';
import { AccessTokenResponse } from './../shared/interfaces/AccessTokenResponse';
export declare const broadcastDownvote: ({ voter, author, permlink, weight }: Vote) => ({ access_token }: AccessTokenResponse) => any;
