import { logger } from '../../utils'
import checklistPrompt from './checklistPrompt'

const checklist = () => {
  logger.subtitle('Checklist')
  checklistPrompt()
}

export default checklist
