import SunCalc from 'suncalc';
import { ExtendedTimes } from '@types';

SunCalc.addTime(30, 'sunAtThirdMorning', 'sunAtThirdEvening');
SunCalc.addTime(45, 'sunAtHalfMorning', 'sunAtHalfEvening');

const getMainData = (date: Date, lat: number, lon: number) => {
  const data = SunCalc.getTimes(date, lat, lon);
  return data as ExtendedTimes;
};

export { getMainData };
