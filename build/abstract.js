"use strict";
class Vehicle {
    constructor() {
        this.start = () => {
            console.log('vehicle is starting');
        };
    }
}
class Car extends Vehicle {
    constructor() {
        super(...arguments);
        this.wheels = 4;
    }
}
class Motor extends Vehicle {
    constructor() {
        super(...arguments);
        this.wheels = 2;
    }
}
const avanza = new Car();
console.log(avanza);
avanza.start();
