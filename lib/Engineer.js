/*This file holds the Class Engineers which extends the class Employee and exports it out for use in other files*/
const Employee = require("./Employee"); //Import employee class from employee.js

class Engineer extends Employee{
    //constructor
    constructor(eName, eEmail, eID, eGithub){
        super(eName, eEmail, eID); // super is used to pull all of the values from the parent class into the child class
        this.github = eGithub; // Engineer's Github
    }
    //getter functions
    getGithub(){
        return this.github;
    }

    getEType(){
        return "Engineer";
    }
}

module.exports = Engineer;