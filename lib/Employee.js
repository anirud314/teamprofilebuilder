/*This file holds the Class Employee and exports it out for use in other files*/
class Employee {
    //Constructor
    constructor(eName, eEmail, eID) { // uses values for
        this.name = eName; // employees name
        this.email = eEmail; // employees email
        this.id = eID; // employees id
    }
    //Getter functions
    getEName(){
        return this.name;
    }
    getEEmail(){
        return this.email;
    }
    getEID(){
        return this.id;
    }

    getEType(){
        return "Employee";
    }
}

module.exports = Employee;