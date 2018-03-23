import { OAuth2Error } from '../interfaces/OAuth2Error';
import {
  ACCESS_TOKEN_EXPIRED,
  ACCESS_TOKEN_EXPIRED_DESCRIPTION
} from '../errors/ACCESS_TOKEN_EXPIRED';
import {
  ACCESS_TOKEN_INVALID,
  ACCESS_TOKEN_INVALID_DESCRIPTION
} from '../errors/ACCESS_TOKEN_INVALID';
import {
  ACCESS_TOKEN_REVOKED,
  ACCESS_TOKEN_REVOKED_DESCRIPTION
} from '../errors/ACCESS_TOKEN_REVOKED';

/**
 * Checks if OAuth2 error is caused by access token.
 * @param {object} oAuth2Error The object of OAuth2 error.
 */
export function isAccessTokenError(oAuth2Error: OAuth2Error): boolean {
  if (
    (oAuth2Error.error === ACCESS_TOKEN_EXPIRED &&
      oAuth2Error.error_description === ACCESS_TOKEN_EXPIRED_DESCRIPTION) ||
    (oAuth2Error.error === ACCESS_TOKEN_INVALID &&
      oAuth2Error.error_description === ACCESS_TOKEN_INVALID_DESCRIPTION) ||
    (oAuth2Error.error === ACCESS_TOKEN_REVOKED &&
      oAuth2Error.error_description === ACCESS_TOKEN_REVOKED_DESCRIPTION)
  ) {
    return true;
  }

  return false;
}
