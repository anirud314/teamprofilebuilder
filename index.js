/*Main file/Driver*/
//Import all dependencies and other necessary components for the driver to run the project

/*All of the classes I built in the lib folder*/
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");

// Dependencies from node modules 
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

//Rendering
const out_DIR = path.resolve(__dirname,"output");
const outPath = path.join(out_DIR, "team.html");
const render = require("./src/generateHtml.js");
// Variables
const team = [];
const idArr = [];

// Manager questions
const mQuestions = [
    {
        type: "input",
        name: "mName",
        message: "Who is the Team Manager?",
        validate: response => {
            if(response !== ""){
                return true;
            }
            else{
                return "Please enter a name.";
            }
        }
    },
    {
        type: "input",
        name: "mId",
        message: "What is the Manager's ID?",
        validate: response => {
            const checkID = response.match( /^[1-9]\d*$/);
            if(checkID){
                return true;
            }
            else{
                return "Please enter any number from 1-9";
            } 
        }
    },
    {
        type: "input",
        name: "mEmail",
        message: "What is the Manager's email",
        validate: response => {
            const checkEmail = response.match(/\S+@\S+\.\S+/);
            if(checkEmail){
                return true;
            }
            else {
                return "Please provide a valid Email."
            }
        }
    },
    {
        type: "input",
        name: "mOffice",
        message: "What is the Manager's Office number?",
        validate: response => {
            const checkID = response.match( /^[1-9]\d*$/);
            if(checkID){
                return true;
            }
            else{
                return "Please enter any number from 1-9";
            }
        }
    }
];
// Engineer questions
const eQuestions = [
    {
        type: "input",
        name: "eName",
        message: "What is your engineers name?",
        validate: response => {
            if(response !== ""){
                return true;
            }
            else{
                return "Please enter a name.";
            }
        }
    },
    {
        type: "input",
        name: "eId",
        message: "What is the Engineer's ID?",
        validate: response => {
            const checkID = response.match( /^[1-9]\d*$/);
            if(checkID){
                return true;
            }
            else{
                return "Please enter any number from 1-9";
            }
        }
    },
    {
        type: "input",
        name: "eEmail",
        message: "What is the Engineer's email",
        validate: response => {
            const checkEmail = response.match(/\S+@\S+\.\S+/);
            if(checkEmail){
                return true;
            }
            else{
                return "Please provide a valid Email."
            }
        }
    },
    {
        type: "input",
        name: "eGithub",
        message: "What is their github username?",
        validate: response => {
            if(response !== ""){
                return true;
            }
            else{
                return "Please enter a github username.";
            }
        }
    }
];
// Intern questions
const iQuestions = [
    {
        type: "input",
        name: "iName",
        message: "What is your intern's name?",
        validate: response => {
            if(response !== ""){
                return true;
            }
            else{
                return "Please enter a name.";
            }
        }
    },
    {
        type: "input",
        name: "iId",
        message: "What is the intern's ID?",
        validate: response => {
            const checkID = response.match( /^[1-9]\d*$/);
            if(checkID){
                return true;
            }
            else{
                return "Please enter any number from 1-9";
            }
        }
    },
    {
        type: "input",
        name: "iEmail",
        message: "What is the intern's email",
        validate: response => {
            const checkEmail = response.match(/\S+@\S+\.\S+/);
            if(checkEmail){
                return true;
            }
            else{
                return "Please provide a valid Email."
            }
        }
    },
    {
        type: "input",
        name: "iSchool",
        message: "What is the name of their school?",
        validate: response => {
            if(response !== ""){
                return true;
            }
            else{
                return "Please enter a school name.";
            }
        }
    }
];


// Functions
function assignManager(){
    console.log("Hello, and welcome to TeamProfileGenerator\nAs a manager you can build your team here.");
    inquirer.prompt(mQuestions)
        .then(data => {
            const manager = new Manager(data.mName, data.mEmail, data.mId, data.mOffice);
            team.push(manager);
            //idArr.push(data.mId);
            buildTeam();
        });
}
function buildTeam(){
    inquirer.prompt([
        {
            type: "list",
            name: "employeeType",
            message: "What type of employee do you want to add to your project",
            choices: [
                "Engineer",
                "Intern",
                "I don't need anyone else"
            ]
        },
    ]).then(optionData => {
        if(optionData === "Engineer"){
            console.log("Adding Engineer ----");
            addEngineer();
        }
        else if(optionData === "Intern"){
            console.log("Adding Intern ------");
            addIntern();
        }
        else if(optionData === "I don't need anyone else"){
            if(team.length > 1){
                console.log("Generating HTML File");
                generateProfile();
            }
            else{
                console.log("Team needs more than just the manager.");
                buildTeam();
            }
        }
    });
}
function addEngineer(){
    inquirer.prompt(eQuestions)
        .then(eData =>{
            const engineer = new Engineer(eData.eName, eData.eEmail, eData.eId, eData.eGithub);
            team.push(engineer);
            //idArr.push(eData.eId);
            buildTeam();
        });
}
function addIntern(){
    inquirer.prompt(iQuestions)
    .then(iData =>{
        const intern = new Intern(iData.iName, iData.iEmail, iData.iId, iData.iSchool);
        team.push(intern);
        //idArr.push(iData.iId);
        buildTeam();
    });
}
function generateProfile(){
    if (!fs.existsSync(out_DIR)) {
        fs.mkdirSync(out_DIR)
    }
    fs.writeFileSync(outPath, render(team), "utf-8");
}
// Driver
function init(){
    assignManager();
};

//Running code
init();