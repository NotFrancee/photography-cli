import { logger } from '../../utils'
import toggleChecklist from './toggleChecklist'

const checklist = () => {
  logger.subtitle('Checklist')
  toggleChecklist()
}

export default checklist
