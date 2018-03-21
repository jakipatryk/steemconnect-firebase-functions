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
 * Gets and returns the user data of the user.
 * @param {string} accessToken The access_token of the user.
 * @returns {Promise} Promise object that resolves into user data object.
 */
function getUserData(accessToken) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const options = {
                uri: 'https://steemconnect.com/api/me',
                headers: {
                    Authorization: accessToken
                },
                json: true
            };
            const userData = yield rp.get(options);
            return userData;
        }
        catch (e) {
            throw e.error;
        }
    });
}
exports.getUserData = getUserData;
