import { AccessTokenResponse } from '../shared/interfaces/AccessTokenResponse';
export declare function refreshAccessToken({clientId, clientSecret, refreshToken}: {
    clientId: string;
    clientSecret: string;
    refreshToken: string;
}): Promise<AccessTokenResponse>;
