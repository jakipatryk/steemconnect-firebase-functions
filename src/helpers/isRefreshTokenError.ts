import { checkError } from './checkError';
import { OAuth2Error } from '../interfaces/OAuth2Error';
import { REFRESH_TOKEN_INVALID } from '../errors/REFRESH_TOKEN_INVALID';

/**
 * Checks if OAuth2 error is caused by expired access token.
 * @param {Object} oAuth2Error The object of OAuth2 error.
 */
export const isRefreshTokenError = ({
  error,
  error_description
}: OAuth2Error): boolean =>
  checkError({ error, error_description }, REFRESH_TOKEN_INVALID);