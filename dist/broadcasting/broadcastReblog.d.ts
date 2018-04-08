import { Reblog } from './interfaces/Reblog';
import { AccessTokenResponse } from './../shared/interfaces/AccessTokenResponse';
import { BroadcastResult } from './interfaces/BroadcastResult';
export declare const broadcastReblog: ({ username, postAuthor, postPermlink }: Reblog) => ({ access_token }: AccessTokenResponse) => BroadcastResult;
