"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const broadcaster = require("./broadcastOperations");
/**
 * Broadcasts a post to the Steem blockchain and returns the result of the operation.
 * @param {string} accessToken The access_token of the user.
 * @param {string} mainTag The main tag of the post (not possible to change it later).
 * @param {string} postAuthor The username of the user who wants to add a post.
 * @param {string} postPermlink The permlink of the post.
 * @param {string} postTitle The title of the post.
 * @param {string} postBody The content of the post.
 * @param {Object} [jsonMetadata] Optional additional metadata (ex. the name of the app or additional tags).
 * @returns {Promise} Promise object that resolves into the result of the operation.
 */
function broadcastPost(accessToken, mainTag, postAuthor, postPermlink, postTitle, postBody, jsonMetadata) {
    const operation = [
        'comment',
        {
            parent_author: '',
            parent_permlink: mainTag,
            author: postAuthor,
            permlink: postPermlink,
            title: postTitle,
            body: postBody,
            json_metadata: JSON.stringify(jsonMetadata) || ''
        }
    ];
    return broadcaster.broadcastOperations(accessToken, [operation]);
}
exports.broadcastPost = broadcastPost;
