import { createBroadcastableCommentWithOptions } from '../shared/helpers/createBroadcastable';
import { AccessTokenResponse } from './../shared/interfaces/AccessTokenResponse';
import { BroadcastResult } from './interfaces/BroadcastResult';
import { PostWithBeneficiaries } from './interfaces/PostWithBeneficiaries';

export const broadcastPostWithBeneficiaries = ({
  mainTag,

  permlink,
  title,
  body,
  beneficiariesAccount,
  beneficiariesWeight,
  metadata
}: PostWithBeneficiaries) => ({
  access_token,
  username
}: AccessTokenResponse): Promise<BroadcastResult> =>
  createBroadcastableCommentWithOptions({
    parent_permlink: mainTag,
    author: username,
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
