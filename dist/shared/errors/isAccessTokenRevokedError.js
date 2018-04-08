"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var checkOAuth2Error_1 = require("./checkOAuth2Error");
var constants_1 = require("./constants");
/**
 * Checks if OAuth2 error is caused by expired access token.
 * @param {Object} oAuth2Error The object of OAuth2 error.
 */
exports.isAccessTokenRevokedError = function (_a) {
    var error = _a.error, error_description = _a.error_description;
    return checkOAuth2Error_1.checkOAuth2Error({ error: error, error_description: error_description }, constants_1.ACCESS_TOKEN_REVOKED);
};
