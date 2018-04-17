import { createOperation } from './createOperation';
import { CustomJsonConfig } from './../shared/interfaces/CustomJsonConfig';
import { Operation } from '../shared/interfaces/Operation';

export const createCustomJson = ({
  required_posting_auths: [...postingAuths],
  id,
  json,
  required_auths: [...auths] = []
}: CustomJsonConfig): Operation =>
  createOperation('custom_json', {
    required_posting_auths: [...postingAuths],
    id,
    json,
    required_auths: [...auths]
  });
