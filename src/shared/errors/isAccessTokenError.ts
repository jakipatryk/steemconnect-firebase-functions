import { isAccessTokenRevokedError } from './isAccessTokenRevokedError';
import { isAccessTokenInvalidError } from './isAccessTokenInvalidError';
import { isAccessTokenExpiredError } from './isAccessTokenExpiredError';
import { OAuth2Error } from '../interfaces/OAuth2Error';

export const isAccessTokenError = ({
  error,
  error_description
}: OAuth2Error): boolean =>
  isAccessTokenExpiredError({ error, error_description }) ||
  isAccessTokenInvalidError({ error, error_description }) ||
  isAccessTokenRevokedError({ error, error_description });
