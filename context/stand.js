/**
 *
 * @file context/stand.js
 *
 */
import { createContext } from "react";

// TODO: Add properties
export const StandState = {
  name: "",
  uid: "",
  address: "",
  longitude: 0,
  latitude: 0,
  distance: 0,
};
export const StandContext = createContext(StandState);
