import { AccessTokenResponse } from './../shared/interfaces/AccessTokenResponse';
import { BroadcastResult } from './interfaces/BroadcastResult';
import { Deletion } from './interfaces/Deletion';
export declare const broadcastDeletion: ({ permlink }: Deletion) => ({ access_token, username }: AccessTokenResponse) => Promise<BroadcastResult>;
