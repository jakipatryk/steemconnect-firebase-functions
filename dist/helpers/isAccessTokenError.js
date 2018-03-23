"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ACCESS_TOKEN_EXPIRED_1 = require("../errors/ACCESS_TOKEN_EXPIRED");
const ACCESS_TOKEN_INVALID_1 = require("../errors/ACCESS_TOKEN_INVALID");
const ACCESS_TOKEN_REVOKED_1 = require("../errors/ACCESS_TOKEN_REVOKED");
/**
 * Checks if OAuth2 error is caused by access token.
 * @param {object} oAuth2Error The object of OAuth2 error.
 */
function isAccessTokenError(oAuth2Error) {
    if ((oAuth2Error.error === ACCESS_TOKEN_EXPIRED_1.ACCESS_TOKEN_EXPIRED &&
        oAuth2Error.error_description === ACCESS_TOKEN_EXPIRED_1.ACCESS_TOKEN_EXPIRED_DESCRIPTION) ||
        (oAuth2Error.error === ACCESS_TOKEN_INVALID_1.ACCESS_TOKEN_INVALID &&
            oAuth2Error.error_description === ACCESS_TOKEN_INVALID_1.ACCESS_TOKEN_INVALID_DESCRIPTION) ||
        (oAuth2Error.error === ACCESS_TOKEN_REVOKED_1.ACCESS_TOKEN_REVOKED &&
            oAuth2Error.error_description === ACCESS_TOKEN_REVOKED_1.ACCESS_TOKEN_REVOKED_DESCRIPTION)) {
        return true;
    }
    return false;
}
exports.isAccessTokenError = isAccessTokenError;
