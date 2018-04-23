import { OAuth2Error } from '../interfaces/OAuth2Error';

export const checkOAuth2Error = (
  { error, error_description }: OAuth2Error,
  errorToCheckAgainst: OAuth2Error
): boolean =>
  error === errorToCheckAgainst.error &&
  error_description === errorToCheckAgainst.error_description;
