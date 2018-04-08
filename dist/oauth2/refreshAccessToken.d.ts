import { AccessTokenResponse } from '../shared/interfaces/AccessTokenResponse';
/**
 * Exchanges the refresh token for the new access token and its details (username, expiration time and refresh token) and returns them.
 * @param {string} clientId The client id of the SteemConnect app.
 * @param {string} clientSecret The client secret of the SteemConnect app.
 * @param {string} refreshToken The refresh_token of the user you want to get new access token for.
 * @returns {Promise} Promise object that resolves into the new access token + its details object.
 */
export declare function refreshAccessToken(clientId: string, clientSecret: string, refreshToken: string): Promise<AccessTokenResponse>;
