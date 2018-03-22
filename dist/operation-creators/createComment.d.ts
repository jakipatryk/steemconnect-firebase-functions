import { Operation } from '../interfaces/Operation';
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
export declare function createComment(parentPermlink: string, author: string, permlink: string, body: string, parentAuthor?: string | null | undefined, title?: string | null | undefined, jsonMetadata?: object | null | undefined): Operation;