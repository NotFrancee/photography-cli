import { PromptObject } from 'prompts'

const menuQuestions: PromptObject[] = [
  {
    type: 'select',
    name: 'choice',
    message: 'What do you want to do? ',
    choices: [
      {
        title: 'See all locations',
        value: 'seeAllLocations',
        disabled: true,
      },
      {
        title: 'Create a new Location',
        value: 'createLocation',
      },
      {
        title: 'Delete a Location',
        value: 'deleteLocation',
        disabled: true,
      },
    ],
  },
]

export default menuQuestions
