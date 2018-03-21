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
 * Broadcasts operations to the Steem blockchain.
 * @param {string} accessToken The access_token of the user.
 * @param {Array} operations An array of operations to broadcast.
 * @returns {Promise} Promise object that resolves into the result of the operations.
 */
function broadcastOperations(accessToken, operations) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const options = {
                uri: 'https://steemconnect.com/api/broadcast',
                headers: {
                    Authorization: accessToken,
                    'Content-Type': 'application/json',
                    Accept: 'application/json'
                },
                body: {
                    operations: operations
                },
                json: true
            };
            const result = yield rp.post(options);
            return result;
        }
        catch (e) {
            throw e.error;
        }
    });
}
exports.broadcastOperations = broadcastOperations;
