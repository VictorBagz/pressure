
import admin from 'firebase-admin';

// Load environment variables on the server
const projectId = process.env.FIREBASE_PROJECT_ID;
const clientEmail = process.env.FIREBASE_CLIENT_EMAIL;
const privateKey = process.env.FIREBASE_PRIVATE_KEY;

const requiredEnvVars = {
  FIREBASE_PROJECT_ID: projectId,
  FIREBASE_CLIENT_EMAIL: clientEmail,
  FIREBASE_PRIVATE_KEY: privateKey,
};

const missingEnvVars = Object.entries(requiredEnvVars)
  .filter(([, value]) => !value)
  .map(([key]) => key);

if (missingEnvVars.length > 0) {
  throw new Error(
    `Firebase initialization failed. Missing required environment variables: ${missingEnvVars.join(
      ', '
    )}. Please check your .env file.`
  );
}

if (!admin.apps.length) {
  try {
    // Replace both \\n and literal \n characters to ensure the private key is parsed correctly.
    const formattedPrivateKey = privateKey?.replace(/\\n/g, '\n').replace(/\n/g, '\n');

    admin.initializeApp({
      credential: admin.credential.cert({
        projectId: projectId,
        clientEmail: clientEmail,
        privateKey: formattedPrivateKey,
      }),
      databaseURL: `https://${projectId}.firebaseio.com`,
    });
  } catch (error: any) {
    console.error('Firebase admin initialization error. Credentials used:', { projectId, clientEmail });
    throw new Error(`Firebase admin initialization error: ${error.message}`);
  }
}

export const firestore = admin.firestore();
