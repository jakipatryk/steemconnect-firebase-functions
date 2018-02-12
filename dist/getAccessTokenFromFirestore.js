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
function getAccessTokenFromFirestore(admin, uid) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const doc = yield admin
                .firestore()
                .doc(`steemconnectToken/${uid}`)
                .get();
            if (!doc.exists) {
                throw new Error('No such document!');
            }
            else {
                return doc.data();
            }
        }
        catch (err) {
            throw new Error(`Error getting token: ${err}`);
        }
    });
}
exports.getAccessTokenFromFirestore = getAccessTokenFromFirestore;
