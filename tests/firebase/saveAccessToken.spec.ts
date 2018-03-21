import { saveAccessToken } from '../../src/firebase/saveAccessToken';

import { expect } from 'chai';
import * as sinon from 'sinon';

describe('saveAccessToken', () => {
  it('should save access token in the Firestore', async () => {
    const Admin = function() {
      this.firestore = () => this;
      this.doc = path => this;
      this.set = sinon.spy();
    };
    const admin = new Admin();
    const uid = 'steemconnect:spaghetti';
    const accessToken = {
      access_token: 'ey.eyJy4MDI5NjU3fQ.lqX2bTkW7R',
      expires_in: 604800,
      username: 'spaghetti'
    };

    await saveAccessToken(admin, uid, accessToken);
    expect(admin.set.called).to.be.true;
    expect(
      admin.set.calledWith({
        access_token: 'ey.eyJy4MDI5NjU3fQ.lqX2bTkW7R',
        expires_in: 604800,
        username: 'spaghetti'
      })
    ).to.be.true;
  });
});
