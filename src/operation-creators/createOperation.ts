import { Operation } from '../shared/interfaces/Operation';

export const createOperation = (type: string, { ...parameters }): Operation => [
  type,
  { ...parameters }
];
