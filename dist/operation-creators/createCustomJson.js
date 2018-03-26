"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const createOperation_1 = require("./createOperation");
/**
 * Creates and returns custom_json operation.
 * @param {Object} config The configuration object for vote operation.
 * @param {Array} required_posting_auths Required posting auths array.
 * @param {string} config.id The id of the custom_json.
 * @param {string} config.json The custom JSON.
 * @param {Array} [config.required_auths] Optional required auths.
 * @returns {Array} A single comment operation in the form of an array.
 */
exports.createCustomJson = ({ required_posting_auths: [...postingAuths], id, json, required_auths: [...auths] = [] }) => createOperation_1.createOperation('custom_json', {
    required_posting_auths: [...postingAuths],
    id,
    json,
    required_auths: [...auths]
});
