import * as broadcaster from './broadcastOperations';
import { createOptions } from './createOptions';
import { Operation } from './interfaces/Operation';

export function broadcastPostWithBeneficiaries(
  accessToken: string,
  mainTag: string,
  postAuthor: string,
  postPermlink: string,
  postTitle: string,
  postBody: string,
  beneficiariesAccount: string,
  beneficiariesWeight: number,
  jsonMetadata?: object
): Promise<any> {
  const postOperation: Operation = [
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
  const postOptionsOperation: Operation = createOptions(
    postAuthor,
    postPermlink,
    extensions
  );

  return broadcaster.broadcastOperations(accessToken, [
    postOperation,
    postOptionsOperation
  ]);
}
