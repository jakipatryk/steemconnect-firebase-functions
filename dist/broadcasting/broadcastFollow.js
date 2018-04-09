"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const createBroadcastable_1 = require("../shared/helpers/createBroadcastable");
exports.broadcastFollow = ({ username, userToFollow }) => ({ access_token }) => createBroadcastable_1.createBroadcastableCustomJson({
    required_posting_auths: [username],
    id: 'follow',
    json: JSON.stringify([
        'follow',
        {
            follower: username,
            following: userToFollow,
            what: ['blog']
        }
    ])
})({ access_token });
