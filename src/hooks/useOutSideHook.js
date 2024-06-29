import { useEffect, useRef } from "react";

export default function (handler) {
  const ref = useRef();
  useEffect(
    function () {
      function handleClick(e) {
        if (ref.current && !ref.current.contains(e.target)) {
          handler();
        }
      }

      document.addEventListener("click", handleClick, true);

      return () => removeEventListener("click", handleClick, true);
    },
    [handler]
  );

  return ref;
}
