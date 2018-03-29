"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const checkError_1 = require("./checkError");
const ACCESS_TOKEN_INVALID_1 = require("../errors/ACCESS_TOKEN_INVALID");
/**
 * Checks if OAuth2 error is caused by expired access token.
 * @param {Object} oAuth2Error The object of OAuth2 error.
 */
exports.isAccessTokenInvalidError = ({ error, error_description }) => checkError_1.checkError({ error, error_description }, ACCESS_TOKEN_INVALID_1.ACCESS_TOKEN_INVALID);
