import { ClientCredentials } from './../oauth2/interfaces/ClientCredentials';
import { AccessTokenResponse } from './../shared/interfaces/AccessTokenResponse';
import { BroadcastResult } from './interfaces/BroadcastResult';
export declare const rely: ({ clientId, clientSecret }: Required<ClientCredentials>) => ({ access_token, refresh_token, username, expires_in }: Required<AccessTokenResponse>) => (broadcastable: Function) => Promise<BroadcastResult & Partial<AccessTokenResponse>>;
