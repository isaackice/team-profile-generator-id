const inquirer = require("inquirer");
const fs = require("fs");
const generateHTML = require("./utils/generateHTML");
const Manager = require("./lib/Manager")
const Engineer = require("./lib/Engineer")
const Intern = require("./lib/Intern");
const teamMembers = [];
const questions = {
    manager: [
        {
            type: 'input',
            message: "What is the team manager's name?",
            name: 'managerName',
        },
        {
            type: 'input',
            message: "What is the team manager's employee ID?",
            name: 'managerID',
        },
        {
            type: 'input',
            message: "What is the team manager's email?",
            name: 'managerEmail',
        },
        {
            type: 'input',
            message: "What is the team manager's office number?",
            name: 'managerNumber',
        },
        {
            type: 'list',
            message: 'Which type of team member would you like to add?',
            name: 'addMember',
            choices: ["Engineer", "Intern", "I don't need to add any more team members."],
        }],

    engineer: [
        {
            type: 'input',
            message: "What is the engineer's name?",
            name: 'engineerName',
        },
        {
            type: 'input',
            message: "What is the engineer's employee ID?",
            name: 'engineerID',
        },
        {
            type: 'input',
            message: "What is the engineer's email?",
            name: 'engineerEmail',
        },
        {
            type: 'input',
            message: "What is the engineer's GitHub username?",
            name: 'engineerGithub',
        },
        {
            type: 'list',
            message: 'Which type of team member would you like to add?',
            name: 'addMember',
            choices: ["Engineer", "Intern", "I don't need to add any more team members."],
        }],

    intern: [
        {
            type: 'input',
            message: "What is the intern's name?",
            name: 'internName',
        },
        {
            type: 'input',
            message: "What is the intern's employee ID?",
            name: 'internID',
        },
        {
            type: 'input',
            message: "What is the intern's email?",
            name: 'internEmail',
        },
        {
            type: 'input',
            message: "What is the intern's school?",
            name: 'internSchool',
        },
        {
            type: 'list',
            message: 'Which type of team member would you like to add?',
            name: 'addMember',
            choices: ["Engineer", "Intern", "I don't need to add any more team members."],
        }]
}

function addManager() {
    inquirer
        .prompt(questions.manager)
        .then((data) => {
            const member = new Manager(data.managerName, data.managerID, data.managerEmail, data.managerNumber)
            teamMembers.push(member);
            if (data.addMember == "Engineer") {
                return addEngineer();
            } else if (data.addMember == "Intern") {
                return addIntern();
            } else {
                return createTeam();
            }
        })
}

function addEngineer() {
    inquirer
        .prompt(questions.engineer)
        .then((data) => {
            const member = new Engineer(data.engineerName, data.engineerID, data.engineerEmail, data.engineerGithub)
            teamMembers.push(member);
            if (data.addMember == "Engineer") {
                return addEngineer()
            } else if (data.addMember == "Intern") {
                return addIntern()
            } else {
                return createTeam();
            }
        })
}

function addIntern() {
    inquirer
        .prompt(questions.intern)
        .then((data) => {
            const member = new Intern(data.internName, data.internID, data.internEmail, data.internSchool)
            teamMembers.push(member);
            if (data.addMember == "Engineer") {
                return addEngineer()
            } else if (data.addMember == "Intern") {
                return addIntern()
            } else {
                return createTeam();
            }
        })
}

function createTeam() {
    fs.writeFileSync("./dist/index.html", generateHTML(teamMembers), (err) =>
        err ? console.log(err) : console.log('Success!')
    );
}

function init() {
    addManager();
}
init();




