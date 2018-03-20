"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const broadcaster = require("./broadcastOperations");
const createVote_1 = require("./createVote");
/**
 * Broadcasts an upvote to the Steem blockchain and returns the result of the operation.
 * @param {string} accessToken The access_token of the user.
 * @param {string} voter The username of the voter.
 * @param {string} author The username of the author of a comment/post that user wants to upvote.
 * @param {string} permlink The permlink of a comment/post that user wants to upvote.
 * @param {number} weight The weight of the vote (ex. 10000 is going to broadcast a 100% upvote).
 * @returns {Promise} Promise object that resolves into the result of the operation.
 */
function broadcastUpvote(accessToken, voter, author, permlink, weight) {
    const operation = createVote_1.createVote(voter, author, permlink, weight);
    return broadcaster.broadcastOperations(accessToken, [operation]);
}
exports.broadcastUpvote = broadcastUpvote;
