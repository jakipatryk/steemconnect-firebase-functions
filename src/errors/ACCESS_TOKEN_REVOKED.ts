import { OAuth2Error } from './../interfaces/OAuth2Error';

export const ACCESS_TOKEN_REVOKED: OAuth2Error = Object.freeze({
  error: 'invalid_grant',
  error_description: 'The access_token has been revoked'
});
