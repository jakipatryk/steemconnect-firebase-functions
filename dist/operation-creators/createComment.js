"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const createOperation_1 = require("./createOperation");
/**
 * Creates and returns the comment operation.
 * @param {Object} config The configuration object for vote operation.
 * @param {string} config.parent_permlink The parent permlink for comments or main tag for posts.
 * @param {string} config.author The author of the comment/post.
 * @param {string} config.permlink The permlink of the comment/post.
 * @param {string} config.body The content of the comment/post.
 * @param {string} [config.parent_author] The parent author of the comment.
 * @param {string} [config.title] The title of the post.
 * @param {string} [config.json_metadata] The additional metadata of the comment/post.
 * @returns {Array} A single comment operation in the form of an array.
 */
exports.createComment = ({ parent_permlink, author, permlink, body, parent_author = '', title = '', json_metadata = '' }) => createOperation_1.createOperation('comment', {
    parent_permlink,
    author,
    permlink,
    body,
    parent_author,
    title,
    json_metadata
});
