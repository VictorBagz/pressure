
import admin from 'firebase-admin';

// Load environment variables on the server
const projectId = process.env.FIREBASE_PROJECT_ID;
const clientEmail = process.env.FIREBASE_CLIENT_EMAIL;
const privateKey = process.env.FIREBASE_PRIVATE_KEY;

if (!admin.apps.length) {
  try {
    admin.initializeApp({
      credential: admin.credential.cert({
        projectId: projectId,
        clientEmail: clientEmail,
        // The private key must be formatted correctly.
        // The replace function handles escaped newlines from the .env file.
        privateKey: privateKey?.replace(/\\n/g, '\n'),
      }),
      databaseURL: `https://${projectId}.firebaseio.com`,
    });
  } catch (error: any) {
    console.error('Firebase admin initialization error. Please check your FIREBASE_PROJECT_ID, FIREBASE_CLIENT_EMAIL, and FIREBASE_PRIVATE_KEY in the .env file.', error);
    // Throw a more user-friendly error. The original error is logged above.
    throw new Error('Could not initialize Firebase Admin SDK. Verify your credentials.');
  }
}

export const firestore = admin.firestore();
