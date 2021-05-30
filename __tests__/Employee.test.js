/*This is the test file for employee using jest to test the employee class */
const Employee = require("../lib/Employee");

// Whole test of a constructed employee; This isnt really all that helpful
test("Instanciating a whole employee and testing its entire functionality", () =>{
    const tName = "Mario";
    const tEmail = "jumpman310@nintendo.com";
    const tID = 1;
    const tType = "Employee";
    const employee = new Employee(tName, tEmail, tID);

    expect(typeof(employee)).toBe("object");
    expect(employee.name).toBe(tName);
    expect(employee.email).toBe(tEmail);
    expect(employee.id).toBe(tID);

    expect(employee.getEName()).toBe(tName);
    expect(employee.getEEmail()).toBe(tEmail);
    expect(employee.getEID()).toBe(tID);
    expect(employee.getEType()).toBe(tType);
});

//Wrote this based off of tutor session I had explaining the use case for tests; This way of writing it makes it easier to track when testing
// Test to see if employee object can be instantiated
test("Create Employee Class instance", () => {
    const employee = new Employee();
    expect(typeof(employee)).toBe("object");
});

//Test constructor functions to see if constructor arguments can be set individually
test("Set employee name from constructor", () =>{
    const tName = "Aniruddha";
    const employee = new Employee(tName, "_@_", 1);
    expect(employee.name).toBe(tName);
});
test("Set employee email from constructor", () =>{
    const tEmail = "abc314@gmail.com";
    const employee = new Employee("_", tEmail, 1);
    expect(employee.email).toBe(tEmail);
}); 
test("Set employee id from constructor", () =>{
    const tID = 1234321;
    const employee = new Employee("_","_@_",tID);
    expect(employee.id).toBe(tID);
});

//Test getter functions to see if values from object can be capture correct values
test("Get name using getEName()", () =>{
    const tName = "Aniruddha";
    const employee = new Employee(tName, "_@_", 1);
    expect(employee.getEName()).toBe(tName);
});
test("Get email using getEEmail()", () =>{
    const tEmail = "abc314@gmail.com";
    const employee = new Employee("_", tEmail, 1);
    expect(employee.getEEmail()).toBe(tEmail);
});
test("Get id using getEID()", () =>{
    const tID = 1234321;
    const employee = new Employee("_","_@_",tID);
    expect(employee.getEID()).toBe(tID);
});
test("getEType() which return's Type - \"Employee\"", () =>{
    const tType = "Employee";
    const employee = new Employee("Aniruddha","abc314@gmail.com",1234321);
    expect(employee.getEType()).toBe(tType);
});