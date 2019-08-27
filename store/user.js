import { db, functions } from '@/fireinit.js';

export const state = () => ({
  displayName: null,
  email: null,
  id: null,
  loading: true,
  photoURL: null,
  role: null,
  signedIn: false
});

export const mutations = {
  setUser(state, user) {
    state.displayName = user.displayName || user.email.split('@')[0];
    state.email = user.email;
    state.id = user.uid;
    state.loading = false;
    state.photoURL = user.photoURL || null;
    state.signedIn = true;
  },
  setNoUser(state) {
    state.loading = false;
  },
  unsetUser(state) {
    state.displayName = null;
    state.email = null;
    state.id = null;
    state.photoURL = null;
    state.role = null;
    state.signedIn = false;
  }
};

export const actions = {
  authorize({ commit }, authResponse) {
    const user = authResponse.user;
    const isNew = authResponse.additionalUserInfo.isNewUser;

    commit('setUser', user);

    // Create new user record in firestore
    if (isNew) createNewDoc(user);
  }
};

function createNewDoc(user) {
  // Extra check to see if user already has a doc.
  const isUserUnique = functions.httpsCallable('isUserUnique');
  isUserUnique({
    id: user.uid
  }).then(results => {
    if (results.data.unique) {
      // Add to users collection in DB
      return db
        .collection('users')
        .doc(user.uid)
        .set({
          displayName: user.displayName,
          photoURL: user.photoURL,
          email: user.email
        });
    }
  });
}
