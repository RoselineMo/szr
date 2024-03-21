import {useState} from "react";
import {FirebaseApp} from "firebase/app";
import {
  getAuth,
  Auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

export interface AuthenticationResult {
  error: string | null;
}

export const useAuthentication = (
  app: FirebaseApp
): [
  Auth,
  AuthenticationResult,
  (email: string, password: string) => Promise<void>,
  (email: string, password: string) => Promise<void>,
  (email: string, password: string) => Promise<void>
] => {
  const [error, setError] = useState<string | null>(null);
  const auth: Auth = getAuth(app);

  const handleSignUp = async (
    email: string,
    password: string
  ): Promise<void> => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setError(null);
    } catch (error: any) {
      setError(error);
    }
  };

  const handleSignIn = async (
    email: string,
    password: string
  ): Promise<void> => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setError(null);
    } catch (error: any) {
      setError(error);
    }
  };

  const handleSignOut = async (): Promise<void> => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return [auth, {error}, handleSignUp, handleSignIn, handleSignOut];
};
