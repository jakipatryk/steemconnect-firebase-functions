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
const refreshAccessToken_1 = require("../oauth2/refreshAccessToken");
const isAccessTokenExpiredError_1 = require("./../shared/errors/isAccessTokenExpiredError");
exports.rely = ({ clientId, clientSecret }) => ({ access_token, refresh_token, username, expires_in }) => (broadcastable) => __awaiter(this, void 0, void 0, function* () {
    try {
        return yield broadcastable({ access_token, username });
    }
    catch (err) {
        if (isAccessTokenExpiredError_1.isAccessTokenExpiredError(err)) {
            const refreshedTokens = yield refreshAccessToken_1.refreshAccessToken({
                clientId,
                clientSecret,
                access_token,
                refresh_token,
                username,
                expires_in
            });
            const broadcastResult = yield broadcastable({
                access_token: refreshedTokens.access_token,
                username
            });
            return Object.assign({}, refreshedTokens, broadcastResult);
        }
        throw err;
    }
});
