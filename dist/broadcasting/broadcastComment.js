"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const broadcaster = require("./broadcastOperations");
const createComment_1 = require("../operation-creators/createComment");
/**
 * Broadcasts a comment to the Steem blockchain and returns the result of the operation.
 * @param {string} accessToken The access_token of the user.
 * @param {string} parentAuthor The username of the author of either a post or a parent comment that user wants to add a comment to.
 * @param {string} parentPermlink The permlink of either a post or a parent comment that user wants to add a comment to.
 * @param {string} commentAuthor The username of the user who wants to add a comment.
 * @param {string} commentPermlink The permlink of the comment.
 * @param {string} commentBody The content of the comment.
 * @param {Object} [jsonMetadata] Optional additional metadata (ex. the name of the app).
 * @returns {Promise} Promise object that resolves into the result of the operation.
 */
function broadcastComment(accessToken, parentAuthor, parentPermlink, commentAuthor, commentPermlink, commentBody, jsonMetadata) {
    const operation = createComment_1.createComment(parentPermlink, commentAuthor, commentPermlink, commentBody, parentAuthor, null, jsonMetadata);
    return broadcaster.broadcastOperations(accessToken, [operation]);
}
exports.broadcastComment = broadcastComment;
