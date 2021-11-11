/**
 *
 * @file hooks/usecurrentposition.js
 */
import { useState, useEffect } from "react";

const useCurrentPosition = (props) => {
  const [position, setPosition] = useState({});
  const [error, setError] = useState({ code: 0, message: "" });
  const [cancel, setCancel] = useState(false);

  const handleSuccess = (position) => {
    setPosition(position);
  };

  const handleError = (error) => {
    setCancel(true);
    setError(error);
  };

  useEffect(() => {
    // Check for support
    if (cancel !== true) {
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(
          handleSuccess,
          handleError,
          {}
        );
      } else {
        setError({ message: "Not supported" });
      }
    }
    return () => setCancel(true);
  }, [props]);

  return [position.coords, error];
};

export default useCurrentPosition;
