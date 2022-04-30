import { logger } from '../../utils'
import toggleMenu from './menu/toggleMenu'
import toggleChecklist from './toggleChecklist'

const checklist = async () => {
  logger.subtitle('Checklist')
  let exit = false

  do {
    await toggleChecklist()
    const nextAction = await toggleMenu()

    switch (nextAction) {
      case 'exit':
        exit = true
        break
      case 'newItem':
        console.log('still to implement')
        break
      case 'toggleChecklist':
        break
      default:
        console.log('something unexpected happened')
    }
  } while (!exit)
}

export default checklist
