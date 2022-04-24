import { getHourAndMinute, getTimespan } from './formatTimes'
import { ExtendedTimes } from '@types'

const morningData = ({
  sunrise,
  sunriseEnd,
  sunAtThirdMorning,
  sunAtHalfMorning,
  goldenHourEnd,
  solarNoon,
}: ExtendedTimes) => {
  const sunriseTimeframe = `from ${getHourAndMinute(
    sunrise
  )} to ${getHourAndMinute(sunriseEnd)}`

  return `
    - Sunrise
      - Timeframe: ${sunriseTimeframe}
      - Total Duration: ${getTimespan(sunrise, sunriseEnd)} minutes
      - Sun at 30 Degrees: ${getHourAndMinute(sunAtThirdMorning)}
      - Sun at 45 Degrees: ${getHourAndMinute(sunAtHalfMorning)}
      - Morning Golden Hour ends at: ${getHourAndMinute(goldenHourEnd)}

    - Day
      - Sun will be at its highest at ${getHourAndMinute(solarNoon)}
`
}

const eveningData = ({
  sunsetStart,
  sunset,
  sunAtThirdEvening,
  sunAtHalfEvening,
  goldenHour,
}: ExtendedTimes) => {
  const sunsetTimeframe = `from ${getHourAndMinute(
    sunsetStart
  )} to ${getHourAndMinute(sunset)}`

  return `
    - Sunset
      - Timeframe: ${sunsetTimeframe}
      - Total Duration: ${getTimespan(sunsetStart, sunset)} minutes
      - Sun at 30 Degrees: ${getHourAndMinute(sunAtThirdEvening)}
      - Sun at 45 Degrees: ${getHourAndMinute(sunAtHalfEvening)}
      - Evening Golden Hour: ${getHourAndMinute(goldenHour)}
  `
}

const generateReport = (data: ExtendedTimes) => `
  Here is your report!
    ${morningData(data)}
    ${eveningData(data)}
`

export default generateReport
