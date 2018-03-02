"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const broadcaster = require("./broadcastOperations");
const createOptions_1 = require("./createOptions");
function broadcastPostWithBeneficiaries(accessToken, mainTag, postAuthor, postPermlink, postTitle, postBody, beneficiariesAccount, beneficiariesWeight, jsonMetadata) {
    const postOperation = [
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
    const extensions = [
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
    ];
    const postOptionsOperation = createOptions_1.createOptions(postAuthor, postPermlink, extensions);
    return broadcaster.broadcastOperations(accessToken, [
        postOperation,
        postOptionsOperation
    ]);
}
exports.broadcastPostWithBeneficiaries = broadcastPostWithBeneficiaries;
