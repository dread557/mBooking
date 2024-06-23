import { getAuth, onAuthStateChanged, User } from "firebase/auth";
import { useEffect, useState } from "react";

const auth = getAuth();

export function useAuth() {
  const [user, setUser] = useState<User>();
  useEffect(() => {
    const unsubscribeFromStateChange = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(undefined);
      }
    });

    return unsubscribeFromStateChange;
  });

  return {
    user,
  };
}
