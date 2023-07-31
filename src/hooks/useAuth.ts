import { useState, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { User } from '../utils/types';
import { auth, getUserById } from '../firebase/firebase';
import { useUserStore } from '../store/useUserStore';

export default function useAuth(): { user: User | null; isLoading: boolean } {
  const { user, setUser } = useUserStore();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  useEffect(() => {
    return onAuthStateChanged(auth, async (user) => {
      if (user) {
        const userData = await getUserById(user.uid);
        setUser(userData);
      } else {
        setUser(null);
      }
      setIsLoading(false);
    });
  }, []);

  return { user, isLoading };
}
