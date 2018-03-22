"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Creates and returns custom_json operation.
 * @param {Array} requiredPostingAuths Required posting auths array.
 * @param {string} id The id of the custom_json.
 * @param {Array} customJson The custom JSON.
 * @param {Array} [requiredAuths] Optional required auths.
 * @returns {Array} A single comment operation in the form of an array.
 */
function createCustomJson(requiredPostingAuths, id, customJson, requiredAuths) {
    const customJsonOperation = [
        'custom_json',
        {
            required_auths: requiredAuths || [],
            required_posting_auths: requiredPostingAuths,
            id,
            json: JSON.stringify(customJson)
        }
    ];
    return customJsonOperation;
}
exports.createCustomJson = createCustomJson;
