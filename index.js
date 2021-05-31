/*Main file/Driver*/
//Import all dependencies and other necessary components for the driver to run the project

/*All of the classes I built in the lib folder*/
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");

// Dependencies from node modules 
const inquirer = require("inquirer");// import inquirer
const path = require("path");// import path
const fs = require("fs");// import fs

//Rendering
const out_DIR = path.resolve(__dirname,"dist");// variable to set sending output to dist 
const outPath = path.join(out_DIR, "team.html");// naming the path to end with team.html
const render = require("./src/generateHtml.js"); // render function is the generateHTML function from generateHTML.js
// Variables
const team = [];// Team array holds all team members made
const idArr = [];// used to check that id's are not being reused

// Manager questions
const mQuestions = [
    {//Asks for name
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
    {//Asks for ID
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
    {//Asks for email
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
    {//Asks for office number
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
    {//Asks for engineer name
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
    {//Asks for engineer ID
        type: "input",
        name: "eId",
        message: "What is the Engineer's ID?",
        validate: response => {
            const checkID = response.match( /^[1-9]\d*$/);
            if(checkID){
                if (idArr.includes(response)) {
                    return "This ID is already taken. Please enter a different number.";
                }
                else {
                    return true;
                }
            }
            else{
                return "Please enter any number from 1-9";
            }
        }
    },
    {//Asks for engineer email
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
    {//Asks for engineer github
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
    {//Asks for intern's name
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
    {// asks for intern's ID
        type: "input",
        name: "iId",
        message: "What is the intern's ID?",
        validate: response => {
            const checkID = response.match( /^[1-9]\d*$/);
            if(checkID){
                if (idArr.includes(response)) {
                    return "This ID is already taken. Please enter a different number.";
                }
                else {
                    return true;
                }
            }
            else{
                return "Please enter any number from 1-9";
            }
        }
    },
    {// asks for intern's email
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
    {//asks for intern's school
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
function assignManager(){ // uses prompt(mQuestions) to assign data collected to a new manager class
    console.log("Hello, and welcome to TeamProfileGenerator\nAs a manager you can build your team here.");
    inquirer.prompt(mQuestions)
        .then(data => {
            const manager = new Manager(data.mName, data.mEmail, data.mId, data.mOffice);// create manager based off of manager class and data collected
            team.push(manager);// push into team array
            idArr.push(data.mId);// push into idArr
            buildTeam();//call build team function
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
        }
    ]).then(optionData => {
        console.log("Choice time");
        if(optionData.employeeType === "Engineer"){
            console.log("Adding Engineer ----");
            addEngineer();
        }
        else if(optionData.employeeType === "Intern"){
            console.log("Adding Intern ------");
            addIntern();
        }
        else if(optionData.employeeType === "I don't need anyone else"){
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
function addEngineer(){ // Function similar/same as assignManager() uses prompt(eQuestions) and uses that data to create engineer
    inquirer.prompt(eQuestions)
        .then(eData =>{
            const engineer = new Engineer(eData.eName, eData.eEmail, eData.eId, eData.eGithub);
            team.push(engineer);
            idArr.push(eData.eId);
            buildTeam();
        });
}
function addIntern(){// Function similar/same as assignManager() uses prompt(iQuestions) and uses that data to create intern
    inquirer.prompt(iQuestions)
    .then(iData =>{
        const intern = new Intern(iData.iName, iData.iEmail, iData.iId, iData.iSchool);
        team.push(intern);
        idArr.push(iData.iId);
        buildTeam();
    });
}
function generateProfile(){ // uses fs to create file
    if (!fs.existsSync(out_DIR)) {// if directory doesnt exist
        fs.mkdirSync(out_DIR)// create it
    }
    console.log(team);
    fs.writeFileSync(outPath, render(team), "utf-8");// write or replace file with the outPath and name with team being rendered by render function
}
// Driver
function init(){
    assignManager();// call assignManager
};

//Running code
init();// call init