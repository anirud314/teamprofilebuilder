/*This file holds the Class Intern which extends the class Employee and exports it out for use in other files*/
const Employee = require("./Employee"); //Import employee class from employee.js

class Intern extends Employee{
    //constructor
    constructor(eName, eEmail, eID, eSchool){
        super(eName, eEmail, eID); // super is used to pull all of the values from the parent class into the child class
        this.school = eSchool; // Intern's school
    }
    //getter functions
    getSchool(){
        return this.school;
    }

    getEType(){
        return "Intern";
    }
}

module.exports = Intern;