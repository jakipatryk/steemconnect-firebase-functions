import { OAuth2Error } from '../interfaces/OAuth2Error';
export declare const isAccessTokenInvalidError: ({ error, error_description }: OAuth2Error) => boolean;
