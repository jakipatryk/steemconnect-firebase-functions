"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const broadcaster = require("./broadcastOperations");
const createCustomJson_1 = require("../operation-creators/createCustomJson");
/**
 * Broadcasts a comment to the Steem blockchain and returns the result of the operation.
 * @param {string} accessToken The access_token of the user.
 * @param {string} username The username of the user who wants to reblog something.
 * @param {string} postAuthor The username of the author of the post to reblog.
 * @param {string} postPermlink The permlink of the post to reblog.
 * @returns {Promise} Promise object that resolves into the result of the operation.
 */
function broadcastReblog(accessToken, username, postAuthor, postPermlink) {
    const customJson = JSON.stringify([
        'reblog',
        {
            account: username,
            author: postAuthor,
            permlink: postPermlink
        }
    ]);
    const operation = createCustomJson_1.createCustomJson({
        required_posting_auths: [username],
        id: 'follow',
        json: customJson
    });
    return broadcaster.broadcastOperations(accessToken, [operation]);
}
exports.broadcastReblog = broadcastReblog;
