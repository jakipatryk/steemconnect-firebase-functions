"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const checkOAuth2Error_1 = require("./checkOAuth2Error");
const constants_1 = require("./constants");
exports.isAccessTokenInvalidError = ({ error, error_description }) => checkOAuth2Error_1.checkOAuth2Error({ error, error_description }, constants_1.ACCESS_TOKEN_INVALID);
