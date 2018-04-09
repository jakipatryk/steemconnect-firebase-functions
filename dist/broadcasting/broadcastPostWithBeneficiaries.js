"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const createBroadcastable_1 = require("../shared/helpers/createBroadcastable");
exports.broadcastPostWithBeneficiaries = ({ mainTag, author, permlink, title, body, beneficiariesAccount, beneficiariesWeight, metadata }) => ({ access_token }) => createBroadcastable_1.createBroadcastableCommentWithOptions({
    parent_permlink: mainTag,
    author: author,
    permlink: permlink,
    body: body,
    parent_author: '',
    title: title,
    json_metadata: JSON.stringify(metadata),
    extensions: [
        [
            0,
            {
                beneficiaries: [
                    {
                        account: beneficiariesAccount,
                        weight: beneficiariesWeight
                    }
                ]
            }
        ]
    ]
})({ access_token });
