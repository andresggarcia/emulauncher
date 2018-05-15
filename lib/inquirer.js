const inquirer = require('inquirer');

module.exports = {
  chooseEmulator: (list) => {
    const questions = [
      {
        type: 'list',
        name: 'choose',
        message: 'Selecciona un emulador:',
        choices: list,
        transformer: (a) => {
          return;
        }
      }
    ];
    return inquirer.prompt(questions);
  }
}
