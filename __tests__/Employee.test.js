/*This is the test file for employee using jest to test the employee class */
const { test, expect } = require("@jest/globals");
const Employee = require("../lib/Employee");

// Whole test of a constructed employee
test("Instanciating a whole employee and testing its entire functionality", () =>{
    const tName = "Mario";
    const tEmail = "jumpman310@nintendo.com";
    const tID = 010101011100101;
    const employee = new Employee(tName, tEmail, tID);

    expect(typeof(employee)).toBe("object");
    expect(employee.name).toBe(tName);
    expect(employee.email).toBe(tEmail);
    expect(employee.id).toBe(tID);

    expect(employee.getEName()).toBe(tName);
    expect(employee.getEEmail).toBe(tEmail);
    expect(employee.getEID()).toBe(tID);
    expect(employee.getEType()).toBe(tType);
})