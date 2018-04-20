"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const createBroadcastable_1 = require("../shared/helpers/createBroadcastable");
exports.broadcastReblog = ({ postAuthor, postPermlink }) => ({ access_token, username }) => createBroadcastable_1.createBroadcastableCustomJson({
    required_posting_auths: [username],
    id: 'follow',
    json: JSON.stringify([
        'reblog',
        {
            account: username,
            author: postAuthor,
            permlink: postPermlink
        }
    ])
})({ access_token });
