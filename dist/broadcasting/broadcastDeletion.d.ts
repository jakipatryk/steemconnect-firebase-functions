import { AccessTokenResponse } from './../shared/interfaces/AccessTokenResponse';
import { BroadcastResult } from './interfaces/BroadcastResult';
import { Deletion } from './interfaces/Deletion';
export declare const broadcastDeletion: ({ author, permlink }: Deletion) => ({ access_token }: AccessTokenResponse) => Promise<BroadcastResult>;
