import { ClientCredentials } from './interfaces/ClientCredentials';
import { AccessTokenResponse } from '../shared/interfaces/AccessTokenResponse';
export declare function refreshAccessToken({clientId, clientSecret, refresh_token}: Required<ClientCredentials> & Required<AccessTokenResponse>): Promise<AccessTokenResponse>;
