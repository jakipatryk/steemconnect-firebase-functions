"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const rp = require("request-promise");
/**
 * Exchanges the OAuth2 code for an access token and its details (username, expiration time and optionally refresh token) and returns them.
 * @param {string} clientId The client id of the SteemConnect app.
 * @param {string} clientSecret The client secret of the SteemConnect app.
 * @param {string} redirectUri The redirect URI used in the getAuthorizationUrl function.
 * @param {string} code The OAuth2 code.
 * @returns {Promise} Promise object that resolves into the access token + its details object.
 */
function getAccessToken(clientId, clientSecret, redirectUri, code) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const options = {
                uri: 'https://steemconnect.com/api/oauth2/token',
                form: {
                    grant_type: 'authorization_code',
                    client_id: clientId,
                    client_secret: clientSecret,
                    redirect_uri: redirectUri,
                    code: code
                },
                json: true
            };
            const accessToken = yield rp.post(options);
            return accessToken;
        }
        catch (e) {
            throw e.error;
        }
    });
}
exports.getAccessToken = getAccessToken;
