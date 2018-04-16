import { BroadcastResult } from './interfaces/BroadcastResult';
import { ClientCredenctials } from './../oauth2/interfaces/ClientCredentials';
import { AccessTokenResponse } from './../shared/interfaces/AccessTokenResponse';
export declare const rely: ({ clientId, clientSecret }: ClientCredenctials) => ({ access_token, refresh_token }: Required<AccessTokenResponse>) => (broadcastable: Function) => Promise<BroadcastResult & Partial<AccessTokenResponse>>;
