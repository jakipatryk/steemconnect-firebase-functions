import { checkOAuth2Error } from './checkOAuth2Error';
import { OAuth2Error } from '../interfaces/OAuth2Error';
import { ACCESS_TOKEN_INVALID } from './constants';

export const isAccessTokenInvalidError = ({
  error,
  error_description
}: OAuth2Error): boolean =>
  checkOAuth2Error({ error, error_description }, ACCESS_TOKEN_INVALID);
