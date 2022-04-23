import { GetTimesResult } from 'suncalc'

export interface ExtendedTimes extends GetTimesResult {
  sunAtThirdMorning: Date
  sunAtThirdEvening: Date
  sunAtHalfMorning: Date
  sunAtHalfEvening: Date
}
