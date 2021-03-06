/**
 *
 * @file hooks/usecurrentposition.js
 */
import { useState, useEffect, useRef } from "react";

const useCurrentPosition = (permission) => {
  const [position, setPosition] = useState({});
  const [error, setError] = useState({ code: 0, message: "" });

  const handleSuccess = (pos) => {
    setPosition(pos);
  };

  const handleError = (error) => {
    setError(error);
  };

  const getPosition = () => {
    return new Promise((resolve, reject) =>
      navigator.geolocation.getCurrentPosition(resolve, reject)
    );
  };

  useEffect(() => {
    if (permission) {
      getPosition().then(handleSuccess).catch(handleError);
    }
  }, []);

  return [position, error, getPosition];
};

export default useCurrentPosition;
