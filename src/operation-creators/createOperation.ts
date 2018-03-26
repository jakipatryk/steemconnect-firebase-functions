import { Operation } from '../interfaces/Operation';

/**
 * Creates and returns operation.
 * @param {string} type The type of the operation (ex. 'comment').
 * @param {Object} config The configuration object for the operation.
 * @returns A single operation in the for of array.
 */
export const createOperation = (type: string, { ...parameters }): Operation => [
  type,
  { ...parameters }
];
