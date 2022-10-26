const inquirer = require("inquirer");
const chalk = require("chalk");
const Employee = require("./library/Employee");
const Engineer = require("./library/Engineer");
const Intern = require("./library/Intern");
const Manager = require("./library/Manager");
const fs = require('fs')
const team = []
const htmlPrint1 = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta http-equiv="X-UA-Compatible" content="ie=edge">
<meta name="Description" content="Enter your description here"/>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
<title>Employee Roster</title>
</head>
  <body>
    <section class="hero is-info is-small">
        <div class="hero-body has-text-centered">
          <p class="title is-size-1">
            Employee Roster
          </p>
        </div>
      </section>
      
      <div class="columns is-multiline is-centered">
        <div class="column is-8">
            <form class="box">
                <div class="field">
                    <label class="label is-size-2">Team Members Generated in the Command Line</label>
                </div>
            </form>    
        </div>`
const htmlPrint3 =`</div>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.slim.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.1/umd/popper.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.6.0/js/bootstrap.min.js"></script>
<script src="./assets/script.js"></script>
</body>
</html>`
makeHTML = () => {fs.writeFile("index.html", htmlPrint1, (err) => 
err ? console.log(err) : console.log(`Creating Team Roster`) 
    )};

finishRoster = () => {fs.appendFile('index.html',htmlPrint3,(err) => 
err ? console.log(err) : console.log(`Finalizing Roster`)
)};

const managerQuestions = [
    {
    type: 'input',
    message: 'What is your name?',
    name: 'name',
  },
  {
    type: 'input',
    message: 'What is your ID?',
    name: 'id',
  },
  {
    type: 'input',
    message: 'What is your Email?',
    name: 'email',
  },
  {
    type: 'input',
    message: 'What is your Office Number?',
    name: 'officeNumber',
  },
]
function init() {inquirer
    .prompt(managerQuestions)
    .then((response) => {
        const {name, id, email, officeNumber} = response
        console.log(name);
        console.log(id);
        console.log(email);
        console.log(officeNumber);
        let manager = new Manager(name,id,email,officeNumber);
        console.log(manager);
        team.push(manager)
        return addMore()
    })        
}

init()

addMore = () =>  {inquirer
    .prompt(
{
    type: 'list',
    message: 'Would you like to add another employee?',
    name: 'continue',
    choices: ['Engineer','Intern','None'],
  }
    )
.then((response) => {if (response.continue === 'Engineer') {
    eQuestions()
} else if (response.continue === 'Intern') {
    iQuestions()
} else {
    console.log(team);
    let append = [];
     for (let i = 0; i < team.length; i++) {
        append.push(`<div class="columns is-multiline is-centered column is-8">
        <div class="card column has-text-centered is-8">
          <div class="card-header is-size-3">
            Employee Type: ${team[i].getRole()}
          </div>
          <div class="card-content">
            <div class="content">
              Employee Name:${team[i].name}.
            </div>
            <div class="content">
              Employee id:${team[i].id}.
            </div>
            <div class="content">
              Email:${team[i].email}.
            </div>
          </div>
        </div>
      </div>`);   
    }
    const htmlPrint2 = append.join('')
    console.log(`Test of htmlPrint2 ${htmlPrint2}`)
    makeHTML();
    addTeam = () => {fs.appendFile('index.html',htmlPrint2,(err) => 
    err ? console.log(err) : console.log(`Adding Team Members`)
)};
    addTeam()
    finishRoster();
}

})}

const engineerQuestions = [
    {
    type: 'input',
    message: 'What is your name?',
    name: 'name',
  },
  {
    type: 'input',
    message: 'What is your ID?',
    name: 'id',
  },
  {
    type: 'input',
    message: 'What is your Email?',
    name: 'email',
  },
  {
    type: 'input',
    message: 'What is Github?',
    name: 'github',
  },
]
function eQuestions() {inquirer
    .prompt(engineerQuestions)
    .then((response) => {
        const {name, id, email, github} = response
        console.log(name);
        console.log(id);
        console.log(email);
        console.log(github);
        let engineer = new Engineer(name,id,email,github);
        console.log(engineer);
        team.push(engineer)
        return addMore()
    })        
}

const internQuestions = [
    {
    type: 'input',
    message: 'What is your name?',
    name: 'name',
  },
  {
    type: 'input',
    message: 'What is your ID?',
    name: 'id',
  },
  {
    type: 'input',
    message: 'What is your Email?',
    name: 'email',
  },
  {
    type: 'input',
    message: 'What School do you attend?',
    name: 'school',
  },
]
function iQuestions() {inquirer
    .prompt(internQuestions)
    .then((response) => {
        const {name, id, email, school} = response
        console.log(name);
        console.log(id);
        console.log(email);
        console.log(school);
        let intern = new Intern(name,id,email,school);
        console.log(intern);
        team.push(intern);
        return addMore()
    })        
}


