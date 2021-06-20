// Events Module
// NOde.js has a build-in module, called "Events",
//Where you can create-, fire-, and listen for- your own events

// Example 1- Registering for the event to be fired only one time using once

// Example 1- Create an event emitter instance and register a couple of callbacks

// Example 3- Registering for the event wiht callback perameters

const EventEmitter = require("events");

const event = new EventEmitter();

/* event.on("sayMyName", () => {
    console.log("Hi, my name is Vinay");
});

event.on("sayMyName", () => {
    console.log("Hi, my name is Namdev");
});

event.on("sayMyName", () => {
    console.log("Hi, my name is Vinay Namdev");
});

event.emit("sayMyName"); */

event.on("checkPage", (sc, msg) =>{
    console.log(`Status Code is ${sc} and the page is ${msg}`);
});

event.emit("checkPage", 200, "OK"); 

