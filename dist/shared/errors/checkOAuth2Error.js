"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkOAuth2Error = ({ error, error_description }, errorToCheckAgainst) => error === errorToCheckAgainst.error &&
    error_description === errorToCheckAgainst.error_description;
