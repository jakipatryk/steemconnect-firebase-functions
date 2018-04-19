import { AccessTokenResponse } from './../shared/interfaces/AccessTokenResponse';
import { BroadcastResult } from './interfaces/BroadcastResult';
import { Unfollow } from './interfaces/Unfollow';
export declare const broadcastUnfollow: ({ username, userToUnfollow }: Unfollow) => ({ access_token }: AccessTokenResponse) => Promise<BroadcastResult>;
