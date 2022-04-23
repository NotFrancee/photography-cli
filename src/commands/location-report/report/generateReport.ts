import { getHourAndMinute, getTimespan } from './formatTimes';
import { ExtendedTimes } from '@types';

const generateReport = ({
  sunrise,
  sunriseEnd,
  goldenHourEnd,
  goldenHour,
  solarNoon,
  sunsetStart,
  sunset,
  sunAtThirdMorning,
  sunAtThirdEvening,
  sunAtHalfMorning,
  sunAtHalfEvening,
}: ExtendedTimes) => `
  Here is your report!
    - Sunrise
      - TimeFrame: from ${getHourAndMinute(sunrise)} to ${getHourAndMinute(
  sunriseEnd
)}
      - Total Duration: ${getTimespan(sunrise, sunriseEnd)} minutes
      - Sun at 30 Degrees: ${getHourAndMinute(sunAtThirdMorning)}
      - Sun at 45 Degrees: ${getHourAndMinute(sunAtHalfMorning)}
      - Morning Golden Hour ends at: ${getHourAndMinute(goldenHourEnd)}

    - Day
      - Sun will be at its highest at ${getHourAndMinute(solarNoon)}

    - Sunset
      - Timeframe: from ${getHourAndMinute(sunsetStart)} to ${getHourAndMinute(
  sunset
)}
      - Total Duration: ${getTimespan(sunsetStart, sunset)} minutes
      - Sun at 30 Degrees: ${getHourAndMinute(sunAtThirdEvening)}
      - Sun at 45 Degrees: ${getHourAndMinute(sunAtHalfEvening)}
      - Evening Golden Hour: ${getHourAndMinute(goldenHour)}
`;

export default generateReport;
