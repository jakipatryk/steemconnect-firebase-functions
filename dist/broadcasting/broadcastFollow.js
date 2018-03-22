"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const broadcaster = require("./broadcastOperations");
const createCustomJson_1 = require("../operation-creators/createCustomJson");
/**
 * Broadcasts a comment to the Steem blockchain and returns the result of the operation.
 * @param {string} accessToken The access_token of the user.
 * @param {string} username The username of the user who wants to follow somebody.
 * @param {string} userToFollow The username of the user to follow.
 * @returns {Promise} Promise object that resolves into the result of the operation.
 */
function broadcastFollow(accessToken, username, userToFollow) {
    const customJson = [
        'follow',
        {
            follower: username,
            following: userToFollow,
            what: ['blog']
        }
    ];
    const operation = createCustomJson_1.createCustomJson([username], 'follow', customJson);
    return broadcaster.broadcastOperations(accessToken, [operation]);
}
exports.broadcastFollow = broadcastFollow;
