import React, { useState } from "react";
import { useEffect } from "react/cjs/react.development";

const useMedia = (media) => {
  const [match, setMatch] = useState(null);

  useEffect(() => {
    function changeMatch() {
      const { matches } = window.matchMedia(media);
      setMatch(matches);
    }

    window.addEventListener("resize", changeMatch);

    changeMatch();

    return () => {
      window.removeEventListener("resize", changeMatch);
    };
  }, [media]);

  return match;
};

export default useMedia;
