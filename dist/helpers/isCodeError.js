"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const checkError_1 = require("./checkError");
const CODE_INVALID_1 = require("../errors/CODE_INVALID");
/**
 * Checks if OAuth2 error is caused by expired access token.
 * @param {Object} oAuth2Error The object of OAuth2 error.
 */
exports.isCodeError = ({ error, error_description }) => checkError_1.checkError({ error, error_description }, CODE_INVALID_1.CODE_INVALID);
