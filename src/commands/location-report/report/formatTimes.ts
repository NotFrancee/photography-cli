const twoDigits = (n: number) => {
  if (n > 9) return n;

  return `0${n}`;
};

const getHourAndMinute = (time: Date) => {
  const hour = twoDigits(time.getHours());
  const minute = twoDigits(time.getMinutes());

  return `${hour}:${minute}`;
};

const getTimespan = (start: Date, end: Date) => {
  const difference = (end.getTime() - start.getTime()) / (1000 * 60);

  return Math.floor(difference * 100) / 100;
};

export { getHourAndMinute, getTimespan };
