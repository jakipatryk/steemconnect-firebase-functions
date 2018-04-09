import { OAuth2Error } from '../interfaces/OAuth2Error';
/**
 * Checks if OAuth2 error is equal to provided error.
 * @param {Object} oAuth2Error The object of OAuth2 error.
 * @param {Object} errorToCheckAgainst The error constant to check whether it is a provided OAuth2 error.
 * @returns {boolean} Returns boolean determining whether provided OAuth2 error is the errorToCheck.
 */
export declare const checkOAuth2Error: ({ error, error_description }: OAuth2Error, errorToCheckAgainst: OAuth2Error) => boolean;