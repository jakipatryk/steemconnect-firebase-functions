import { checkError } from './checkError';
import { OAuth2Error } from '../interfaces/OAuth2Error';
import { CODE_INVALID } from '../errors/CODE_INVALID';

/**
 * Checks if OAuth2 error is caused by expired access token.
 * @param {Object} oAuth2Error The object of OAuth2 error.
 */
export const isCodeError = ({
  error,
  error_description
}: OAuth2Error): boolean =>
  checkError({ error, error_description }, CODE_INVALID);
