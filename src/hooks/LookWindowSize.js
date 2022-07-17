import {useEffect, useState} from "react";

function LookWindowSize() {
  const getWindowSize = () => {
    const { innerWidth: width } = window;
    return { width };
  }

  const [windowSize, setwindowSize] = useState(getWindowSize());

  useEffect(() => {
    function handleResize() {
      setwindowSize(getWindowSize());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
}

export default LookWindowSize;
