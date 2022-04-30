import prompts from 'prompts'
import menuQuestions from './menu'

type Action = 'toggleChecklist' | 'newItem' | 'exit'

const toggleMenu = async () => {
  const { nextAction } = await prompts(menuQuestions)
  return nextAction as Action
}

export default toggleMenu
