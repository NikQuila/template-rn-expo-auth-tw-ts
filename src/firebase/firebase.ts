import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  UserCredential,
  Auth,
  initializeAuth,
  signOut,
  createUserWithEmailAndPassword,
} from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { getReactNativePersistence } from 'firebase/auth/react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  doc,
  getDoc,
  getFirestore,
  initializeFirestore,
  setDoc,
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.EXPO_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.EXPO_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.EXPO_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.EXPO_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.EXPO_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.EXPO_PUBLIC_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
const db = initializeFirestore(app, {
  experimentalForceLongPolling: true,
});
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});
export const storage = getStorage(app);

export const createUser = async (
  email: string,
  password: string
): Promise<UserCredential | undefined> => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    const user = userCredential.user;
    const userDocRef = doc(db, 'users', user.uid);
    const userSnapshot = await getDoc(userDocRef);
    if (!userSnapshot.exists()) {
      try {
        await setDoc(userDocRef, {
          email: email,
          id: user.uid,
        });
        return userCredential;
      } catch (error) {
        throw error; // throw the error
      }
    }
  } catch (err: any) {
    console.error(err);
    alert(err.message);
    throw err; // throw the error
  }
};

export const logInWithEmailAndPassword = async (
  email: string,
  password: string
): Promise<UserCredential | void> => {
  try {
    const user: UserCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    return user;
  } catch (err: any) {
    console.error(err);
    alert(err.message);
  }
};

export const sendPasswordReset = async (email: string): Promise<void> => {
  try {
    await sendPasswordResetEmail(auth, email);
    alert('Password reset link sent!');
  } catch (err: any) {
    console.error(err);
    alert(err.message);
  }
};

export const logOut = async (): Promise<void> => {
  try {
    await signOut(auth);
  } catch (err: any) {
    console.error(err);
    alert(err.message);
  }
};

export const getUserById = async (
  uid: string,
  email?: string
): Promise<any> => {
  try {
    const userDocRef = doc(db, 'users', uid);
    const userSnapshot = await getDoc(userDocRef);
    if (userSnapshot.exists()) {
      return userSnapshot.data();
    } else {
      console.log('No such user!');
      return {
        id: uid,
        email: email,
      };
    }
  } catch (error) {
    console.log('Error getting user:', error);
  }
};
