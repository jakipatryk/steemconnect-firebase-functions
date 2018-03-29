"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const checkOAuth2Error_1 = require("./checkOAuth2Error");
const REFRESH_TOKEN_INVALID_1 = require("../errors/REFRESH_TOKEN_INVALID");
/**
 * Checks if OAuth2 error is caused by expired access token.
 * @param {Object} oAuth2Error The object of OAuth2 error.
 */
exports.isRefreshTokenError = ({ error, error_description }) => checkOAuth2Error_1.checkOAuth2Error({ error, error_description }, REFRESH_TOKEN_INVALID_1.REFRESH_TOKEN_INVALID);
