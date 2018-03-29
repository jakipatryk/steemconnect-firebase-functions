import { OAuth2Error } from '../interfaces/OAuth2Error';
/**
 * Checks if OAuth2 error is caused by expired access token.
 * @param {object} oAuth2Error The object of OAuth2 error.
 */
export declare const isAccessTokenExpiredError: ({ error, error_description }: OAuth2Error) => boolean;
