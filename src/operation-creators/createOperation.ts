import { Operation } from '../interfaces/Operation';

export const createOperation = (type: string, { ...parameters }): Operation => [
  type,
  { ...parameters }
];
