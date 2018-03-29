"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const checkError_1 = require("./checkError");
const ACCESS_TOKEN_REVOKED_1 = require("../errors/ACCESS_TOKEN_REVOKED");
/**
 * Checks if OAuth2 error is caused by expired access token.
 * @param {object} oAuth2Error The object of OAuth2 error.
 */
exports.isAccessTokenRevokedError = ({ error, error_description }) => checkError_1.checkError({ error, error_description }, ACCESS_TOKEN_REVOKED_1.ACCESS_TOKEN_REVOKED, ACCESS_TOKEN_REVOKED_1.ACCESS_TOKEN_REVOKED_DESCRIPTION);
