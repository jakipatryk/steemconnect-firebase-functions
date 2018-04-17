import { CustomJsonConfig } from './../shared/interfaces/CustomJsonConfig';
import { Operation } from '../shared/interfaces/Operation';
export declare const createCustomJson: ({ required_posting_auths: [...postingAuths], id, json, required_auths: [...auths] }: CustomJsonConfig) => Operation;
