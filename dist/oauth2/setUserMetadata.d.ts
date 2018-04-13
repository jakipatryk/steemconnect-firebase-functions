import { UserData } from '../shared/interfaces/UserData';
export declare function setUserMetadata({accessToken, metadata}: {
    accessToken: string;
    metadata: object;
}): Promise<UserData>;
