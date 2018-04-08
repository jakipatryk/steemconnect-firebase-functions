"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const createBroadcastable_1 = require("../shared/helpers/createBroadcastable");
exports.broadcastUnfollow = ({ username, userToUnfollow }) => ({ access_token }) => createBroadcastable_1.createBroadcastableCustomJson({
    required_posting_auths: [username],
    id: 'follow',
    json: JSON.stringify([
        'follow',
        {
            follower: username,
            following: userToUnfollow,
            what: []
        }
    ])
})({ access_token });
