"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const createOperation_1 = require("./createOperation");
exports.createCustomJson = ({ required_posting_auths: [...postingAuths], id, json, required_auths: [...auths] = [] }) => createOperation_1.createOperation('custom_json', {
    required_posting_auths: [...postingAuths],
    id,
    json,
    required_auths: [...auths]
});
