/**
 *
 * @file worker.js
 */
import { v1 as uuidv1 } from "uuid";
import { point } from "@turf/helpers";
import { distance } from "@turf/turf";

addEventListener("message", (event) => {
  let { coords } = event.data;
  let message = "";
  let from = point([coords.latitude, coords.longitude]);
  // Fetch stands
  fetch("/api/sausage-stands")
    .then((res) => res.json())
    .then((arr) => {
      let stands = arr.stands;
      for (let i = 0; i < stands.length; i++) {
        let to = point([stands[i].latitude, stands[i].longitude]);
        stands[i].distance = Math.ceil(distance(from, to));
        stands[i].uid = Math.random(
          new Date().getTime() * Math.random(42)
        ).toString();
      }
      // Send stands back to main thread
      postMessage({
        stands: stands.sort((a, b) => a.distance - b.distance),
        message,
      });
    });
});
