import SunCalc from 'suncalc';
SunCalc.addTime(30, 'sunAtThirdMorning', 'sunAtThirdEvening');
SunCalc.addTime(45, 'sunAtHalfMorning', 'sunAtHalfEvening');
const getMainData = (date, lat, lon) => {
    const data = SunCalc.getTimes(date, lat, lon);
    return data;
};
export { getMainData };
//# sourceMappingURL=getData.js.map