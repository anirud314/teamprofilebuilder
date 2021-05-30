/*This file holds the Class Manager which extends the class Employee and exports it out for use in other files*/
const Employee = require("./Employee"); //Import employee class from employee.js

class Manager extends Employee { // manager is a child class of employee
    //constructor
    constructor(eName, eEmail, eID, oNum){
        super(eName, eEmail, eID); // super is used to pull all of the values from the parent class into the child class
        this.office = oNum; // manager's office number
    }
    //Getter functions
    getOnumber(){
        return this.office;
    }

    getEType(){
        return "Manager"
    }
}

module.exports = Manager;