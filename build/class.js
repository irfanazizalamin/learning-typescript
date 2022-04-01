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
// private: only in that class
// protected: only in that class and descendants
class Admin extends User {
    constructor(name, age, phone) {
        super(name, age);
        this.read = true;
        this.write = true;
        this._email = '';
        this.getRole = () => {
            return {
                read: this.read,
                write: this.write
            };
        };
        this.phone = phone;
    }
    set email(val) {
        if (!val.includes('@')) {
            console.log('email salah');
        }
        else {
            this._email = val;
        }
    }
    get email() {
        return this._email;
    }
}
Admin.roleName = 'Admin';
Admin.getRoleName = () => {
    return 'hey';
};
let user1 = new User('John', 28);
let admin1 = new Admin('Joko', 25, '081434dasd3');
admin1.email = 'cobacoba@gmail.com';
console.log(Admin.roleName);
console.log(Admin.getRoleName());
