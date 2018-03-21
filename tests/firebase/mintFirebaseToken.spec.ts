import { mintFirebaseToken } from '../../src/firebase/mintFirebaseToken';

import { expect } from 'chai';

describe('mintFirebaseToken', () => {
  it('should mint and return a Firebase token', async () => {
    const Admin = function() {
      this.auth = () => this;
      this.createCustomToken = async uid => 'fdsfer3432.fsdgre3.trefds';
    };
    const admin = new Admin();
    const uid = 'steemconnect:adammalysz';

    const result = await mintFirebaseToken(admin, uid);

    expect(result).to.equal('fdsfer3432.fsdgre3.trefds');
  });
});
