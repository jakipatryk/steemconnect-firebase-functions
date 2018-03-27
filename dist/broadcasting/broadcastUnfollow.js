"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const broadcaster = require("./broadcastOperations");
const createCustomJson_1 = require("../operation-creators/createCustomJson");
/**
 * Broadcasts a comment to the Steem blockchain and returns the result of the operation.
 * @param {string} accessToken The access_token of the user.
 * @param {string} username The username of the user who wants to unfollow somebody.
 * @param {string} userToUnfollow The username of the user to unfollow.
 * @returns {Promise} Promise object that resolves into the result of the operation.
 */
function broadcastUnfollow(accessToken, username, userToUnfollow) {
    const customJson = JSON.stringify([
        'follow',
        {
            follower: username,
            following: userToUnfollow,
            what: []
        }
    ]);
    const operation = createCustomJson_1.createCustomJson({
        required_posting_auths: [username],
        id: 'follow',
        json: customJson
    });
    return broadcaster.broadcastOperations(accessToken, [operation]);
}
exports.broadcastUnfollow = broadcastUnfollow;
