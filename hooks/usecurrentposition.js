/**
 *
 * @file hooks/usecurrentposition.js
 */
import { useState, useEffect, useRef } from "react";

const useCurrentPosition = ({ permission }) => {
  const [position, setPosition] = useState({});
  const [error, setError] = useState({ code: 0, message: "" });
  const isMounted = useRef(false);

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
    if (permission) {
      if ("geolocation" in navigator) {
        getPosition()
          .then((pos) => {
            console.log(pos);
            setPosition(pos);
          })
          .catch((error) => setError(error));
      }
    }
  }, [permission]);

  useEffect(() => {
    if (isMounted.current === false) {
      isMounted.current = true;
    }
  }, []);

  return [position.coords, error];
};

export default useCurrentPosition;
