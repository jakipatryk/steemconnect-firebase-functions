import { OAuth2Error } from '../interfaces/OAuth2Error';
/**
 * Checks if OAuth2 error is caused by access token.
 * @param {object} oAuth2Error The object of OAuth2 error.
 */
export declare function isAccessTokenError(oAuth2Error: OAuth2Error): boolean;
