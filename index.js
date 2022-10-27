const inquirer = require(`inquirer`);
const fs = require(`fs`);
const Manager = require(`./lib/Manager`);
const Engineer = require(`./lib/Engineer`);
const Intern = require(`./lib/Intern`);
let outputHTML;
const employees = [];

const typeQuestion = [
  {
    name: `type`,
    type: `list`,
    message: `What kind of employee are they?`,
    choices: [`Manager`, `Engineer`, `Intern`],
  },
];

const repeatQuestion = {
  name: `repeat`,
  type: `confirm`,
  message: `Would you like to add another employee?`,
};

const generateEmployees = async () => {
  inquirer.prompt(typeQuestion).then(answers => {
    const questions = [
      {
        name: `name`,
        type: `input`,
        message: `What is the employee's name?`,
      },
      {
        name: `id`,
        type: `input`,
        message: `What is the employee's id?`,
      },
      {
        name: `email`,
        type: `input`,
        message: `What is the employee's email address?`,
      },
    ];
    const type = answers.type;
    switch (type) {
      case `Manager`:
        questions.push({ name: `officeNumber`, type: `input`, message: `What is the employee's office number?` });
        break;
      case `Engineer`:
        questions.push({ name: `github`, type: `input`, message: `What is the employee's github username?` });
        break;
      case `Intern`:
        questions.push({ name: `school`, type: `input`, message: `What is the employee's school?` });
        break;
    }
    questions.push(repeatQuestion);
    inquirer.prompt(questions).then(answers => {
      switch (type) {
        case `Manager`:
          employees.push(new Manager({ name: answers.name, id: answers.id, email: answers.email, officeNumber: answers.officeNumber }));
          break;
        case `Engineer`:
          employees.push(new Engineer({ name: answers.name, id: answers.id, email: answers.email, github: answers.github }));
          break;
        case `Intern`:
          employees.push(new Intern({ name: answers.name, id: answers.id, email: answers.email, school: answers.school }));
          break;
      }
      answers.repeat ? generateEmployees() : generateHTML();
    });
  });
};

const generateHTML = () => {
  outputHTML = `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous" />
        <style>.card {min-width: 300px;}</style>
        <title>Team Profile</title>
      </head>
      <body>
        <header class="d-flex justify-content-center align-items-center py-5 bg-danger text-white mb-5">
          <h1>My Team</h1>
        </header>
        <main class="container d-flex flex-wrap gap-5 justify-content-center">`;
  employees.forEach(employee => {
    generateCard(employee);
  });

  outputHTML += `
      </main>
      </body>
    </html>`;

  fs.writeFile(`./dist/team-profile.html`, outputHTML, err => {
    if (err) {
      console.log(error);
    } else {
      console.log(`Success!`);
    }
  });
};

const generateCard = employee => {
  outputHTML += `
        <div class="card">
          <div class="card-header bg-primary text-white">
            <h2>${employee.name}</h2>
            <div class="title">${employee.getRole()}</div>
          </div>
          <div class="card-body">
            <table class="table">
              <tr>
                <td>ID: ${employee.id}</td>
              </tr>
              <tr>
                <td>Email: <a href="mailto:${employee.email}">${employee.email}</a></td>
              </tr>
              <tr>`;

  switch (employee.getRole()) {
    case `Manager`:
      outputHTML += `
                <td>Office Number: ${employee.officeNumber}</td>`;
      break;
    case `Engineer`:
      outputHTML += `
                <td>GitHub: <a href="https://www.github.com/${employee.github}/">${employee.github}</a></td>`;
      break;
    case `Intern`:
      outputHTML += `
                <td>School: ${employee.school}</td>`;
      break;
  }

  outputHTML += `
          </tr>
        </table>
      </div>
    </div>`;
};

generateEmployees();
