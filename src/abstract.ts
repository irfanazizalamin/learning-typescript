abstract class Vehicle  {
  abstract wheels: number

  start = (): void => {
    console.log('vehicle is starting')
  }
}

class Car extends Vehicle {
  wheels: number = 4
}

class Motor extends Vehicle {
  wheels: number = 2
}

const avanza = new Car()
console.log(avanza)
avanza.start()