import { Follow } from './interfaces/Follow';
import { AccessTokenResponse } from './../shared/interfaces/AccessTokenResponse';
import { BroadcastResult } from './interfaces/BroadcastResult';
export declare const broadcastFollow: ({ username, userToFollow }: Follow) => ({ access_token }: AccessTokenResponse) => BroadcastResult;
