import { logger } from '../../utils'
import generateReport from './report/generateReport'
import { getMainData, promptUser } from './suncalc'

const getLocationReport = async () => {
  logger.title('Location Report')
  const { date, lat, location, lon } = await promptUser()

  const data = getMainData(date, lat, lon)
  console.log(generateReport(data))
}

export default getLocationReport
