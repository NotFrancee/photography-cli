import prompt from 'prompts'
import selectPrompt from './list'

const checklistPrompt = async () => {
  await prompt(selectPrompt)
}

export default checklistPrompt
