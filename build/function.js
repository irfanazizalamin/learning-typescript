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
handleCallNameAndAge();
