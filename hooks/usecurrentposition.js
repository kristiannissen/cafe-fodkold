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

  const getPosition = () => {
    return new Promise((resolve, reject) =>
      navigator.geolocation.getCurrentPosition(resolve, reject)
    );
  };

  useEffect(() => {
    // Check for support
    if (cancel !== true) {
      if ("geolocation" in navigator) {
        getPosition()
          .then((p) => setPosition(p))
          .catch((err) => setError(err));
      } else {
        setError({ message: "Not supported" });
      }
    }
    return () => setCancel(true);
  }, [props]);

  return [position.coords, error];
};

export default useCurrentPosition;
