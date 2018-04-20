import { AccessTokenResponse } from './../shared/interfaces/AccessTokenResponse';
import { BroadcastResult } from './interfaces/BroadcastResult';
import { Follow } from './interfaces/Follow';
export declare const broadcastFollow: ({ userToFollow }: Follow) => ({ access_token, username }: AccessTokenResponse) => Promise<BroadcastResult>;
