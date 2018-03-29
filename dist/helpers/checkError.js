"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Checks if OAuth2 error is equal to provided error.
 * @param {Object} oAuth2Error The object of OAuth2 error.
 * @param {string} errorToCheck The error constant to check whether it is a provided OAuth2 error.
 * @param {string} errorToCheckDescription The error description constant to check whether it is a provided OAuth2 error.
 * @returns {boolean} Returns boolean determining whether provided OAuth2 error is the errorToCheck.
 */
exports.checkError = ({ error, error_description }, errorToCheck, errorToCheckDescription) => error === errorToCheck && error_description === errorToCheckDescription;
