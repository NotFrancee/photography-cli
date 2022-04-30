import prompts from 'prompts'
import checklistPrompt from './items/checklistPrompt'

const toggleChecklist = async () => {
  await prompts(checklistPrompt)
  return
}

export default toggleChecklist
