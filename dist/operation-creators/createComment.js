"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Creates and returns the comment operation.
 * @param {string} parentPermlink The parent permlink for comments or main tag for posts.
 * @param {string} author The author of the comment/post.
 * @param {string} permlink The permlink of the comment/post.
 * @param {string} body The content of the comment/post.
 * @param {string} [parentAuthor] The parent author of the comment.
 * @param {string} [title] The title of the post.
 * @param {object} [jsonMetadata] The additional metadata of the comment/post.
 * @returns {Array} A single comment operation in the form of an array.
 */
function createComment(parentPermlink, author, permlink, body, parentAuthor, title, jsonMetadata) {
    jsonMetadata = jsonMetadata || undefined;
    const commentOperation = [
        'comment',
        {
            parent_author: parentAuthor || '',
            parent_permlink: parentPermlink,
            author,
            permlink,
            title: title || '',
            body,
            json_metadata: JSON.stringify(jsonMetadata) || ''
        }
    ];
    return commentOperation;
}
exports.createComment = createComment;
