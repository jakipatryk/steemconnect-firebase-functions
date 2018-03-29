import { isAccessTokenRevokedError } from './isAccessTokenRevokedError';
import { isAccessTokenInvalidError } from './isAccessTokenInvalidError';
import { isAccessTokenExpiredError } from './isAccessTokenExpiredError';
import { OAuth2Error } from '../interfaces/OAuth2Error';

/**
 * Checks if OAuth2 error is caused by access token.
 * @param {object} oAuth2Error The object of OAuth2 error.
 */
export const isAccessTokenError = ({
  error,
  error_description
}: OAuth2Error): boolean =>
  isAccessTokenExpiredError({ error, error_description }) ||
  isAccessTokenInvalidError({ error, error_description }) ||
  isAccessTokenRevokedError({ error, error_description });
