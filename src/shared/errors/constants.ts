import { OAuth2Error } from './../interfaces/OAuth2Error';

export const ACCESS_TOKEN_EXPIRED: OAuth2Error = Object.freeze({
  error: 'invalid_grant',
  error_description: 'The token has invalid role'
});

export const ACCESS_TOKEN_INVALID: OAuth2Error = Object.freeze({
  error: 'invalid_grant',
  error_description: 'The token has invalid role'
});

export const ACCESS_TOKEN_REVOKED: OAuth2Error = Object.freeze({
  error: 'invalid_grant',
  error_description: 'The access_token has been revoked'
});

export const CODE_INVALID: OAuth2Error = Object.freeze({
  error: 'invalid_grant',
  error_description: 'The token has invalid role'
});

export const REFRESH_TOKEN_INVALID: OAuth2Error = Object.freeze({
  error: 'invalid_grant',
  error_description: 'The token has invalid role'
});
