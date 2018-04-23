import { OAuth2Error } from '../interfaces/OAuth2Error';
export declare const checkOAuth2Error: ({ error, error_description }: OAuth2Error, errorToCheckAgainst: OAuth2Error) => boolean;
