import { Unfollow } from './interfaces/Unfollow';
import { AccessTokenResponse } from './../shared/interfaces/AccessTokenResponse';
import { BroadcastResult } from './interfaces/BroadcastResult';
export declare const broadcastUnfollow: ({ username, userToUnfollow }: Unfollow) => ({ access_token }: AccessTokenResponse) => BroadcastResult;
