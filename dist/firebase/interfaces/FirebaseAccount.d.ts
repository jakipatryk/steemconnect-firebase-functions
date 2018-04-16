export interface FirebaseAccount {
    uid: string;
    username: string;
    photoURL?: string;
    email?: string;
    emailVerified?: boolean;
    phoneNumber?: string;
    disabled?: boolean;
}
