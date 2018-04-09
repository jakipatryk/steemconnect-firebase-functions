"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @constant
 * @type {Object}
 * @default
 */
exports.ACCESS_TOKEN_EXPIRED = Object.freeze({
    error: 'invalid_grant',
    error_description: 'The token has invalid role'
});
/**
 * @constant
 * @type {Object}
 * @default
 */
exports.ACCESS_TOKEN_INVALID = Object.freeze({
    error: 'invalid_grant',
    error_description: 'The token has invalid role'
});
/**
 * @constant
 * @type {Object}
 * @default
 */
exports.ACCESS_TOKEN_REVOKED = Object.freeze({
    error: 'invalid_grant',
    error_description: 'The access_token has been revoked'
});
/**
 * @constant
 * @type {Object}
 * @default
 */
exports.CODE_INVALID = Object.freeze({
    error: 'invalid_grant',
    error_description: 'The token has invalid role'
});
/**
 * @constant
 * @type {Object}
 * @default
 */
exports.REFRESH_TOKEN_INVALID = Object.freeze({
    error: 'invalid_grant',
    error_description: 'The token has invalid role'
});
