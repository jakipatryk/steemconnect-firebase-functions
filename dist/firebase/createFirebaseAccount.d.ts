import { FirebaseAccount } from './interfaces/FirebaseAccount';
export declare function createFirebaseAccount(admin: any, {uid, username, photoURL, email, emailVerified, phoneNumber, disabled}: FirebaseAccount): Promise<any>;
