"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Checks if OAuth2 error is equal to provided error.
 * @param {Object} oAuth2Error The object of OAuth2 error.
 * @param {Object} errorToCheckAgainst The error constant to check whether it is a provided OAuth2 error.
 * @returns {boolean} Returns boolean determining whether provided OAuth2 error is the errorToCheck.
 */
exports.checkOAuth2Error = function (_a, errorToCheckAgainst) {
    var error = _a.error, error_description = _a.error_description;
    return error === errorToCheckAgainst.error &&
        error_description === errorToCheckAgainst.error_description;
};
