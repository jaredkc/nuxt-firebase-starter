import { db, functions } from '@/fireinit.js';

export const state = () => ({
  loading: true,
  signedIn: false,
  id: null,
  displayName: null,
  email: null,
  photoURL: null,
  role: null
});

export const mutations = {
  setUser(state, user) {
    state.loading = false;
    state.signedIn = true;
    state.id = user.uid;
    state.displayName = user.displayName || user.email.split('@')[0];
    state.email = user.email;
    state.photoURL = user.photoURL || null;
  },
  setNoUser(state) {
    state.loading = false;
  },
  unsetUser(state) {
    state.signedIn = false;
    state.id = null;
    state.displayName = null;
    state.email = null;
    state.photoURL = null;
    state.role = null;
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
