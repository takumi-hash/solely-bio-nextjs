import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getLinks } from "../utils/firebase/links";

export function useLinks(userId) {
  const [links, setLinks] = useState();
  const router = useRouter();

  useEffect(() => {
    void (async () => {
      const links = await getLinks(userId);
      setLinks(links);
    })();
  }, [router.query.id]);

  return links;
}
