/**
 *
 * @file worker.js
 */
addEventListener("message", (event) => {
    console.log("worker", event)
    postMessage(event.data.stands)
})
