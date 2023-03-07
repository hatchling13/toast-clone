import React from "react";

function useEscapeKey(func) {
  React.useEffect(() => {
    function handler(event) {
      if (event.key === "Escape") {
        func();
      }
    }

    window.addEventListener("keydown", handler);

    return () => {
      window.removeEventListener("keydown", handler);
    };
  }, [func]);
}

export default useEscapeKey;
