const twoDigits = (n) => {
    if (n > 9)
        return n;
    return `0${n}`;
};
const getHourAndMinute = (time) => {
    const hour = twoDigits(time.getHours());
    const minute = twoDigits(time.getMinutes());
    return `${hour}:${minute}`;
};
const getTimespan = (start, end) => {
    const difference = (end.getTime() - start.getTime()) / (1000 * 60);
    console.log({ difference, computed: Math.floor(difference * 100) / 100 });
    return Math.floor(difference * 100) / 100;
};
export { getHourAndMinute, getTimespan };
//# sourceMappingURL=formatTimes.js.map