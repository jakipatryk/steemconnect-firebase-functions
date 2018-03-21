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
const rp = require("request-promise");
/**
 * Sets user metadata and returns the user data of this user.
 * @param {string} accessToken The access_token of the user.
 * @param {object} metadata The metadata to set.
 * @returns {Promise} Promise object that resolves into user data object.
 */
function setUserMetadata(accessToken, metadata) {
    return __awaiter(this, void 0, void 0, function* () {
        const metadataClone = Object.assign({}, metadata);
        const userMetadata = {
            user_metadata: metadataClone
        };
        const options = {
            uri: 'https://steemconnect.com/api/me',
            headers: {
                Authorization: accessToken
            },
            body: userMetadata,
            json: true
        };
        try {
            const userData = yield rp.put(options);
            return userData;
        }
        catch (e) {
            throw e.error;
        }
    });
}
exports.setUserMetadata = setUserMetadata;
