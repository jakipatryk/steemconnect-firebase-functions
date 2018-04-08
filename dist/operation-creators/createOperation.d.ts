import { Operation } from '../shared/interfaces/Operation';
/**
 * Creates and returns operation.
 * @param {string} type The type of the operation (ex. 'comment').
 * @param {Object} config The configuration object for the operation.
 * @returns A single operation in the form of an array.
 */
export declare const createOperation: (type: string, { ...parameters }: {
    [x: string]: any;
}) => Operation;
