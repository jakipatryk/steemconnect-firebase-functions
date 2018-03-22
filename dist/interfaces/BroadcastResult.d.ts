import { Operations } from './Operation';
export interface BroadcastResult {
    result: Result;
}
export interface Result {
    id: string;
    block_num: number;
    trx_num: number;
    expired: boolean;
    ref_block_num: number;
    ref_block_prefix: number;
    expiration: string;
    operations: Operations;
    extensions: Array<any>;
    signatures: Array<string>;
}
