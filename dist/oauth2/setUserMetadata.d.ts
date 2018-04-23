import { UserData } from '../shared/interfaces/UserData';
import { AccessTokenResponse } from './../shared/interfaces/AccessTokenResponse';
export declare function setUserMetadata({access_token, metadata}: AccessTokenResponse & {
    metadata: object;
}): Promise<UserData>;
