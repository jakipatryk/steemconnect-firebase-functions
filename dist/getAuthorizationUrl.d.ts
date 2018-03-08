/**
 * Creates and returns the authorization URL to SteemConnect OAuth2 service.
 * @param {string} clientId The client id of the SteemConnect app.
 * @param {string} redirectUri The URI you want the user to be redirected to after successful login.
 * @param {Array} scope The array of scopes (ex. ['vote', 'comment']).
 * @returns {string} The URL of the SteemConnect OAuth2 authorization endpoint.
 */
export declare function getAuthorizationUrl(clientId: string, redirectUri: string, scope: Array<string>): string;
