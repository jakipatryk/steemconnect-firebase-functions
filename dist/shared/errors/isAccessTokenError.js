"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var isAccessTokenRevokedError_1 = require("./isAccessTokenRevokedError");
var isAccessTokenInvalidError_1 = require("./isAccessTokenInvalidError");
var isAccessTokenExpiredError_1 = require("./isAccessTokenExpiredError");
/**
 * Checks if OAuth2 error is caused by access token.
 * @param {Object} oAuth2Error The object of OAuth2 error.
 */
exports.isAccessTokenError = function (_a) {
    var error = _a.error, error_description = _a.error_description;
    return isAccessTokenExpiredError_1.isAccessTokenExpiredError({ error: error, error_description: error_description }) ||
        isAccessTokenInvalidError_1.isAccessTokenInvalidError({ error: error, error_description: error_description }) ||
        isAccessTokenRevokedError_1.isAccessTokenRevokedError({ error: error, error_description: error_description });
};
