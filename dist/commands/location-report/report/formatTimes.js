import chalk from 'chalk';
const twoDigits = (n) => {
    if (n > 9)
        return n;
    return `0${n}`;
};
const colored = (text) => chalk.green.bold(text);
const getHourAndMinute = (time) => {
    const hour = twoDigits(time.getHours());
    const minute = twoDigits(time.getMinutes());
    const text = `${hour}:${minute}`;
    return colored(text);
};
const getTimespan = (start, end) => {
    const difference = (end.getTime() - start.getTime()) / (1000 * 60);
    const text = Math.floor(difference * 100) / 100;
    return colored(text.toString());
};
export { getHourAndMinute, getTimespan };
//# sourceMappingURL=formatTimes.js.map