/**
 *
 * @file context/position.js
 *
 */
import { createContext } from "react";

export const PositionState = {
  latitude: 55.670249,
  longitude: 10.3333283,
};
export const PositiionContext = createContext(PositionState);
