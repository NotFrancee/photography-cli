import { logger } from '../../utils'
import Conf from 'conf'
import menu from './menu/menu'

const locations = async () => {
  logger.title('Location Report')

  const config = new Conf()

  const selectedAction = await menu()

  switch (selectedAction) {
    case 'createLocation': {
    }

    case 'deleteLocation': {
    }

    case 'seeAllLocations': {
    }

    default: {
      console.log('this was not supposed to happen')
      return
    }
  }
}

export default locations
