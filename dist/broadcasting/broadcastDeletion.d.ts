import { Deletion } from './interfaces/Deletion';
import { AccessTokenResponse } from './../shared/interfaces/AccessTokenResponse';
export declare const broadcastDeletion: ({ author, permlink }: Deletion) => ({ access_token }: AccessTokenResponse) => any;
