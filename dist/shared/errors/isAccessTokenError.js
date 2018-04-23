"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const isAccessTokenRevokedError_1 = require("./isAccessTokenRevokedError");
const isAccessTokenInvalidError_1 = require("./isAccessTokenInvalidError");
const isAccessTokenExpiredError_1 = require("./isAccessTokenExpiredError");
exports.isAccessTokenError = ({ error, error_description }) => isAccessTokenExpiredError_1.isAccessTokenExpiredError({ error, error_description }) ||
    isAccessTokenInvalidError_1.isAccessTokenInvalidError({ error, error_description }) ||
    isAccessTokenRevokedError_1.isAccessTokenRevokedError({ error, error_description });
