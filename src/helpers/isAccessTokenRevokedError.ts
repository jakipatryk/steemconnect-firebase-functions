import { checkError } from './checkError';
import { OAuth2Error } from '../interfaces/OAuth2Error';
import {
  ACCESS_TOKEN_REVOKED,
  ACCESS_TOKEN_REVOKED_DESCRIPTION
} from '../errors/ACCESS_TOKEN_REVOKED';

/**
 * Checks if OAuth2 error is caused by expired access token.
 * @param {object} oAuth2Error The object of OAuth2 error.
 */
export const isAccessTokenRevokedError = ({
  error,
  error_description
}: OAuth2Error): boolean =>
  checkError(
    { error, error_description },
    ACCESS_TOKEN_REVOKED,
    ACCESS_TOKEN_REVOKED_DESCRIPTION
  );
