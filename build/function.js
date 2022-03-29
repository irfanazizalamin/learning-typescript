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
console.log('result', result);
