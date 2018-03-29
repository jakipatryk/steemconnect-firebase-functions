import { OAuth2Error } from '../interfaces/OAuth2Error';

/**
 * Checks if OAuth2 error is equal to provided error.
 * @param {Object} oAuth2Error The object of OAuth2 error.
 * @param {string} errorToCheck The error constant to check whether it is a provided OAuth2 error.
 * @param {string} errorToCheckDescription The error description constant to check whether it is a provided OAuth2 error.
 * @returns {boolean} Returns boolean determining whether provided OAuth2 error is the errorToCheck.
 */
export const checkError = (
  { error, error_description }: OAuth2Error,
  errorToCheck: string,
  errorToCheckDescription: string
): boolean =>
  error === errorToCheck && error_description === errorToCheckDescription;
