"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const checkOAuth2Error_1 = require("./checkOAuth2Error");
const ACCESS_TOKEN_EXPIRED_1 = require("../errors/ACCESS_TOKEN_EXPIRED");
/**
 * Checks if OAuth2 error is caused by expired access token.
 * @param {Object} oAuth2Error The object of OAuth2 error.
 */
exports.isAccessTokenExpiredError = ({ error, error_description }) => checkOAuth2Error_1.checkOAuth2Error({ error, error_description }, ACCESS_TOKEN_EXPIRED_1.ACCESS_TOKEN_EXPIRED);
