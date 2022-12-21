import { useEffect, useState } from "react";
import { getLinks } from "../utils/firebase/links";

const DEFAULT_OUTPUT = {
  isLoading: true,
  links: [],
};

export function useLinks() {
  const [output, setOutput] = useState(DEFAULT_OUTPUT);

  useEffect(() => {
    void (async () => {
      const links = await getLinks();
      setOutput({ isLoading: false, links });
    })();
  }, []);

  return output;
}
