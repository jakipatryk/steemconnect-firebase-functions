import { OAuth2Error } from '../interfaces/OAuth2Error';

export const CODE_INVALID: OAuth2Error = Object.freeze({
  error: 'invalid_grant',
  error_description: 'The token has invalid role'
});
