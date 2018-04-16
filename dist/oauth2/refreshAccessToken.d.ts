import { ClientCredenctials } from './interfaces/ClientCredentials';
import { AccessTokenResponse } from '../shared/interfaces/AccessTokenResponse';
export declare function refreshAccessToken({clientId, clientSecret, refreshToken}: ClientCredenctials & {
    refreshToken: string;
}): Promise<AccessTokenResponse>;
