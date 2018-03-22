import { Operation } from '../interfaces/Operation';

/**
 * Creates and returns custom_json operation.
 * @param {Array} requiredPostingAuths Required posting auths array.
 * @param {string} id The id of the custom_json.
 * @param {Array} customJson The custom JSON.
 * @param {Array} [requiredAuths] Optional required auths.
 * @returns {Array} A single comment operation in the form of an array.
 */
export function createCustomJson(
  requiredPostingAuths: Array<string>,
  id: string,
  customJson: Array<string | object>,
  requiredAuths?: Array<string> | null | undefined
): Operation {
  const customJsonOperation: Operation = [
    'custom_json',
    {
      required_auths: requiredAuths || [],
      required_posting_auths: requiredPostingAuths,
      id,
      json: JSON.stringify(customJson)
    }
  ];

  return customJsonOperation;
}