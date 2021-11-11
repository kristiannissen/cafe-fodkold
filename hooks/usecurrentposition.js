/**
 *
 * @file hooks/usecurrentposition.js
 */
import { useState, useEffect, useRef } from "react";

const useCurrentPosition = () => {
  const [position, setPosition] = useState({});
  const [error, setError] = useState({ code: 0, message: "" });

  const handleSuccess = (position) => {
    // console.log(position)
    setPosition(position);
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
    // getPosition().then(handleSuccess)
    // .catch(handleError)
  }, []);

  return [position, error, getPosition];
};

export default useCurrentPosition;
