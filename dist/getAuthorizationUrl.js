"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const qs = require("querystring");
/**
 * Creates and returns the authorization URL to SteemConnect OAuth2 service.
 * @param {string} clientId The client id of the SteemConnect app.
 * @param {string} redirectUri The URI you want the user to be redirected to after successful login.
 * @param {Array} scope The array of scopes (ex. ['vote', 'comment']).
 * @returns {string} The URL of the SteemConnect OAuth2 authorization endpoint.
 */
function getAuthorizationUrl(clientId, redirectUri, scope) {
    const base = 'https://steemconnect.com/oauth2/authorize?';
    const queryParams = {
        client_id: clientId,
        response_type: 'code',
        redirect_uri: redirectUri,
        scope: scope.join(',')
    };
    const endpoint = base + qs.stringify(queryParams);
    return endpoint;
}
exports.getAuthorizationUrl = getAuthorizationUrl;
