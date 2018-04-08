import { checkOAuth2Error } from './checkOAuth2Error';
import { OAuth2Error } from '../interfaces/OAuth2Error';
import { ACCESS_TOKEN_REVOKED } from './constants';

/**
 * Checks if OAuth2 error is caused by expired access token.
 * @param {Object} oAuth2Error The object of OAuth2 error.
 */
export const isAccessTokenRevokedError = ({
  error,
  error_description
}: OAuth2Error): boolean =>
  checkOAuth2Error({ error, error_description }, ACCESS_TOKEN_REVOKED);