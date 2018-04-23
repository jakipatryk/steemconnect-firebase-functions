import { OAuth2Error } from '../interfaces/OAuth2Error';
export declare const isRefreshTokenError: ({ error, error_description }: OAuth2Error) => boolean;
