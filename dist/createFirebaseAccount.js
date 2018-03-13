"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Creates or updates Firebase auth user account.
 * @param admin The configurated admin object.
 * @param {string} uid The uid of the user.
 * @param {string} username The username of the user.
 * @param {string} [photoURL] Optional user's photo URL.
 * @param {string} [email] Optional user's email.
 * @param {boolean} [emailVerified] Optional boolean whether or not the user's email is verified.
 * @param {string} [phoneNumber] Optional user's phone number.
 * @param {boolean} [disabled] Optional boolean whether or not the user is disabled.
 * @returns {Promise} Promise object.
 */
function createFirebaseAccount(admin, uid, username, photoURL, email, emailVerified, phoneNumber, disabled) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            return yield admin.auth().updateUser(uid, {
                displayName: username,
                photoURL,
                email,
                emailVerified,
                phoneNumber,
                disabled
            });
        }
        catch (error) {
            if (error.code === 'auth/user-not-found') {
                return yield admin.auth().createUser({
                    uid: uid,
                    displayName: username,
                    photoURL,
                    email,
                    emailVerified,
                    phoneNumber,
                    disabled
                });
            }
            throw error;
        }
    });
}
exports.createFirebaseAccount = createFirebaseAccount;
