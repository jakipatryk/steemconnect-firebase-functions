"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Creates and returns the vote operation.
 * @param {string} voter The username of the voter.
 * @param {string} author The username of the author of a comment/post that you want to create a vote operation on.
 * @param {string} permlink The permlink of a comment/post that you want to create a vote operation on.
 * @param {number} weight The weight of the vote (ex. 10000 is going to create a 100% upvote operation and -1000 is going to create a 10% downvote operation).
 * @returns {Array} A single vote operation in the form of an array.
 */
function createVote(voter, author, permlink, weight) {
    const voteOperation = [
        'vote',
        {
            voter,
            author,
            permlink,
            weight
        }
    ];
    return voteOperation;
}
exports.createVote = createVote;
