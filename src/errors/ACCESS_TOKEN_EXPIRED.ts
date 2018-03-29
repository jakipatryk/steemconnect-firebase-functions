import { OAuth2Error } from './../interfaces/OAuth2Error';

export const ACCESS_TOKEN_EXPIRED: OAuth2Error = Object.freeze({
  error: 'invalid_grant',
  error_description: 'The token has invalid role'
});
