import { BroadcastResult } from './interfaces/BroadcastResult';
import { Operations } from '../shared/interfaces/Operation';
import { AccessTokenResponse } from '../shared/interfaces/AccessTokenResponse';
export declare function broadcastOperations([...operations]: Operations): ({ access_token }: AccessTokenResponse) => Promise<BroadcastResult>;
