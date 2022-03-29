"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor(name, age) {
        /**
         * getName
         */
        this.getName = () => {
            return 'my name is ' + this.name + ' ' + this.age + ' yo';
        };
        this.name = name;
        this.age = age;
    }
}
exports.User = User;
let user1 = new User('John', 28);
console.log(user1.name);
console.log(user1.getName());
