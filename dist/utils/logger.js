import chalk from 'chalk';
const title = (text) => {
    const title = chalk.red.bold(text);
    console.log(title);
};
const subtitle = (text) => {
    const subtitle = chalk.redBright.bold(text);
    console.log(subtitle);
};
export default { title, subtitle };
//# sourceMappingURL=logger.js.map