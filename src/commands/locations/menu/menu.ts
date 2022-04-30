import prompts from 'prompts'
import menuQuestions from './questions/menuQuestions'

type Action = 'seeAllLocations' | 'createLocation' | 'deleteLocation'

const menu = async () => {
  let selectedChoice: Action

  do {
    const { choice } = await prompts(menuQuestions)
    selectedChoice = choice
  } while (!selectedChoice)

  return selectedChoice
}

export default menu
