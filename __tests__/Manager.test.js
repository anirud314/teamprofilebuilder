/*This is the test file for Manager using jest to test the Manager class */
const Manager = require("../lib/Manager");

//Testing constructor if it can set a value for Managers officeRoom
test("Set Manager officeRoom account using constructor", () =>{
    const oNum = 300;
    const employee = new Manager("Aniruddha", "abc314@gmail.com", 101, oNum);
    expect(employee.office).toBe(oNum);
});
//Testing getter function to see if it can get officeRoom value
test("Get Manager officeRoom  value", () =>{
    const oNum = 303;
    const employee = new Manager("Mario", "LetsAGo@nintendo.com", 1, oNum);
    expect(employee.getOnumber()).toBe(oNum);
});
//Testing if getEType() returns the correct value
test("getEType() returns type - \"Manager\"", () =>{
    const tType = "Manager";
    const employee = new Manager("Aniruddha","abc314@gmail.com", 1234321, 1);
    expect(employee.getEType()).toBe(tType);
});