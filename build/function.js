"use strict";
// function with return type
const getName = () => {
    return 'My Name is Uvuvuevue';
};
const getAge = () => {
    return 102;
};
const handleCallNameAndAge = () => {
    // return ''  // we cant return anything because we declare void to this method
    console.log(getName(), getAge());
};
// handleCallNameAndAge()
// function with argument
const multiply = (val1, val2) => {
    return val1 * val2;
};
const add = ({ val1, val2 }) => {
    return val1 + val2;
};
// we should define parameters as any instead of nothing
const subtract = (val1, val2) => {
    return val1 - val2;
};
const result = multiply(2, 4);
const addWithType = (val1, val2) => {
    return val1 + val2;
};
// function with default params
const getFullName = (fName, lName = 'William') => {
    return fName + ' ' + lName;
};
// function with optional params
const combineName = (person1, person2) => {
    return person1.name + ' ' + (person2 === null || person2 === void 0 ? void 0 : person2.name);
};
console.log('akbar');
