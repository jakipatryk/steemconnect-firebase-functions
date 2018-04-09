import { PostWithBeneficiaries } from './interfaces/PostWithBeneficiaries';
import { AccessTokenResponse } from './../shared/interfaces/AccessTokenResponse';
import { BroadcastResult } from './interfaces/BroadcastResult';
export declare const broadcastPostWithBeneficiaries: ({ mainTag, author, permlink, title, body, beneficiariesAccount, beneficiariesWeight, metadata }: PostWithBeneficiaries) => ({ access_token }: AccessTokenResponse) => BroadcastResult;
