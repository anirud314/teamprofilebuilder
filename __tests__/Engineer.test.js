/*This is the test file for engineer using jest to test the engineer class */
const Engineer = require("../lib/Engineer");

//Testing constructor if it can set a value for engineers github
test("Set engineer GitHub account using constructor", () =>{
    const eGitHub = "anirud314";
    const employee = new Engineer("Aniruddha", "abc314@gmail.com", 101, eGitHub);
    expect(employee.github).toBe(eGitHub);
});
//Testing getter function to see if it can get github username value
test("Get engineer Github username value", () =>{
    const eGithub = "ItsAMeMario";
    const employee = new Engineer("Mario", "LetsAGo@nintendo.com", 1, eGithub);
    expect(employee.getGithub()).toBe(eGithub);
});
//Testing if getEType() returns the correct value
test("getEType() returns type - \"Engineer\"", () =>{
    const tType = "Engineer";
    const employee = new Engineer("Aniruddha","abc314@gmail.com", 1234321, "aGithub");
    expect(employee.getEType()).toBe(tType);
});