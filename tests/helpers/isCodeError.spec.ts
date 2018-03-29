import { isCodeError } from '../../src/helpers/isCodeError';
import { OAuth2Error } from './../../src/interfaces/OAuth2Error';
import { CODE_INVALID } from './../../src/errors/CODE_INVALID';

import { expect } from 'chai';

describe('isCodeError', () => {
  it('should return true if provided OAuth2 error is the error of invalid code', () => {
    const oAuth2Error: OAuth2Error = CODE_INVALID;

    expect(isCodeError(oAuth2Error)).to.be.true;
  });

  it('should return false if provided OAuth2 error is NOT the error caused by wrong code', () => {
    const oAuth2Error: OAuth2Error = {
      error: 'not_code_error',
      error_description: 'not code error lol'
    };

    expect(isCodeError(oAuth2Error)).to.be.false;
  });
});
