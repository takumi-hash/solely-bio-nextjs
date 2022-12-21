import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { getLinks } from "../utils/firebase/links";

const DEFAULT_OUTPUT = {
  isLoading: true,
  links: [],
};

export function useLinks() {
  const [output, setOutput] = useState(DEFAULT_OUTPUT);
  const { data: session } = useSession();

  useEffect(() => {
    void (async () => {
      const links = await getLinks(session?.user.id);
      setOutput({ isLoading: false, links });
    })();
  }, []);

  return output;
}
