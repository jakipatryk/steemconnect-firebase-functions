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
function broadcastOperations([...operations]) {
    return function broadcast({ access_token }) {
        return __awaiter(this, void 0, void 0, function* () {
            return rp
                .post({
                uri: 'https://steemconnect.com/api/broadcast',
                headers: {
                    Authorization: access_token,
                    'Content-Type': 'application/json',
                    Accept: 'application/json'
                },
                body: {
                    operations: [...operations]
                },
                json: true
            })
                .catch(err => {
                throw err.error;
            });
        });
    };
}
exports.broadcastOperations = broadcastOperations;
