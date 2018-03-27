import { createOperation } from './createOperation';
import { CustomJsonConfig } from './../interfaces/CustomJsonConfig';
import { Operation } from '../interfaces/Operation';

/**
 * Creates and returns custom_json operation.
 * @param {Object} config The configuration object for custom_json operation.
 * @param {Array} config.required_posting_auths Required posting auths array.
 * @param {string} config.id The id of the custom_json.
 * @param {string} config.json The custom JSON.
 * @param {Array} [config.required_auths] Optional required auths.
 * @returns {Array} A single comment operation in the form of an array.
 */
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
