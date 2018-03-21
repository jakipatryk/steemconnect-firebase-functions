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
 * Exchanges the refresh token for the new access token and its details (username, expiration time and refresh token) and returns them.
 * @param {string} clientId The client id of the SteemConnect app.
 * @param {string} clientSecret The client secret of the SteemConnect app.
 * @param {string} refreshToken The refresh_token of the user you want to get new access token for.
 * @returns {Promise} Promise object that resolves into the new access token + its details object.
 */
function refreshAccessToken(clientId, clientSecret, refreshToken) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const options = {
                uri: 'https://steemconnect.com/api/oauth2/token',
                form: {
                    grant_type: 'refresh_token',
                    client_id: clientId,
                    client_secret: clientSecret,
                    refresh_token: refreshToken
                },
                json: true
            };
            const newAccessToken = yield rp.post(options);
            return newAccessToken;
        }
        catch (e) {
            throw e.error;
        }
    });
}
exports.refreshAccessToken = refreshAccessToken;
