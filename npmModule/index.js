const chalk = require('chalk');
const validator = require('validator');

// console.log(chalk.green.underline.inverse("success"));

const result = validator.isEmail("vinay@gmail.com");
console.log(result ? chalk.green.inverse(result) : chalk.red.inverse(result));