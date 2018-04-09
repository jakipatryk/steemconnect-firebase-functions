import { createBroadcastableCommentWithOptions } from '../shared/helpers/createBroadcastable';
import { PostWithBeneficiaries } from './interfaces/PostWithBeneficiaries';
import { AccessTokenResponse } from './../shared/interfaces/AccessTokenResponse';
import { BroadcastResult } from './interfaces/BroadcastResult';

export const broadcastPostWithBeneficiaries = ({
  mainTag,
  author,
  permlink,
  title,
  body,
  beneficiariesAccount,
  beneficiariesWeight,
  metadata
}: PostWithBeneficiaries) => ({
  access_token
}: AccessTokenResponse): BroadcastResult =>
  createBroadcastableCommentWithOptions({
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
