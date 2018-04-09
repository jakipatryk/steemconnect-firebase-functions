import { AccessTokenResponse } from '../shared/interfaces/AccessTokenResponse';
/**
 * Exchanges the OAuth2 code for an access token and its details (username, expiration time and optionally refresh token) and returns them.
 * @param {string} clientId The client id of the SteemConnect app.
 * @param {string} clientSecret The client secret of the SteemConnect app.
 * @param {string} redirectUri The redirect URI used in the getAuthorizationUrl function.
 * @param {string} code The OAuth2 code.
 * @returns {Promise} Promise object that resolves into the access token + its details object.
 */
export declare function getAccessToken(clientId: string, clientSecret: string, redirectUri: string, code: string): Promise<AccessTokenResponse>;
