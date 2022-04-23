import chalk from 'chalk';

const title = (text: string) => {
  const title = chalk.red.bold(text);
  console.log(title);
};

const subtitle = (text: string, color: string) => {
  const subtitle = chalk.bold(text);
  console.log(subtitle);
};

export default { title, subtitle };
