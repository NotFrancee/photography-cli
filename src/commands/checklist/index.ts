import chalk from 'chalk'
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
      case 'toggleChecklist':
        break
      case 'exit':
        console.log(chalk.green.bold('Ok, see you soon!'))
        exit = true
        break
      case 'newItem':
        console.log('still to implement')
        break
      default:
        console.log('something unexpected happened')
    }
  } while (!exit)
}

export default checklist
