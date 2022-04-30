import prompts from 'prompts'
import checklistPrompt from './items/checklistPrompt'

const toggleChecklist = () => {
  prompts(checklistPrompt)
}

export default toggleChecklist
