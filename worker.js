/**
 *
 * @file worker.js
 */
import { v1 as uuidv1 } from "uuid";
import {point} from "@turf/helpers";
import {distance} from "@turf/turf";

addEventListener("message", (event) => {
    let stands = event.data.stands;
    let from = point([
        parseFloat(event.data.coords.lat),
        parseFloat(event.data.coords.lng)
    ]);

    for (let i = 0; i < stands.length; i++) {
        // Add dynamic property for distance
        if (stands[i].hasOwnProperty("distance") === false) {
            stands[i].distance = 0
        }
        let to = point([stands[i].latitude, stands[i].longitude])
        // Calculate distance
        stands[i].distance = Math.ceil(distance(from, to))
        // Add unique key
        stands[i].uid = uuidv1();
    }
    // Pass the sorted stands back
    postMessage(stands.sort((a, b) => a.distance - b.distance))
})
