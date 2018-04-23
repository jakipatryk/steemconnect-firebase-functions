import { UserData } from '../shared/interfaces/UserData';
import { AccessTokenResponse } from './../shared/interfaces/AccessTokenResponse';
export declare function getUserData(access_token: AccessTokenResponse): Promise<UserData>;
