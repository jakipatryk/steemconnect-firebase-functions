"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const qs = require("querystring");
/**
 * Creates and returns the authorization URL to SteemConnect OAuth2 service.
 * @param {string} clientId The client id of the SteemConnect app.
 * @param {string} redirectUri The URI you want the user to be redirected to after successful login.
 * @param {Array} scope The array of scopes (ex. ['vote', 'comment']).
 * @param {string} [state] Optional state variable
 * @returns {string} The URL of the SteemConnect OAuth2 authorization endpoint.
 */
function getAuthorizationUrl(clientId, redirectUri, scope, state) {
    const base = 'https://steemconnect.com/oauth2/authorize?';
    const queryParams = {
        client_id: clientId,
        response_type: 'code',
        redirect_uri: redirectUri,
        scope: scope.join(','),
        state: state || null
    };
    const endpoint = base + qs.stringify(queryParams);
    return endpoint;
}
exports.getAuthorizationUrl = getAuthorizationUrl;
