import { AccessTokenResponse } from './../shared/interfaces/AccessTokenResponse';
import { BroadcastResult } from './interfaces/BroadcastResult';
import { PostWithBeneficiaries } from './interfaces/PostWithBeneficiaries';
export declare const broadcastPostWithBeneficiaries: ({ mainTag, permlink, title, body, beneficiariesAccount, beneficiariesWeight, metadata }: PostWithBeneficiaries) => ({ access_token, username }: AccessTokenResponse) => Promise<BroadcastResult>;
