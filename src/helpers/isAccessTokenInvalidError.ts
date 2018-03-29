import { checkError } from './checkError';
import { OAuth2Error } from '../interfaces/OAuth2Error';
import { ACCESS_TOKEN_INVALID } from '../errors/ACCESS_TOKEN_INVALID';

/**
 * Checks if OAuth2 error is caused by expired access token.
 * @param {Object} oAuth2Error The object of OAuth2 error.
 */
export const isAccessTokenInvalidError = ({
  error,
  error_description
}: OAuth2Error): boolean =>
  checkError({ error, error_description }, ACCESS_TOKEN_INVALID);
