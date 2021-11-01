/**
 *
 * @file worker.js
 */
addEventListener("message", (event) => {
    let stands = event.data.stands;
    let coords = event.data.coords;

    for (let i = 0; i < stands.length; i++) {
        // Add dynamic property for distance
        if (stands[i].hasOwnProperty("distance") === false) {
            stands[i].distance = 0
        }
        stands[i].distance = Math.ceil(Math.random(30))
    }
    // Pass the sorted stands back
    postMessage(stands)
})
