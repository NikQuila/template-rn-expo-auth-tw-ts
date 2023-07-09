import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { onAuthStateChanged } from 'firebase/auth';
import { User } from '../utils/types';
import { auth, getUserById } from '../firebase/firebase';
import { setCurrentUser } from '../store/user/user.action';

export default function useAuth(): { user: User | null; isLoading: boolean } {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [user, setUser] = useState<User | null>(null);
  const dispatch = useDispatch();

  useEffect(() => {
    return onAuthStateChanged(auth, async (user) => {
      if (user) {
        const userData = await getUserById(user.uid);
        dispatch(setCurrentUser(userData));
        setUser(userData);
      } else {
        dispatch(setCurrentUser(null));
        setUser(null);
      }
      setIsLoading(false);
    });
  }, []);

  return { user, isLoading };
}
