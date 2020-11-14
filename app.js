
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const prompts = require("./userPrompts");
const render = require("./lib/htmlRenderer");

// Packages
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const userPrompts = require("./userPrompts");

//path
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");


// Array of employees

const employees = [];

//create manager

function createManager() {
  inquirer.prompt(userPrompts.manager).then((managerResponses) => {
    let newManager = new Manager(
      managerResponses.mngrName,
      managerResponses.mngrId,
      managerResponses.mngrEmail,
      managerResponses.mngrOffice
    );

    employees.push(newManager);

    console.log("New manager created:", newManager);
    confirmEmployee();
  });
}

//confirm employee

function confirmEmployee() {
  inquirer.prompt(userPrompts.create).then((confirmEmployee) => {
    switch (confirmEmployee.confirmEmployee) {
      case false:
        console.log("Here is your current: ", employees);
        console.log("your page is being built by our generator");
        fs.writeFileSync(outputPath, render(employees), "utf-8");
        return;
      case true:
        createEmployee();
    }
  });
}

// Create Engineer or Intern
function createEmployee() {
  // add an Engineer or Intern?
  inquirer.prompt(userPrompts.employee).then((employeeRole) => {
    switch (employeeRole.employeeRole) {
      case "Engineer":
        inquirer.prompt(userPrompts.engineer).then((engResponses) => {
          let newEngineer = new Engineer(
            engResponses.engineerName,
            engResponses.engineerId,
            engResponses.engineerEmail,
            engResponses.engineerGithub
          );
          employees.push(newEngineer);
          console.log("An engineer has been addred to the team: ", newEngineer);
          confirmEmployee();
        });
        break;
      case "Intern":
        inquirer.prompt(userPrompts.intern).then((internResponses) => {
          let newIntern = new Intern(
            internResponses.internName,
            internResponses.internId,
            internResponses.internEmail,
            internResponses.internSchool
          );
          employees.push(newIntern);
          console.log("An intern has been added to the team: ", newIntern);
          confirmEmployee();
        });
        break;
    }
  });
}

  createManager();
 