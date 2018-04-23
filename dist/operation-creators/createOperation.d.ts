import { Operation } from '../shared/interfaces/Operation';
export declare const createOperation: (type: string, { ...parameters }: {
    [x: string]: any;
}) => Operation;
