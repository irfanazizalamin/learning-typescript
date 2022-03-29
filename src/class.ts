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

let user1 = new User('John', 28)

console.log(user1.name)
console.log(user1.getName())