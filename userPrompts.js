
// questions for user that is building the team 
const inquirer = require("inquirer");
// Manager Prompts

const managerPrompts = [
    {
        type: 'input',
        message: "This application helps you build your develpment team roster. To get statrted, what is your manager's name?",
        name: 'mngrName',
        default: 'Chip Beck',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("Must enter a valid name.");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "What is your manager's employee ID number?",
        name: 'mngrId',
        default: '0057',
        validate: function (answer) {
            if (answer <= 0) {
                return console.log("A valid ID is required. Answer must be greater than zero.");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "What is your manager's email address?",
        name: 'mngrEmail',
        default: 'chip.beck@gtpt',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid email address is required.");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "What is your manager's office number?",
        name: 'mngrOffice',
        default: '101',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid office number is required.");
            }
            return true;
        }
    },
];

// Prompt to enter next team member 

const confirmEmployee = [
    {
        type: 'confirm',
        message: "Would you like to add another member to your team?",
        name: 'confirmEmployee'
    }
];

const employeeType = [
    {
        type: 'list',
        message: "Would you like to add an Engineer or Intern to the team?",
        choices: ['Engineer', 'Intern'],
        name: 'employeeRole'
    }
];

// Engineer prompts 

const engineerPrompts = [
    {
        type: 'input',
        message: "What is the software engineer's name?",
        name: 'engineerName',
        default: 'Craven Waters',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid name is required.");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "What is the engineer's employee ID?",
        name: 'engineerId',
        default: '27',
        validate: function (answer) {
            if (answer <= 0) {
                return console.log("A valid employee ID is required.");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "What is the engineer's email address?",
        name: 'engineerEmail',
        default: 'cravenwaters@gtpt',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid email address is required.");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "What is the engineer's GitHub?",
        name: 'engineerGithub',
        default: 'CravenW',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid GitHub is required.");
            }
            return true;
        }
    }
];

// Intern prompts 

const internPrompts = [
    {
        type: 'input',
        message: "What is the intern's name?",
        name: 'internName',
        default: 'Sally May',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid name is required.");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "What is the intern's employee ID?",
        name: 'internId',
        default: '2828',
        validate: function (answer) {
            if (answer <= 0) {
                return console.log("A valid employee ID is required.");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "What is the intern's email address?",
        name: 'internEmail',
        default: 'sallym@gtpt',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid email address is required.");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "What is the name of the intern's school?",
        name: 'internSchool',
        default: 'Georgia Tech',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid school is required.");
            }
            return true;
        }
    }
];

module.exports = {
    manager: managerPrompts,
    create: confirmEmployee,
    employee: employeeType,
    engineer: engineerPrompts,
    intern: internPrompts
};