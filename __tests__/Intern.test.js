/*This is the test file for Intern using jest to test the Intern class */
const Intern = require("../lib/Intern");

//Testing constructor if it can set a value for Interns School
test("Set Intern School account using constructor", () =>{
    const eSchool = "anirud314";
    const employee = new Intern("Aniruddha", "abc314@gmail.com", 101, eSchool);
    expect(employee.school).toBe(eSchool);
});
//Testing getter function to see if it can get School value
test("Get Intern School  value", () =>{
    const eSchool = "ItsAMeMario";
    const employee = new Intern("Mario", "LetsAGo@nintendo.com", 1, eSchool);
    expect(employee.getSchool()).toBe(eSchool);
});
//Testing if getEType() returns the correct value
test("getEType() returns type - \"Intern\"", () =>{
    const tType = "Intern";
    const employee = new Intern("Aniruddha","abc314@gmail.com", 1234321, "aSchool");
    expect(employee.getEType()).toBe(tType);
});