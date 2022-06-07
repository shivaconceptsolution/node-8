const inquirer = require('inquirer')
inquirer
  .prompt([
    {
      name: "first_name",
      type: "input",
      message: "What is your first name?",
    },
    {
      name: "last_name",
      type: "input",
      message: "What is your last name?",
    },
  ])
  .then((answer) => {
    console.log("Hello", answer.first_name, answer.last_name);
  });