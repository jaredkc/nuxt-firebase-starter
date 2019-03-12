import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

admin.initializeApp();

const db = admin.firestore();

export const isUserUnique = functions.https.onCall((data, context) => {
  const ref = db.collection('users').doc(data.id);

  return ref.get().then(doc => {
      return { unique: !doc.exists };
    });
});

export const isSlugFieldUnique = functions.https.onCall((data, context) => {
  const ref = db.collection(data.collection).where('slug', '==', data.slug);

  return ref.get().then(docs => {
      return { unique: docs.empty };
    });
});