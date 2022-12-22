import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getUser } from "../utils/firebase/user";

export function useUser(userId) {
  const [user, setUser] = useState();
  const router = useRouter();

  useEffect(() => {
    void (async () => {
      const user = await getUser(userId);
      setUser(user);
    })();
  }, [router.query.id]);

  return user;
}
