export class User {
  public name: string
  private age: number

  constructor (name: string, age: number) {
    this.name = name
    this.age = age
  }

  /**
   * getName
   */
  public getName = (): string => {
    return 'my name is ' + this.name + ' ' + this.age + ' yo'
  }
}

// private: only in that class
// protected: only in that class and descendants

class Admin extends User {
  read: boolean = true
  write: boolean = true
  phone: string

  constructor (name: string, age: number, phone: string) {
    super(name, age)
    this.phone = phone
  }

  getRole = (): { read: boolean, write: boolean } => {
    return {
      read: this.read,
      write: this.write
    }
  }
}

let user1 = new User('John', 28)
let admin1 = new Admin('Joko', 25, '081434dasd3')