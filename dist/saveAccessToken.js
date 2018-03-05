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
 * Saves access token and its details in the Firestore.
 * @param admin The configurated firebase-admin object.
 * @param {string} uid The uid of the user.
 * @param {Object} accessToken The access token + its details object.
 * @returns {Promise} Promise object.
 */
function saveAccessToken(admin, uid, accessToken) {
    return __awaiter(this, void 0, void 0, function* () {
        const tokenDetails = Object.assign({}, accessToken);
        return admin
            .firestore()
            .doc(`steemconnectToken/${uid}`)
            .set(tokenDetails, { merge: true });
    });
}
exports.saveAccessToken = saveAccessToken;
