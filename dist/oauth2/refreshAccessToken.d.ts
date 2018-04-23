import { ClientCredentials } from './interfaces/ClientCredentials';
import { AccessTokenResponse } from '../shared/interfaces/AccessTokenResponse';
export declare function refreshAccessToken({clientId, clientSecret, refreshToken}: ClientCredentials & {
    refreshToken: string;
}): Promise<AccessTokenResponse>;
