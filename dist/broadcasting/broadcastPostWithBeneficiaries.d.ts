import { AccessTokenResponse } from './../shared/interfaces/AccessTokenResponse';
import { BroadcastResult } from './interfaces/BroadcastResult';
import { PostWithBeneficiaries } from './interfaces/PostWithBeneficiaries';
export declare const broadcastPostWithBeneficiaries: ({ mainTag, author, permlink, title, body, beneficiariesAccount, beneficiariesWeight, metadata }: PostWithBeneficiaries) => ({ access_token }: AccessTokenResponse) => Promise<BroadcastResult>;
