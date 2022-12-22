import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { getLinks } from "../utils/firebase/links";

export function useLinks() {
  const [links, setLinks] = useState();
  const router = useRouter();
  useEffect(() => {
    // idが変わったら（取得できたら）、ユーザーをDBから取得する
    // getUser(router.query.id).then((result) => setUser(result));
    const links = getLinks(router.query.id).then((result) => setLinks(result));
  }, [router.query.id]);

  return links ? links : [];
}
