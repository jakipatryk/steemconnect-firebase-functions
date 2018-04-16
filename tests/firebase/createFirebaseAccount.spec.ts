import { createFirebaseAccount } from '../../src/firebase/createFirebaseAccount';

import { expect } from 'chai';
import * as sinon from 'sinon';

describe('createFirebaseAccount', () => {
  it('should create Firebase auth account if doesnt already exist', async () => {
    const admin = {
      auth: function() {
        return this;
      },
      updateUser: () => {
        throw { code: 'auth/user-not-found' };
      },
      createUser: sinon.spy()
    };
    const uid = 'steemconnect:adammalysz';
    const username = 'adammalysz';
    const photoURL = 'https://photos.com/nicephoto.jpg';

    await createFirebaseAccount(admin, { uid, username, photoURL });

    expect(
      admin.createUser.calledWithMatch({ uid, displayName: username, photoURL })
    ).to.be.true;
  });

  it('should update Firebase auth account if already exists', async () => {
    const admin = {
      auth: function() {
        return this;
      },
      updateUser: sinon.spy()
    };
    const uid = 'steemconnect:adammalysz';
    const username = 'adammalysz';
    const photoURL = 'https://photos.com/nicephoto.jpg';
    const email = 'amalysz@skoki.pl';

    await createFirebaseAccount(admin, { uid, username, photoURL, email });

    expect(
      admin.updateUser.calledWithMatch(uid, {
        displayName: username,
        photoURL
      })
    ).to.be.true;
  });
});
